import { CarCompany } from './types';

export const carCompanies: CarCompany[] = [
  {
    id: 1,
    name: "Toyota",
    country: "Japan",
    founded: 1937,
    logo: "https://images.unsplash.com/photo-1611016186353-9af58c69c533?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 280.5, profit: 23.1, unitsSold: 10.5, marketShare: 12.5 },
      { year: 2022, revenue: 265.2, profit: 21.8, unitsSold: 9.8, marketShare: 12.2 },
      { year: 2021, revenue: 245.4, profit: 19.2, unitsSold: 9.1, marketShare: 11.8 }
    ]
  },
  {
    id: 2,
    name: "Volkswagen",
    country: "Germany",
    founded: 1937,
    logo: "https://images.unsplash.com/photo-1608541737042-87a12275d313?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 250.2, profit: 18.6, unitsSold: 8.9, marketShare: 11.2 },
      { year: 2022, revenue: 235.5, profit: 17.2, unitsSold: 8.3, marketShare: 10.8 },
      { year: 2021, revenue: 220.1, profit: 15.8, unitsSold: 7.8, marketShare: 10.5 }
    ]
  },
  {
    id: 3,
    name: "Ford",
    country: "USA",
    founded: 1903,
    logo: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 158.1, profit: 10.2, unitsSold: 4.2, marketShare: 5.8 },
      { year: 2022, revenue: 148.0, profit: 9.8, unitsSold: 4.0, marketShare: 5.5 },
      { year: 2021, revenue: 136.3, profit: 8.9, unitsSold: 3.8, marketShare: 5.2 }
    ]
  },
  {
    id: 4,
    name: "Honda",
    country: "Japan",
    founded: 1948,
    logo: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 142.5, profit: 9.8, unitsSold: 4.8, marketShare: 5.9 },
      { year: 2022, revenue: 135.2, profit: 9.1, unitsSold: 4.5, marketShare: 5.7 },
      { year: 2021, revenue: 129.8, profit: 8.5, unitsSold: 4.3, marketShare: 5.5 }
    ]
  },
  {
    id: 5,
    name: "BMW",
    country: "Germany",
    founded: 1916,
    logo: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 135.6, profit: 11.2, unitsSold: 2.5, marketShare: 3.8 },
      { year: 2022, revenue: 128.4, profit: 10.5, unitsSold: 2.4, marketShare: 3.6 },
      { year: 2021, revenue: 120.2, profit: 9.8, unitsSold: 2.2, marketShare: 3.4 }
    ]
  },
  {
    id: 6,
    name: "Mercedes-Benz",
    country: "Germany",
    founded: 1926,
    logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 145.2, profit: 12.1, unitsSold: 2.3, marketShare: 3.5 },
      { year: 2022, revenue: 138.9, profit: 11.5, unitsSold: 2.2, marketShare: 3.3 },
      { year: 2021, revenue: 130.5, profit: 10.8, unitsSold: 2.1, marketShare: 3.2 }
    ]
  },
  {
    id: 7,
    name: "General Motors",
    country: "USA",
    founded: 1908,
    logo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 156.7, profit: 10.5, unitsSold: 6.3, marketShare: 7.8 },
      { year: 2022, revenue: 149.2, profit: 9.9, unitsSold: 6.0, marketShare: 7.5 },
      { year: 2021, revenue: 140.8, profit: 9.2, unitsSold: 5.7, marketShare: 7.2 }
    ]
  },
  {
    id: 8,
    name: "Hyundai",
    country: "South Korea",
    founded: 1967,
    logo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 120.3, profit: 8.5, unitsSold: 4.2, marketShare: 5.2 },
      { year: 2022, revenue: 114.8, profit: 8.0, unitsSold: 4.0, marketShare: 5.0 },
      { year: 2021, revenue: 108.2, profit: 7.5, unitsSold: 3.8, marketShare: 4.8 }
    ]
  },
  {
    id: 9,
    name: "Kia",
    country: "South Korea",
    founded: 1944,
    logo: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 98.5, profit: 6.8, unitsSold: 3.2, marketShare: 4.0 },
      { year: 2022, revenue: 93.2, profit: 6.4, unitsSold: 3.0, marketShare: 3.8 },
      { year: 2021, revenue: 88.6, profit: 6.0, unitsSold: 2.8, marketShare: 3.6 }
    ]
  },
  {
    id: 10,
    name: "Tesla",
    country: "USA",
    founded: 2003,
    logo: "https://images.unsplash.com/photo-1617886753890-d5cd72a0b16b?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 96.8, profit: 12.6, unitsSold: 1.8, marketShare: 2.2 },
      { year: 2022, revenue: 81.5, profit: 10.5, unitsSold: 1.5, marketShare: 1.9 },
      { year: 2021, revenue: 53.8, profit: 7.2, unitsSold: 1.0, marketShare: 1.3 }
    ]
  },
  {
    id: 11,
    name: "Nissan",
    country: "Japan",
    founded: 1933,
    logo: "https://images.unsplash.com/photo-1621007947982-d44276f5dfc8?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 89.2, profit: 5.8, unitsSold: 3.8, marketShare: 4.7 },
      { year: 2022, revenue: 84.5, profit: 5.4, unitsSold: 3.6, marketShare: 4.5 },
      { year: 2021, revenue: 79.8, profit: 5.0, unitsSold: 3.4, marketShare: 4.3 }
    ]
  },
  {
    id: 12,
    name: "Subaru",
    country: "Japan",
    founded: 1953,
    logo: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 45.2, profit: 3.2, unitsSold: 1.2, marketShare: 1.5 },
      { year: 2022, revenue: 42.8, profit: 3.0, unitsSold: 1.1, marketShare: 1.4 },
      { year: 2021, revenue: 40.5, profit: 2.8, unitsSold: 1.0, marketShare: 1.3 }
    ]
  },
  {
    id: 13,
    name: "Porsche",
    country: "Germany",
    founded: 1931,
    logo: "https://images.unsplash.com/photo-1611651338412-8403fa6e3c44?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 75.8, profit: 9.2, unitsSold: 0.8, marketShare: 1.0 },
      { year: 2022, revenue: 71.2, profit: 8.6, unitsSold: 0.75, marketShare: 0.9 },
      { year: 2021, revenue: 66.9, profit: 8.0, unitsSold: 0.7, marketShare: 0.9 }
    ]
  },
  {
    id: 14,
    name: "Mazda",
    country: "Japan",
    founded: 1920,
    logo: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 38.5, profit: 2.5, unitsSold: 1.5, marketShare: 1.9 },
      { year: 2022, revenue: 36.2, profit: 2.3, unitsSold: 1.4, marketShare: 1.8 },
      { year: 2021, revenue: 34.1, profit: 2.1, unitsSold: 1.3, marketShare: 1.7 }
    ]
  },
  {
    id: 15,
    name: "Volvo",
    country: "Sweden",
    founded: 1927,
    logo: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 52.6, profit: 4.2, unitsSold: 0.9, marketShare: 1.1 },
      { year: 2022, revenue: 49.8, profit: 3.9, unitsSold: 0.85, marketShare: 1.1 },
      { year: 2021, revenue: 47.2, profit: 3.6, unitsSold: 0.8, marketShare: 1.0 }
    ]
  },
  {
    id: 16,
    name: "Jaguar Land Rover",
    country: "UK",
    founded: 1922,
    logo: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 42.8, profit: 3.1, unitsSold: 0.6, marketShare: 0.8 },
      { year: 2022, revenue: 40.5, profit: 2.9, unitsSold: 0.57, marketShare: 0.7 },
      { year: 2021, revenue: 38.2, profit: 2.7, unitsSold: 0.54, marketShare: 0.7 }
    ]
  },
  {
    id: 17,
    name: "Renault",
    country: "France",
    founded: 1899,
    logo: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 58.2, profit: 4.1, unitsSold: 2.2, marketShare: 2.7 },
      { year: 2022, revenue: 55.1, profit: 3.8, unitsSold: 2.1, marketShare: 2.6 },
      { year: 2021, revenue: 52.3, profit: 3.5, unitsSold: 2.0, marketShare: 2.5 }
    ]
  },
  {
    id: 18,
    name: "Peugeot",
    country: "France",
    founded: 1896,
    logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 54.8, profit: 3.8, unitsSold: 2.0, marketShare: 2.5 },
      { year: 2022, revenue: 51.9, profit: 3.5, unitsSold: 1.9, marketShare: 2.4 },
      { year: 2021, revenue: 49.2, profit: 3.2, unitsSold: 1.8, marketShare: 2.3 }
    ]
  },
  {
    id: 19,
    name: "Fiat",
    country: "Italy",
    founded: 1899,
    logo: "https://images.unsplash.com/photo-1612911912304-5c58f4a95a36?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 45.6, profit: 2.9, unitsSold: 1.8, marketShare: 2.2 },
      { year: 2022, revenue: 43.2, profit: 2.7, unitsSold: 1.7, marketShare: 2.1 },
      { year: 2021, revenue: 41.0, profit: 2.5, unitsSold: 1.6, marketShare: 2.0 }
    ]
  },
  {
    id: 20,
    name: "Audi",
    country: "Germany",
    founded: 1909,
    logo: "https://images.unsplash.com/photo-1610880846497-7257b23f6138?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 92.4, profit: 8.1, unitsSold: 1.9, marketShare: 2.4 },
      { year: 2022, revenue: 87.6, profit: 7.6, unitsSold: 1.8, marketShare: 2.3 },
      { year: 2021, revenue: 83.1, profit: 7.1, unitsSold: 1.7, marketShare: 2.2 }
    ]
  },
  {
    id: 21,
    name: "Lexus",
    country: "Japan",
    founded: 1989,
    logo: "https://images.unsplash.com/photo-1622199678883-062ea8f0bcd0?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 48.2, profit: 5.2, unitsSold: 0.8, marketShare: 1.0 },
      { year: 2022, revenue: 45.6, profit: 4.9, unitsSold: 0.75, marketShare: 0.9 },
      { year: 2021, revenue: 43.1, profit: 4.6, unitsSold: 0.7, marketShare: 0.9 }
    ]
  },
  {
    id: 22,
    name: "Chrysler",
    country: "USA",
    founded: 1925,
    logo: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 42.1, profit: 2.8, unitsSold: 1.5, marketShare: 1.9 },
      { year: 2022, revenue: 39.8, profit: 2.6, unitsSold: 1.4, marketShare: 1.8 },
      { year: 2021, revenue: 37.6, profit: 2.4, unitsSold: 1.3, marketShare: 1.7 }
    ]
  },
  {
    id: 23,
    name: "Mitsubishi",
    country: "Japan",
    founded: 1970,
    logo: "https://images.unsplash.com/photo-1621007947982-d44276f5dfc8?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 35.8, profit: 2.1, unitsSold: 1.2, marketShare: 1.5 },
      { year: 2022, revenue: 33.9, profit: 1.9, unitsSold: 1.1, marketShare: 1.4 },
      { year: 2021, revenue: 32.1, profit: 1.7, unitsSold: 1.0, marketShare: 1.3 }
    ]
  },
  {
    id: 24,
    name: "Bentley",
    country: "UK",
    founded: 1919,
    logo: "https://images.unsplash.com/photo-1617788138017-80ad40cc4cc0?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 28.5, profit: 3.8, unitsSold: 0.15, marketShare: 0.2 },
      { year: 2022, revenue: 26.9, profit: 3.5, unitsSold: 0.14, marketShare: 0.2 },
      { year: 2021, revenue: 25.4, profit: 3.2, unitsSold: 0.13, marketShare: 0.2 }
    ]
  },
  {
    id: 25,
    name: "Rolls-Royce",
    country: "UK",
    founded: 1904,
    logo: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 24.2, profit: 3.5, unitsSold: 0.12, marketShare: 0.15 },
      { year: 2022, revenue: 22.8, profit: 3.2, unitsSold: 0.11, marketShare: 0.14 },
      { year: 2021, revenue: 21.5, profit: 2.9, unitsSold: 0.10, marketShare: 0.13 }
    ]
  },
  {
    id: 26,
    name: "Lamborghini",
    country: "Italy",
    founded: 1963,
    logo: "https://images.unsplash.com/photo-1621247023979-d06a4756ca06?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 22.8, profit: 3.2, unitsSold: 0.09, marketShare: 0.11 },
      { year: 2022, revenue: 21.5, profit: 2.9, unitsSold: 0.085, marketShare: 0.11 },
      { year: 2021, revenue: 20.3, profit: 2.6, unitsSold: 0.08, marketShare: 0.10 }
    ]
  },
  {
    id: 27,
    name: "Maserati",
    country: "Italy",
    founded: 1914,
    logo: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 19.5, profit: 2.1, unitsSold: 0.08, marketShare: 0.10 },
      { year: 2022, revenue: 18.4, profit: 1.9, unitsSold: 0.075, marketShare: 0.09 },
      { year: 2021, revenue: 17.4, profit: 1.7, unitsSold: 0.07, marketShare: 0.09 }
    ]
  },
  {
    id: 28,
    name: "Ferrari",
    country: "Italy",
    founded: 1939,
    logo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 32.5, profit: 5.8, unitsSold: 0.11, marketShare: 0.14 },
      { year: 2022, revenue: 30.7, profit: 5.4, unitsSold: 0.10, marketShare: 0.13 },
      { year: 2021, revenue: 29.0, profit: 5.0, unitsSold: 0.095, marketShare: 0.12 }
    ]
  },
  {
    id: 29,
    name: "Bugatti",
    country: "France",
    founded: 1909,
    logo: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 18.2, profit: 3.5, unitsSold: 0.05, marketShare: 0.06 },
      { year: 2022, revenue: 17.2, profit: 3.2, unitsSold: 0.045, marketShare: 0.06 },
      { year: 2021, revenue: 16.2, profit: 2.9, unitsSold: 0.04, marketShare: 0.05 }
    ]
  },
  {
    id: 30,
    name: "McLaren",
    country: "UK",
    founded: 1963,
    logo: "https://images.unsplash.com/photo-1621007947982-d44276f5dfc8?auto=format&fit=crop&q=80&w=200",
    yearlyData: [
      { year: 2023, revenue: 16.8, profit: 2.8, unitsSold: 0.06, marketShare: 0.08 },
      { year: 2022, revenue: 15.9, profit: 2.6, unitsSold: 0.055, marketShare: 0.07 },
      { year: 2021, revenue: 15.0, profit: 2.4, unitsSold: 0.05, marketShare: 0.06 }
    ]
  }
];