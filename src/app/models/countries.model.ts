export interface Country {
  code: string;
  country: string;
  region: string;
}

export interface CountryApiResponse {
  data: {
    [code: string]: {
      country: string;
      region: string;
    };
  };
}

export const CountryTableHeaders = [
  { key: 'Code', label: 'Country Code' },
  { key: 'Country', label: 'Country' },
  { key: 'Region', label: 'Region' }
];