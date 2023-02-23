import { Country } from './types'

const BASE_URL = 'https://restcountries.com/v3.1'
export const getCountriesList = async (): Promise<Country[]> =>
  fetch(`${BASE_URL}/all`)
    .then(response => response.json())
export const getCountryByName = async (name: string): Promise<Country[]> =>
  fetch(`${BASE_URL}/translation/${name}`)
    .then(response => response.json())

export const getCountryById = async (name: string): Promise<Country[]> =>
  fetch(`${BASE_URL}/name/${name}`)
    .then(response => response.json())
