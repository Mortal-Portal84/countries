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

