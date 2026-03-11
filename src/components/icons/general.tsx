import { createIcon } from './Icon';

// A
export const Add = createIcon(
  <path d="M12 5v14M5 12h14" />,
  'Add'
);

export const AddSquare = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 8v8M8 12h8" />
  </>,
  'AddSquare'
);

// B
export const Bank = createIcon(
  <>
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
  </>,
  'Bank'
);

// C
export const Calendar = createIcon(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>,
  'Calendar'
);

export const Check = createIcon(
  <path d="M20 6L9 17l-5-5" />,
  'Check'
);

export const CheckCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </>,
  'CheckCircle'
);

export const Clock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>,
  'Clock'
);

export const Close = createIcon(
  <path d="M18 6L6 18M6 6l12 12" />,
  'Close'
);

// D
export const Delete = createIcon(
  <>
    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
    <path d="M10 11v6M14 11v6" />
  </>,
  'Delete'
);

export const Download = createIcon(
  <>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <path d="M7 10l5 5 5-5M12 15V3" />
  </>,
  'Download'
);

// E
export const Edit = createIcon(
  <>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </>,
  'Edit'
);

export const Flag = createIcon(
  <>
    <path d="M5 3V21" />
    <path d="M5 4H18L15 8.5L18 13H5" />
  </>,
  'Flag'
);

// F
export const File = createIcon(
  <>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </>,
  'File'
);

export const Filter = createIcon(
  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
  'Filter'
);

// G
export const Globe = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </>,
  'Globe'
);

// H
export const Home = createIcon(
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path d="M9 22V12h6v10" />
  </>,
  'Home'
);

export const Help = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </>,
  'Help'
);

// I
export const Info = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </>,
  'Info'
);

// L
export const Lock = createIcon(
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </>,
  'Lock'
);

// M
export const Mail = createIcon(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </>,
  'Mail'
);

export const Menu = createIcon(
  <path d="M3 12h18M3 6h18M3 18h18" />,
  'Menu'
);

// P
export const Pin = createIcon(
  <>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </>,
  'Pin'
);

// S
export const Search = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </>,
  'Search'
);

export const Settings = createIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </>,
  'Settings'
);

export const Star = createIcon(
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  'Star'
);

// U
export const Upload = createIcon(
  <>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <path d="M17 8l-5-5-5 5M12 3v12" />
  </>,
  'Upload'
);

export const User = createIcon(
  <>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>,
  'User'
);

export const Users = createIcon(
  <>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </>,
  'Users'
);

// W
export const Wallet = createIcon(
  <>
    <path d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5z" />
    <path d="M16 12a2 2 0 100 4h5v-4h-5z" />
  </>,
  'Wallet'
);

export const Warning = createIcon(
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </>,
  'Warning'
);
