export type Translation = {
  official: string
  common: string
}

export type Currency = {
  name: string
  symbol: string
}

export type Country = {
  name: Translation & {
    nativeName: Record<string, Translation>
  }
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Record<string, Currency>,
  idd: {
    root: string
    suffixes: string[]
  },
  capital?: string[],
  altSpellings: string[],
  region: string
  subregion: string
  languages: Record<string, string>,
  translations: Record<'ara'
    | 'bre'
    | 'ces'
    | 'cym'
    | 'deu'
    | 'est'
    | 'fin'
    | 'fra'
    | 'hrv'
    | 'hun'
    | 'ita'
    | 'jpn'
    | 'kor'
    | 'nld'
    | 'per'
    | 'pol'
    | 'por'
    | 'rus'
    | 'slk'
    | 'spa'
    | 'srp'
    | 'swe'
    | 'tur'
    | 'urd'
    | 'zho', Translation>
  latlng: [number, number]
  landlocked: boolean
  area: number
  demonyms: {
    eng: {
      f: string
      m: string
    },
    fra: {
      f: string
      m: string
    }
  },
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  },
  population: number
  gini: Record<string, number>
  fifa: string
  car: {
    signs: string[]
    side: string
  },
  timezones: string[],
  continents: string[],
  flags: {
    png: string
    svg: string
    alt: string
  },
  coatOfArms: {
    png: string
    svg: string
  },
  startOfWeek: string
  capitalInfo?: {
    latlng: [number, number]
  },
  postalCode: {
    format: string
    regex: string
  }
}