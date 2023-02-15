import './style.scss'
// @ts-ignore
import * as bootstrap from 'bootstrap'
import { Country } from './types'
import { appendRow } from './append'

const getDataFromAPI = (): Promise<Country[]> => fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(result => result)

console.log(getDataFromAPI())

// getDataFromAPI().then(countryList => )


