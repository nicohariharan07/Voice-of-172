export type AreaStreetGroup = {
  area: string
  streets: readonly string[]
}

// Transcribed from 172StreetName.pdf. Preserve the source spelling so residents
// can match the options to the names used in the supplied area list.
export const AREA_STREETS: readonly AreaStreetGroup[] = [
  {
    area: 'IIT Campus',
    streets: [
      'IIT Campus New', '4th Cross Street', 'Pan Avenue', '3rd Cross Street',
      '8th Cross Street', '5th Cross Street', '9th Cross Street', '12th Loop Street',
      '12th Cross Street', '13th Cross Street', '14th Cross Street', 'Zig Zag Street',
      'Lakeview Street', '11th Street', '12th Street', 'Delhi Avenue',
      '6th Cross Street', '1St Cross Street',
    ],
  },
  {
    area: 'Kannigapuram',
    streets: [
      'Kannigapuram Ist Street', 'Kannigapuram 2nd Street', 'Kannigapuram 3rd Street',
      'Kannigapuram 4th Street', 'Kannigapuram 5th Street', 'Kannigapuram 6th Street',
      'Kannigapuram 7th Street', 'Kannigapuram 8th Street', 'Kannigapuram 10th Street',
      'Kannigapuram 11th Street', 'Kannigapuram 12th Street', 'Kannigapuram 13th Street',
      'Kannigapuram 14th Street', 'Kannigapuram 15th Street', 'Kannigapuram 16th Street',
      'Kanniagapuram 17th Street', 'Kannigapuram 18th Street 34 Street Garden',
    ],
  },
  {
    area: 'Checkkpost Junction',
    streets: [
      'Gul Mohar Avenue', 'Appaswamy Malkova', 'Appaswamy Parkhouse Mews',
      'Mangolia Park', 'Raj Bhavan Colony',
    ],
  },
  {
    area: 'Halda',
    streets: [
      'Sudharsan Gardan', 'B.C.G.Employees Housing Board', 'Alsadiyar Park',
      'Raj Bhavan Governor House', 'Forest Officers Quarters',
    ],
  },
  {
    area: 'Nehru Nagar',
    streets: [
      'Nehru Nagar 1st Street', 'Nehru Nagar 3rd Street', 'Nehru Nagar 4th Street',
      'Kanniyamman Koil Street', 'Pillaiyar koil Street', 'Anbalagan street',
      'Govinda Samy Street', 'Bharathithasan Street', 'K.V.K Samy Street',
      'Jeevanandam Street', 'Sathya Murthy Street', 'Nehru Nagar 2nd Street',
      'Veeravanjinathan Street', 'Nedunchezhiyan Street', 'Periyar Street',
      'New Colony', 'Anbil Dharmalingam Street', 'Madavan Street',
      'Veerapandy Kattabomman Street',
    ],
  },
  {
    area: 'Kamarajpuram',
    streets: [
      'Gandhi Street 1 to 67', 'Kannagi Street 1 to 19', 'Gangai Amman Koil Ist Street',
      'Marudu Pandiyan Salai', 'Pradap Chandran Street', 'Gangaiamman Koil Street',
      'bharathi street kamarajapuram',
    ],
  },
  {
    area: 'Anna Garden',
    streets: [
      'K.R.Ramasamy Nagar', 'Ambedkar Nagar', 'Castle Winds', 'Vasantham Apartments',
      'Police Quarters', 'Villa Espana', 'Anna Thottam Ist Street',
      'Anna Thottam 2nd Street', 'Appalakulam Street', 'Karumariyamman Koil Street',
      'Nagendiran Nagar 1 to 33',
    ],
  },
  {
    area: '100 Feet Road',
    streets: [
      'Janakpuri Ist Street', 'Sankaran Avenue', 'Janakpuri 2nd Street',
      'Somasundaram Street', 'Pasumpon Street', 'Radha Mohan Street',
      'Pandiyan Street', 'Rajagopalan Street', 'Periyar Nagar',
    ],
  },
  {
    area: 'Guindy Bharathi Nagar',
    streets: [
      'Pandi Durai Street', 'bharathi nagar main road', 'M.G.R.street',
      'Nethaji Street', 'Krishnamoorthy Street', 'Pilliyar Koil Street',
    ],
  },
  {
    area: 'Race View Colony',
    streets: [
      'Race Course Road', 'Race Course Inner Road Appartments',
      'Sigal Race View Apartments', 'Dr Ambedkar Street', 'Race Corce Street',
      'Race View Colony Ist Street', 'Race View Colony 2nd Street', 'Chandira Flats',
      'Race View Colony 3rd Street', 'Tank Square Street', 'Chakrapani Salai',
    ],
  },
  {
    area: 'Narasingapuram',
    streets: [
      'Narasingapuram Extn', 'Narasingapuram Ist Street', 'Narasingapuram 2nd Street',
      'Narasingapuram 3rd Street', 'Narasingapuram 4th Street',
      'Narasingapuram 5th Street', 'Narasingapuram 6th Street',
      'Narasingapuram 8th Street', 'Narasingapuram Main Salai',
    ],
  },
  {
    area: 'Vandikaran Street',
    streets: [
      'Ranganathan Street', 'thirumurugan street', 'Raman Avenue', 'Vandikaran Road',
      'Selva Vinayagar Quarters', 'Sangeetha Apartment', 'Rasi Apartments',
      'Kannan Apartments', 'Kala Flats', 'CTS Avenue Whole Block',
      'Vandikaran Street', 'Race View Apartment', 'Golaulam Colo',
      'Gopalakrishnan Street', 'Umapathy Thottam',
      'Secretariat Colony City Limit Road', 'Angalamman Kovil 2nd Street',
      'CTS Guindy Enclave', 'Angalamman Koil 1st Str',
      'Angalamman Koil 1st Street', 'Agilandeswari Apartment', 'Balaji Avenue',
    ],
  },
  {
    area: 'Mosque Colony',
    streets: [
      'Vingneshwara Street', 'Chandran Street', 'Mettupalayam New Street',
      'Chandiran Street', 'New Number 1 Mahalakshmi Flat A Block',
      'mahalakshmi flat b block', 'Mahalakshmi Flat C Block',
      'Masudi Colony 2nd Street', 'Masudi Colony 3rd street',
      'Masudi Colony 4th Street', 'Masudi Colony Sth street',
      'Masudi Colony 6th Street', 'Masudi Colony 7th Street', 'Masudi Colony 8th Street',
      'Masudi Colony Ist Street', 'Masuthi Colony 13th Street',
      'Masuthi Colony 14th Street', 'Masuthi Colony 15th Street',
      'Masuthi Colony 16th Street', 'Masuthi Colony 17th Street',
      'Masuthi Colony 9th Street', 'Mettu Street', 'New Street Mosque Colony Street',
      'Mosque Colony 10th Street', 'Mosque Colony 11th Street',
      'Mosque Colony 12th Street', 'Nethaji Road',
    ],
  },
  {
    area: 'Monthopu Five Furlong Road',
    streets: [
      'Manthoppu Ist Street', 'Manthoppu 2nd Street', 'Manthoppu 3rd Street',
      'Purvan Somerset',
    ],
  },
  {
    area: 'Sengoniyamman Koil Street',
    streets: [
      'Sengoniyamman Koil 1st Street', 'Sengalani Amman Koil 2nd Street',
      'Sengalani Amman Koil Main Street', 'Sindicate Apartment',
      'Five Furlong Road Lane', 'Mangoliya Apartment', 'Sristy Apartment',
      'Sai Krishna Apartment', 'Five Furlong Salai Lane',
      'Five Furlong Salai Ist Street',
    ],
  },
  {
    area: 'Sathaipettai',
    streets: [
      'Maduraiveen Koil Street', 'Sathanipet 1st street', 'Sathanipet 2nd Street',
    ],
  },
  {
    area: 'Pilliyar Koil Street',
    streets: [
      'Pilliyar Koil Street 1 to 75', 'Pillaiyar Koil Street 76 to End',
      'Golds View Apartment',
    ],
  },
]

export const AREA_NAMES = AREA_STREETS.map(({ area }) => area)

export function getStreetsForArea(area: string): readonly string[] {
  return AREA_STREETS.find((group) => group.area === area)?.streets ?? []
}
