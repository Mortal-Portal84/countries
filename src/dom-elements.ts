import { Country } from './types'

let number = 1

export const createTableRow = (country: Country): HTMLTableRowElement => {
  const tabRow = document.createElement('tr') as HTMLTableRowElement
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

  return tabRow
}

export const createCoutryCard = () => {
  const card = document.createElement('div') as HTMLDivElement
        card.classList.add('card')
  const cardHeader = document.createElement('div')
        cardHeader.classList.add('card-header')
  const cardTitle = document.createElement('h4') as HTMLHeadingElement
        cardTitle.classList.add('card-title')
  const cardBody = document.createElement('div') as HTMLDivElement
        cardBody.classList.add('card-body')

  const table = document.createElement('table') as HTMLTableElement
        table.classList.add('table', 'table-dark', 'table-striped')
  const tableHeader = document.createElement('thead') as HTMLTableSectionElement
  const tableRow = document.createElement('tr') as HTMLTableRowElement
  const tableHead = document.createElement('th') as HTMLTableCellElement
        tableHead.scope = 'row'
  const tableBody = document.createElement('tbody') as HTMLTableSectionElement
  const tableInfo = document.createElement('td') as HTMLTableCellElement
  const tableDescr = document.createElement('td') as HTMLTableCellElement

}
