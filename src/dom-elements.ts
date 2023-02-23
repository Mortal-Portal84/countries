import {Modal} from 'bootstrap'
import { Country } from './types'
import { getCountryById, getCountryByName } from './api-data'

const searchInput = document.getElementById('input') as HTMLInputElement
const searchForm = document.getElementById('form') as HTMLFormElement
const tableBody = document.getElementById('tableBody') as HTMLTableCellElement
const notFound = document.querySelector('.not-found') as HTMLTableRowElement
const modalWindow = document.getElementById('modal') as HTMLDivElement
const modalTitle = modalWindow.querySelector('.country-title') as HTMLHeadingElement
const modalBody = modalWindow.querySelector('.modal-body') as HTMLDivElement
const modal = new Modal(modalWindow)
searchForm.addEventListener('submit', (event) => {
  event.preventDefault()

  notFound.classList.add('hidden')

  getCountryByName(searchInput.value)
    .then((countries) => {
      if (countries?.length) {
        updateTable(countries)
      } else {
        tableBody.replaceChildren()
        notFound.classList.remove('hidden')
      }
    })
})

export const createCountryCard = (country: Country): HTMLDivElement => {
  const card = document.createElement('div')
  card.classList.add('card')

  const img = document.createElement('img')
  img.classList.add('card-img-top')
  img.src = country.flags.svg
  img.alt = country.name.common

  const body = document.createElement('div')
  body.classList.add('card-body')

  const p = document.createElement('p')
  p.classList.add('card-text')
  p.textContent = `Capital: ${country.capital}`

  body.append(p)

  const ul = document.createElement('ul')
  ul.classList.add('list-group', 'list-group-flush')

  const list: HTMLLIElement[] = country.timezones.map((timezone) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.textContent = timezone

    return li
  })

  ul.append(...list)

  const body2 = document.createElement('div')
  body2.classList.add('card-body')

  const a = document.createElement('a') as HTMLAnchorElement
  a.href = country.maps.googleMaps
  a.textContent = 'Map'
  a.target = '_blank'

  body2.append(a)

  card.append(img, body, ul, body2)

  return card
}

const openModal = async (id: string): Promise<void> => {
  getCountryById(id).then((countries) => {
    const [country] = countries
    modalTitle.textContent = country.name.official
    const card = createCountryCard(country)
    modalBody.replaceChildren(card)
    modal.show()
  })
}

export const createTableRow = (country: Country, index: number): HTMLTableRowElement => {
  const row = document.createElement('tr') as HTMLTableRowElement
  row.classList.add('country-row')
  const header = document.createElement('th') as HTMLTableCellElement
  const countryName = document.createElement('td') as HTMLTableCellElement
  const capital = document.createElement('td') as HTMLTableCellElement
  const flag = document.createElement('td') as HTMLTableCellElement

  header.scope = 'row'
  header.textContent = `${index}`
  countryName.textContent = country.name['common']
  capital.textContent = country.capital ? country.capital[0] : ''
  flag.textContent = country.flag

  row.append(header, countryName, capital, flag)
  row.addEventListener('click', async () => {
    await openModal(country.name.common)
  })

  return row
}

export const updateTable = (countries: Country[]): void => {
  tableBody
    .replaceChildren(...countries
      ?.map((country, index) => createTableRow(country, index + 1)))
}
