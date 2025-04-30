# **Ticket Management App (React + Material UI)**  

A **React-based** ticket management system built with **Material-UI (MUI)** for styling and **React Router** for navigation. This app allows users to:  
✔ **Create** new support tickets  
✔ **View** all tickets in a list  
✔ **Edit** existing tickets  
✔ **Delete** tickets  
✔ **Filter** by priority/status  

---

## Site is live @ ## 
https://ticket-masters.vercel.app/

## **📥 Installation & Setup**  

### **1. Clone the Repository**  
```bash
git clone git@github.com:Jjumaaa/Ticket-Masters.git
cd Ticket-Masters
```

### **2. Install Dependencies**  
```bash
npm install
npm install react-router-dom uuid @mui/material @mui/icons-material @emotion/react @emotion/styled
```
*(Installs React, Material-UI, React Router, and other required packages.)*  

### **3. Run the App**  
```bash
npm start
```
- Runs on `http://localhost:3000`  

---

## **🚀 Features**  

### **1. Home Page (`/`)**  
- Displays a welcome message.  
- Navigation links to **Tickets** and **New Ticket** pages.  

### **2. Tickets List (`/tickets`)**  
📋 **Displays all tickets** in a card-based layout.  
- Each ticket shows:  
  - **Title**  
  - **Description**  
  - **Priority** (High/Medium/Low)  
  - **Status** (Open/In Progress/Resolved)  
  - **Creation Date**  
- **Edit Button** (✏️) to modify tickets  
- **Delete Button** (🗑️) to remove tickets  

### **3. Create/Edit Tickets (`/new-ticket` and `/edit-ticket/:id`)**  
✏ **A unified form for both creating and editing tickets** with:  
- **Title** (Required)  
- **Description** (Required)  
- **Priority** (Dropdown: High/Medium/Low)  
- **Status** (Dropdown: Open/In Progress/Resolved)  

📌 **All changes are saved in `localStorage`** (persists on page refresh).  

---

## **⚙️ Technical Details**  

### **Folder Structure**  
```
src/
├── components/       # Reusable UI components
│   ├── TicketList.js # Displays all tickets
│   ├── TicketForm.js # Unified form for create/edit
│   ├── TicketItem.js # Single ticket card
│   └── Navbar.js     # Navigation bar
│
├── pages/            # Main pages
│   ├── Home.js       # Landing page
│   ├── Tickets.js    # Ticket list page
│   ├── NewTicket.js  # New ticket form
│   └── EditTicket.js # Edit existing tickets (NEW)
│
├── styles/           # Theming & global CSS
│   └── theme.js      # MUI theme config
│
├── App.js            # Main app router
└── index.js          # React entry point
```

---

## **🔧 Customization**  

### **1. Change Theme Colors**  
Edit `src/styles/theme.js`:  
```js
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});
```

### **2. Add New Ticket Statuses**  
Modify `TicketForm.js` to include new options:  
```jsx
<Select value={status} onChange={(e) => setStatus(e.target.value)}>
  <MenuItem value="open">Open</MenuItem>
  <MenuItem value="in-progress">In Progress</MenuItem>
  <MenuItem value="resolved">Resolved</MenuItem>
  <MenuItem value="rejected">Rejected</MenuItem>
  <MenuItem value="on-hold">On Hold</MenuItem> {/* New status */}
</Select>
```

## **📌 Future Improvements**  
- **User Authentication** (Firebase Auth / JWT)  
- **Search & Filtering** (Filter by priority/status)  
- **Real-time Updates** (WebSockets / Firebase)  
- **Ticket History** (Track changes over time)  

---
## **🙋‍♂️ Need Help?**  
Open an issue or contact me! 🚀  

---

### **🎉 Enjoy the Ticket App!**  
Run `npm start` and start managing tickets! 🎫
```
