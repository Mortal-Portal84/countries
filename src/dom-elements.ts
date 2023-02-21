import { Country } from './types'

let number = 1

const cardTable = document.getElementById('card-table') as HTMLTableCellElement
const card = document.getElementById('card') as HTMLDivElement
const tableButton = document.getElementById('card-btn') as HTMLButtonElement
tableButton.addEventListener('click', () => card.classList.add('hidden'))

export const createCountryCard = () => {
  const tableBodyRow = document.createElement('tr') as HTMLTableRowElement
  const tableNumber = document.createElement('th') as HTMLTableCellElement
        tableNumber.scope = 'row'
  const tableInfo = document.createElement('td') as HTMLTableCellElement
  const tableDescription = document.createElement('td') as HTMLTableCellElement

  tableNumber.textContent = `${number}`
  tableInfo.textContent = 'Hare Krishna!'
  tableDescription.textContent = 'Hare Rama!'
  tableBodyRow.append(tableNumber, tableInfo, tableDescription)
  cardTable.append(tableBodyRow)

  return cardTable
}
export const createTableRow = (country: Country): HTMLTableRowElement => {
  const tabRow = document.createElement('tr') as HTMLTableRowElement
        tabRow.classList.add('country-row')
  const tabHeader = document.createElement('th') as HTMLTableCellElement
  const countryName = document.createElement('td') as HTMLTableCellElement
  const capital = document.createElement('td') as HTMLTableCellElement
  const flag = document.createElement('td') as HTMLTableCellElement

  tabHeader.scope = 'row'
  tabHeader.textContent = `${number}`
  countryName.textContent = country.name['common']
  capital.textContent = country.capital ? country.capital[0] : ''
  flag.textContent = country.flag
  number++

  tabRow.append(tabHeader, countryName, capital, flag)
  tabRow.addEventListener('click', () => {
    cardTable.innerHTML = ''
    createCountryCard()
    card.classList.remove('hidden')
  })

  return tabRow
}
