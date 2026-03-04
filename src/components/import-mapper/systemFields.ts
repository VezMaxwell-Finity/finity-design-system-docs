import type { SystemField } from './types';

export const SYSTEM_FIELDS: SystemField[] = [
  // Name
  {
    id: 'first_name',
    label: 'First Name',
    required: false,
    group: 'Name',
    aliases: ['first name', 'firstname', 'first', 'given name', 'given_name', 'fname', 'forename'],
  },
  {
    id: 'last_name',
    label: 'Last Name',
    required: false,
    group: 'Name',
    aliases: ['last name', 'lastname', 'last', 'surname', 'family name', 'family_name', 'lname'],
  },
  {
    id: 'full_name',
    label: 'Full Name',
    required: false,
    group: 'Name',
    aliases: ['full name', 'fullname', 'name', 'contact name', 'contact_name', 'display name'],
  },
  // Contact
  {
    id: 'email',
    label: 'Email',
    required: true,
    group: 'Contact',
    aliases: ['email', 'email address', 'email_address', 'e-mail', 'e_mail', 'mail'],
  },
  {
    id: 'phone',
    label: 'Phone',
    required: false,
    group: 'Contact',
    aliases: ['phone', 'phone number', 'phone_number', 'tel', 'telephone', 'mobile', 'cell', 'cell phone', 'contact number'],
  },
  // Address
  {
    id: 'address_line_1',
    label: 'Address Line 1',
    required: false,
    group: 'Address',
    aliases: ['address', 'address 1', 'address1', 'address_1', 'street', 'street address', 'addr'],
  },
  {
    id: 'address_line_2',
    label: 'Address Line 2',
    required: false,
    group: 'Address',
    aliases: ['address 2', 'address2', 'address_2', 'apt', 'suite', 'unit', 'address line 2'],
  },
  {
    id: 'city',
    label: 'City',
    required: false,
    group: 'Address',
    aliases: ['city', 'town', 'suburb', 'locality'],
  },
  {
    id: 'state',
    label: 'State / Province',
    required: false,
    group: 'Address',
    aliases: ['state', 'province', 'region', 'county', 'state_province', 'state/province'],
  },
  {
    id: 'zip',
    label: 'Zip / Postal Code',
    required: false,
    group: 'Address',
    aliases: ['zip', 'postal code', 'postcode', 'zip code', 'zipcode', 'postal_code', 'post code'],
  },
  {
    id: 'country',
    label: 'Country',
    required: false,
    group: 'Address',
    aliases: ['country', 'nation', 'country code', 'country_code'],
  },
  // Custom
  {
    id: 'company',
    label: 'Company',
    required: false,
    group: 'Other',
    aliases: ['company', 'organization', 'organisation', 'employer', 'business', 'company name'],
  },
  {
    id: 'notes',
    label: 'Notes',
    required: false,
    group: 'Other',
    aliases: ['notes', 'note', 'comments', 'comment', 'description', 'remarks'],
  },
];

export const FIELD_GROUPS = [...new Set(SYSTEM_FIELDS.map((f) => f.group))];
