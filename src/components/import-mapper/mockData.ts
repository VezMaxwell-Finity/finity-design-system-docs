import type { ParsedFile } from './types';
import { autoMapColumns } from './utils';

export const MOCK_FILE: ParsedFile = {
  fileName: 'contacts_export_2024.csv',
  fileSize: 48320,
  totalRows: 1247,
  headers: ['First Name', 'Last Name', 'Email Address', 'Phone Number', 'Street Address', 'City', 'State', 'Zip Code', 'Country', 'Company', 'Notes'],
  rows: [
    { 'First Name': 'Sarah', 'Last Name': 'Chen', 'Email Address': 'sarah.chen@example.com', 'Phone Number': '+1 415 555 0182', 'Street Address': '742 Evergreen Terrace', 'City': 'San Francisco', 'State': 'CA', 'Zip Code': '94102', 'Country': 'USA', 'Company': 'Acme Corp', 'Notes': 'VIP client' },
    { 'First Name': 'Marcus', 'Last Name': 'Webb', 'Email Address': 'mwebb@techco.io', 'Phone Number': '+1 212 555 0143', 'Street Address': '1600 Pennsylvania Ave', 'City': 'New York', 'State': 'NY', 'Zip Code': '10001', 'Country': 'USA', 'Company': 'TechCo', 'Notes': '' },
    { 'First Name': 'Priya', 'Last Name': 'Patel', 'Email Address': 'priya.p@mailbox.com', 'Phone Number': '+44 20 7946 0958', 'Street Address': '10 Downing Street', 'City': 'London', 'State': '', 'Zip Code': 'SW1A 2AA', 'Country': 'UK', 'Company': '', 'Notes': 'Follow up Q2' },
    { 'First Name': 'James', 'Last Name': 'Okafor', 'Email Address': 'j.okafor@lagos.ng', 'Phone Number': '+234 801 234 5678', 'Street Address': '5 Broad Street', 'City': 'Lagos', 'State': 'Lagos', 'Zip Code': '100001', 'Country': 'Nigeria', 'Company': 'Global Trade Ltd', 'Notes': '' },
    { 'First Name': 'Emma', 'Last Name': 'Larsson', 'Email Address': 'emma.larsson@nordic.se', 'Phone Number': '+46 70 123 45 67', 'Street Address': 'Drottninggatan 14', 'City': 'Stockholm', 'State': '', 'Zip Code': '111 51', 'Country': 'Sweden', 'Company': 'Nordic AB', 'Notes': 'Newsletter opt-in' },
  ],
};

export const MOCK_MAPPINGS = autoMapColumns(MOCK_FILE);
