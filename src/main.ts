// @ts-ignore
import * as bootstrap from 'bootstrap'
import { getCountriesList } from './api-data'
import { updateTable } from './dom-elements'

import './style.scss'

getCountriesList()
  .then((countries) => updateTable(countries))

