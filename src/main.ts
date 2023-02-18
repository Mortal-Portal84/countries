import './style.scss'
// @ts-ignore
import * as bootstrap from 'bootstrap'
import { getCountriesList, getCountryByName } from './api-data'
import { createTableRow } from './dom-elements'
import { Country } from './types'

const tabBody = document.getElementById('tableBody') as HTMLTableElement
const searchInput = document.getElementById('input') as HTMLInputElement
const searchForm = document.getElementById('form') as HTMLFormElement

const appendTableData = async (searchQuery: Promise<Country[]>) => {
  try {
    const countriesList = await searchQuery
    tabBody.append(...countriesList?.map((country: Country) => createTableRow(country)))
  } catch (error) {
    alert('Country was not found!')
  }
}

appendTableData(getCountriesList()).then()

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  tabBody.innerHTML = ''
  appendTableData(getCountryByName(searchInput.value)).then()
})

