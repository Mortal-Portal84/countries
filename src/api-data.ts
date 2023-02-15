import { Country } from './types'

export const getDataFromAPI = async (): Promise<Country[]> => fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(result => result)