import { Country } from './types'

export const appendRow = (country: Country): HTMLTableRowElement => {
  const tableBody = document.getElementById('tableBody') as HTMLTableElement
  const tableRow = document.createElement('tr') as HTMLTableRowElement
  const tableHeader = document.createElement('th') as HTMLTableCellElement
  tableHeader.scope = 'row'
  const countryName = document.createElement('td') as HTMLTableCellElement
  const countryCapital = document.createElement('td') as HTMLTableCellElement
  const countryFlag = document.createElement('td') as HTMLTableCellElement

  tableHeader.textContent = `#`
  countryName.textContent = country.name['common']

  countryCapital.textContent = country.capital ? country.capital[0] : ''

  countryFlag.textContent = country.flag


  tableRow.append(tableHeader, countryName, countryCapital, countryFlag )
  tableBody.append(tableRow)

  return tableRow
}

