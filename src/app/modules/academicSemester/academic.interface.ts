export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

// Define the academic names and codes types
export type TAcademicNames = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicCodes = '01' | '02' | '03';

// Define the academic semester type
export type TAcademicSemester = {
  name: TAcademicNames;
  code: TAcademicCodes;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSectionNameCode = {
  [key: string]: string;
};
