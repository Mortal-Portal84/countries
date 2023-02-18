import './style.scss'
// @ts-ignore
import * as bootstrap from 'bootstrap'
import { getCountriesList, getCountryByName } from './api-data'
import { createTableRow } from './dom-elements'
import { Country } from './types'

const tabBody = document.getElementById('tableBody') as HTMLTableElement
const searchInput = document.getElementById('input') as HTMLInputElement
const searchForm = document.getElementById('form') as HTMLFormElement
const searchBtn = document.getElementById('btn') as HTMLButtonElement

const appendTableData = async (searchQuery: Promise<Country[]>) => {
  const countriesList = await searchQuery
  tabBody.append(...countriesList.map((country: Country) => createTableRow(country)))
}

appendTableData(getCountriesList()).then()

const clearTable = () => tabBody.innerHTML = ''
searchBtn.addEventListener('click', () => {
  clearTable()
  appendTableData(getCountryByName(searchInput.value)).then()
})

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  clearTable()
  appendTableData(getCountryByName(searchInput.value)).then()
})

