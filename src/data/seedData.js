// Editable seed data — becomes the initial LocalStorage state on first run.

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Menu keyed by weekday name.
export const DEFAULT_MENU = {
  Monday: {
    dry: "Gobi Matar",
    gravy: "Rajma",
    bread: { name: "Butter Chapati", baseQty: 4 },
    rice: "Rice",
    extra: { name: "Gulab Jamun", type: "Sweet" },
    salad: "Salad",
  },

  Tuesday: {
    dry: "Mix Veg",
    gravy: "Chole",
    bread: { name: "Butter Chapati", baseQty: 4 },
    rice: "Rice",
    extra: { name: "Raita", type: "Raita" },
    salad: "Salad",
  },

  Wednesday: {
    dry: "Aloo Jeera",
    gravy: "Kadhi Pakora",
    bread: { name: "Butter Chapati", baseQty: 4 },
    rice: "Rice",
    extra: { name: "Raita", type: "Raita" },
    salad: "Salad",
  },

  Thursday: {
    dry: "Bhindi Masala",
    gravy: "Dal Makhni",
    bread: { name: "Butter Chapati", baseQty: 4 },
    rice: "Rice",
    extra: { name: "Raita", type: "Raita" },
    salad: "Salad",
  },

  Friday: {
    dry: "Mix Veg",
    gravy: "Paneer Butter Masala",
    bread: { name: "Butter Chapati", baseQty: 4 },
    rice: "Rice",
    extra: { name: "Kheer", type: "Sweet" },
    salad: "Salad",
  },

  Saturday: {
    dry: "Kaale Chane Sookhe",
    gravy: "Aloo Matar",
    bread: { name: "Poori", baseQty: 5 },
    rice: "Rice",
    extra: { name: "Raita", type: "Raita" },
    salad: "Salad",
  },
};

/*
 * Name-based access.
 *
 * Owner:
 * Mohit
 *
 * Admin / HR:
 * Naveen HR
 *
 * Employees:
 * Tanish
 * Sunny
 * Ankush
 * Shiv
 * Aman
 * Naveen
 * Akash
 * Uncle
 * Rajeev
 * Pankaj Saini
 * Sumit
 *
 * IMPORTANT:
 * adminPin is frontend-only protection.
 * This is NOT real backend security.
 */
/*
 * Portfolio demo accounts.
 *
 * These are fictional demo accounts.
 *
 * IMPORTANT:
 * This application validates Admin PINs in frontend code.
 * These PINs are for a disposable portfolio demo only.
 * They are NOT secure authentication credentials.
 */
export const DEFAULT_EMPLOYEES = [
  {
    name: "Mohit",
    role: "owner",
    userType: "employee",
    isAdmin: true,
    isOwner: true,
    adminPin: "2468",
  },
  {
    name: "Demo Admin",
    role: "admin",
    userType: "employee",
    isAdmin: true,
    isOwner: false,
    adminPin: "1357",
  },
  {
    name: "Demo Employee 1",
    role: "employee",
    userType: "employee",
    isAdmin: false,
    isOwner: false,
  },
  {
    name: "Demo Employee 2",
    role: "employee",
    userType: "employee",
    isAdmin: false,
    isOwner: false,
  },
  {
    name: "Demo Employee 3",
    role: "employee",
    userType: "employee",
    isAdmin: false,
    isOwner: false,
  },
  {
    name: "Demo Employee 4",
    role: "employee",
    userType: "employee",
    isAdmin: false,
    isOwner: false,
  },
];