// @ts-ignore
import * as bootstrap from 'bootstrap'
import { getCountriesList, getCountryByName } from './api-data'
import { createTableRow } from './dom-elements'
import { Country } from './types'
import './style.scss'

const tableBody = document.getElementById('tableBody') as HTMLTableCellElement
const searchInput = document.getElementById('input') as HTMLInputElement
const searchForm = document.getElementById('form') as HTMLFormElement
const notFound = document.querySelector('.not-found') as HTMLTableRowElement

getCountriesList().then(result => tableBody.append(...result?.map((country: Country) => createTableRow(country))))

searchForm.addEventListener('submit',(event) => {
  event.preventDefault()
  notFound.classList.add('hidden')
  tableBody.innerHTML = ''
    getCountryByName(searchInput.value)
      .then(response => response?.length
        ? tableBody.append(...response.map((country) => createTableRow(country)))
        : notFound.classList.remove('hidden'))
})
