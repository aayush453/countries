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