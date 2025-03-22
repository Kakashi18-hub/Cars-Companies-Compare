export interface CarCompany {
  id: number;
  name: string;
  country: string;
  founded: number;
  logo: string;
  yearlyData: YearlyData[];
}

export interface YearlyData {
  year: number;
  revenue: number;
  profit: number;
  unitsSold: number;
  marketShare: number;
}