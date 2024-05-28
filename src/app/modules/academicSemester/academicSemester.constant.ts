import {
  TAcademicCodes,
  TAcademicNames,
  TAcademicSectionNameCode,
  TMonths,
} from './academic.interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicNames: TAcademicNames[] = ['Autumn', 'Summer', 'Fall'];

export const academicCodes: TAcademicCodes[] = ['01', '02', '03'];

export const academicSectionNameCode: TAcademicSectionNameCode = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
