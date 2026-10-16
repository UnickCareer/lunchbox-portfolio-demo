# 🍱 LunchBox Panipat — Office Lunch Ordering System

A modern, responsive office lunch-ordering application built with **React, Vite, and Supabase** for managing daily employee lunch orders. Employees can select their lunch, claim available surplus food, and request edits. Admins and the Owner can manage menus, employees, approvals, and send a consolidated lunch summary to the food owner through WhatsApp.

> **Portfolio demo:** This repository is intended to demonstrate the LunchBox workflow. Use fictional/demo data only in a public deployment. Do not add real employee information, private credentials, or production database keys to the repository.

---

## ✨ Highlights

- 👨‍💼 Employee lunch-ordering portal
- 🛡️ Admin dashboard and 👑 Owner access
- 🍛 Configurable weekday thali menu
- ➕ Food quantity controls and normal serving limits
- 🥣 Same-vegetable-in-both-bowls option
- ♻️ Shared surplus-food availability and claims
- 📝 Employee order-edit requests
- ✅ Admin approval/rejection workflow for edit requests
- ⏰ **Booking deadline support** to control when employees can submit lunch bookings
- 📊 Daily lunch summary and order approval status
- 📲 WhatsApp order summary with anonymous `P1`, `P2`, `P3` labels
- 👥 Employee management and access requests
- 🌙 Light/dark mode, responsive layout, and Framer Motion animations
- 🔗 QR-code access for mobile devices
- 🗃️ Supabase shared data and synchronization
- 🚀 Vercel deployment support
- 🔖 Custom emerald-and-gold lunch/thali favicon

---

## ⏰ Booking Deadline

The booking deadline feature helps the office collect lunch requirements within a defined time window. It gives the lunch workflow a clear cut-off instead of leaving booking open indefinitely.

### Why it matters

- **Clear cut-off:** Employees know when they need to submit their lunch booking.
- **More predictable preparation:** Admins can collect the day's requirements before the food order is finalized.
- **Better daily coordination:** The deadline supports a consistent process for employees, Admin/Owner, and the food owner.
- **Centralized workflow:** Booking is part of the lunch-ordering application rather than a separate manual reminder.

The deadline behavior and configured time should be verified in the deployed demo before relying on it for real operations. Admin/Owner booking behavior may differ from regular employee booking depending on the application's current configuration.

---

## 🧭 How It Works

1. **Open the app and log in.**
2. **Employee:** review the day's menu, choose quantities, use available surplus, and submit a lunch booking before the applicable deadline.
3. **Edit request:** if a submitted order needs a change, the employee can request an edit for Admin review.
4. **Admin/Owner:** review the day's orders, manage employees and menu settings, process requests, and approve orders.
5. **Send the lunch summary:** the app prepares a compact WhatsApp message for the food owner.
6. **Shared data:** Supabase synchronizes application state across supported devices.

```text
Employee / Admin / Owner
          |
          v
      LunchBox UI
          |
          +--> Menu and booking deadline
          +--> Lunch orders and surplus
          +--> Edit requests and approvals
          |
          v
       Supabase
          |
          v
 Admin reviews approved orders
          |
          v
 WhatsApp lunch summary
          |
          v
      Food owner
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and production build |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | UI animations and transitions |
| Lucide React | Icons |
| Supabase | Shared application data and synchronization |
| Vercel | Hosting and deployment |
| WhatsApp deep links | Sending the prepared lunch summary |
| GitHub | Source control and collaboration |

---

## 📁 Project Structure

The main application code is organized approximately as follows:

```text
lunchbox-portfolio-demo/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── Cart.jsx
│   │   ├── ItemCard.jsx
│   │   ├── SurplusPanel.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ThaliRing.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── EmployeePortal.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   └── main.jsx
├── supabase/
│   └── schema.sql
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The exact file layout may evolve as the project is updated.

---

## 👤 Login and Access Workflow

The current application uses an employee-name-based login workflow for its intended demo/office flow. Approved employees can enter the employee portal, while Admin/Owner users can access management features.

### Unknown employee

1. An unrecognized name is not automatically granted approved access.
2. The person can submit an access request if that option is available in the current build.
3. Admin reviews the request.
4. Admin decides whether to approve or reject access.

**Security note:** A name-based login is not strong identity verification. Do not use it as the sole protection for sensitive production data.

---

## 🍛 Employee Lunch Ordering

Employees can select from the menu configured for the day, including items such as:

- 🥣 Veg Bowl 1
- 🌶️ Veg Bowl 2
- 🫓 Roti
- 🍚 Rice
- 🍮 Extra item or dessert
- 🥗 Salad

The interface displays a thali summary and applies the quantity limits configured by the application/menu. Roti is presented to users as **Roti**, even if an internal category uses another name.

### Same vegetable in both bowls

Employees can select the same vegetable for both bowls and choose the supported dry-sabzi or gravy-sabzi option. This is treated as a special lunch requirement where applicable.

---

## ♻️ Surplus Food

The surplus-food workflow allows an unused portion to be made available for another employee to claim.

**Example:**

1. The normal allowance includes one portion of Mix Veg.
2. An employee chooses not to take it.
3. That unused portion becomes available as surplus.
4. Another employee claims the available portion.
5. The available surplus count decreases; if the claim is released, the portion can become available again.

This feature is intended to reduce avoidable food waste and make unused portions visible to other employees. The exact available quantities depend on the current shared application state.

---

## 📝 Order Edit Requests

Employees can request a change after submitting a lunch order.

```text
Employee submits order
        |
        v
Employee requests an edit
        |
        v
Admin reviews the request
        |
        +--> Approve --> Apply the permitted change
        |
        +--> Reject  --> Keep the existing order
```

Admin/Owner actions may follow a different path because they have management permissions. Always verify the current behavior in the running application.

---

## 📊 Admin Dashboard

The Admin Dashboard brings daily lunch operations together.

### Daily summary and approvals

- Review submitted lunch orders and their statuses.
- Approve orders using the available controls.
- Review the day's lunch activity.
- Prepare and send the approved lunch summary to the food owner.

### Employees and access

- Manage approved employees and administrators.
- Review requests from unknown employees.
- Apply the available access-management actions.

### Menu settings

Depending on the current configuration, Admin can manage weekday menu items such as dry sabzi, gravy sabzi, roti, rice, extra items, and salad.

### Booking deadline

The deadline helps establish the daily cut-off for employee bookings. Confirm the configured time and behavior in the app before using it as an operational policy.

---

## 📲 WhatsApp Lunch Summary

After reviewing and approving the day's orders, Admin can use the available **Send for Order** action to prepare a WhatsApp message for the food owner.

The message is designed to be compact and easy to read. It may include the date, total approved orders, regular/special counts, and each order's requested items. The food owner's number is configured by the application; verify it before using the workflow outside a demo.

### Anonymous order labels

Instead of including employee names in the generated summary, orders can be represented with labels such as:

```text
P1
P2
P3
P4
```

Example format:

```text
🍱 OFFICE LUNCH ORDER — Sparsh Panipat
Date: [date]
Total approved orders: 3
Regular: 1
Special: 2

P1: Regular + 1 Kheer extra
P2: Only Rice
P3: Only Rice, Roti × 2, Salad

Please prepare the above approved lunch orders.
```

This is an illustrative example; the exact wording and counts depend on the orders and current application logic.

### Regular, surplus, and only-item orders

- **Regular:** the normal lunch selection.
- **Regular + surplus:** the normal lunch plus one or more additional surplus portions, where applicable.
- **Only-item order:** if only one item remains, the summary can use concise wording such as `P1: Only Rice` rather than listing every omitted item.

---

## 🌐 Why Supabase?

Browser `localStorage` is scoped to a particular browser/device. By itself, it cannot provide a shared source of truth across employees' phones and the Admin's computer.

Supabase provides a shared data layer so supported clients can work with the same application state, such as:

- Employees and access requests
- Menu configuration
- Lunch orders and approval state
- Surplus portions and claims
- Order-edit requests
- Other shared application state supported by the current build

A public frontend uses browser-accessible configuration, so **Supabase Row Level Security (RLS) and database policies are important**. Do not place a Supabase `service_role` key or other server secrets in frontend variables. A public demo should use a separate project and fictional data only, and its database policies should be reviewed before public use.

---

## 📱 Responsive Design and QR Access

The interface is designed for desktop, laptop, and mobile browsers, including Android phones. The login page may provide a QR code for convenient access.

During local testing, a phone can open the development server's LAN URL if both devices are on the same network and the server is started with host access enabled. For remote access, use the deployed website URL.

---

## 🚀 Run Locally

### Requirements

- Node.js and npm
- A Supabase project configured for the application

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local `.env` file in the project root. Use `.env.example` as a guide and fill in the values from your **demo Supabase project**:

```dotenv
VITE_APP_URL=http://localhost:5173
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Use the exact variable names expected by the code. Never commit the real `.env` file or put a service-role key in a `VITE_` variable.

### 3. Start the development server

```bash
npm run dev
```

To test from another device on the same Wi-Fi network:

```bash
npm run dev -- --host
```

Open the local or network URL printed by Vite.

---

## 🏗️ Production Build

Create an optimized build:

```bash
npm run build
```

Preview the built application locally:

```bash
npm run preview
```

Resolve build errors and test the important employee and Admin flows before deploying.

---

## ☁️ Deploy to Vercel

A typical deployment flow is:

```text
VS Code -> Git -> GitHub -> Vercel -> Live website
```

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the Vite framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Add the required environment variables in Vercel Project Settings.
7. Deploy and test the live URL.

Configure `VITE_APP_URL`, `VITE_SUPABASE_URL`, and `VITE_SUPABASE_PUBLISHABLE_KEY` with the appropriate **demo** values. After the first deployment, update `VITE_APP_URL` to the deployed URL if the application requires it, then redeploy.

Never commit real environment files. Remember that Vite variables are included in the client bundle; only browser-safe publishable values belong there.

---

## 🐙 Git and GitHub Workflow

After editing files in VS Code, run the following commands from the project directory:

```bash
git status
npm run build
git add README.md
git commit -m "Update README with booking deadline documentation"
git push origin main
```

These commands stage **only `README.md`**, so unrelated local changes are not accidentally included in this README update. If your branch is not named `main`, replace it with the correct branch name.

---

## 🧪 Suggested Test Checklist

### Employee

- [ ] Approved employee can log in.
- [ ] Today's menu appears correctly.
- [ ] Quantity controls and configured limits work.
- [ ] Same-vegetable option works as expected.
- [ ] Surplus portions appear and can be claimed.
- [ ] Releasing a surplus claim restores availability where supported.
- [ ] Employee can submit a lunch booking before the deadline.
- [ ] Booking behavior after the deadline matches the intended policy.
- [ ] Submitted order is visible to Admin.

### Edit requests

- [ ] Employee can request an edit.
- [ ] Admin can view the request.
- [ ] Admin can approve or reject it.
- [ ] An approved request updates the order as expected.

### Admin / Owner

- [ ] Admin/Owner login and dashboard access work.
- [ ] Daily summary and order statuses load correctly.
- [ ] Employee management and access requests work.
- [ ] Menu settings work.
- [ ] Order approval controls work.
- [ ] Booking deadline and its displayed/configured time are correct.
- [ ] The permitted Admin/Owner booking flow works.
- [ ] The WhatsApp action opens the expected message.

### WhatsApp and mobile

- [ ] Generated summary uses anonymous labels as intended.
- [ ] Counts and item descriptions match approved orders.
- [ ] The food-owner contact is correct.
- [ ] Login, menu, ordering, and deadline behavior are usable on a phone.

---

## 🔐 Security and Demo Limitations

This project demonstrates an office lunch workflow; the current login and data-access design should not automatically be treated as production-grade security.

Before using a public deployment with real users or real operational data:

- Use a separate Supabase project for the demo.
- Use fictional records only in a public portfolio demo.
- Review and test Supabase RLS policies and access permissions.
- Never expose a Supabase `service_role` key, database password, or other private secret in frontend code or GitHub.
- Keep `.env` out of version control.
- Strengthen identity verification and role-based authorization before handling sensitive data.
- Test booking-deadline behavior and the relevant time zone before relying on it operationally.

---

## 🎨 Design

The UI uses an emerald-green and gold/amber palette, thali-inspired visuals, card-based layouts, smooth animations, dark mode, responsive components, and a custom lunch/thali favicon. The goal is to keep daily lunch ordering simple for employees while giving Admin/Owner users a centralized management workflow.

---

## 📌 Project Summary

**LunchBox Panipat** brings the main lunch-management process into one application:

**Select lunch → Submit before the deadline → Review and approve → Prepare WhatsApp summary → Serve lunch**

| Item | Details |
|---|---|
| Project | LunchBox Panipat |
| Organization context | Sparsh CCTV, Panipat |
| Purpose | Office lunch ordering and management |
| Frontend | React + Vite |
| Shared data | Supabase |
| Hosting | Vercel |
| Source control | GitHub |

---

## ❤️ Built for Simpler Office Lunch Management

🍱 **Select → Share → Approve → Send → Serve**