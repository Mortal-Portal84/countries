import './style.scss'
// @ts-ignore
import * as bootstrap from 'bootstrap'
import { getDataFromAPI } from './api-data'
import { createTableRow } from './dom-elements'

const tabBody = document.getElementById('tableBody') as HTMLTableElement

const appendTableData = async () => {
  const countriesList = await getDataFromAPI()
  tabBody.append(...countriesList.map((country) => createTableRow(country)))
}

appendTableData().then()
