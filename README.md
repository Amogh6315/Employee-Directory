# Employee Directory

## Overview of the Solution
The **Employee Directory** is a web application built with **React**, **Vite**, and **Tailwind CSS** that allows users to browse employees, filter them by department, search by name, and view an interactive organizational chart.  
The solution is designed to be **scalable**, **maintainable**, and **responsive**, offering a clean user interface similar to Microsoft Teams' org chart view.

Key Highlights:
- **Dynamic Search & Filtering:** Real-time updates as you type or change departments.
- **Collapsible Sidebar:** Department selection panel that can be expanded/collapsed.
- **Org Chart Modal:** View a specific employee’s hierarchy and direct reports in a modal.
- **Dark Mode Support:** Toggle between light and dark themes with one click.
- **Responsive Layout:** Works seamlessly across desktop and tablet screens.

---

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Amogh6315/Employee-Directory.git
   cd Employee-Directory
2. **Install Dependencies**
    ```bash
   npm install
3. **Run the Development Server**
   ```bash
   npm run dev
4. **Build for Production**
   ```bash
   npm run build
5. **Preview the Production Build**
   ```bash
   npm run preview


## Folder Structure Explanation
### Employee-Directory/
### ├── public/                      
### ├── src/
### │   ├── components/              
### │   ├── data/                    
### │   ├── pages/                   
### │   ├── App.jsx                  
### │   ├── main.jsx                 
### │   └── index.css                
### ├── package.json
### ├── vite.config.js               
### ├── README.md                    
### └── NOTES.md                     

### public  
Static assets (icons, images, etc.)

### src/components  
Reusable UI components (Sidebar, Header, EmployeeCard, etc.)

### src/data  
Static employee dataset (employees.json)

### src/pages  
Page-level components (Home.jsx)

### src/App.jsx  
Main application wrapper

### src/main.jsx  
Entry point for the app

### src/index.css  
TailwindCSS base styles

### package.json  
Project dependencies and scripts

### vite.config.js  
Vite + TailwindCSS configuration

### README.md  
Project documentation

### NOTES.md  
Notes on tools and data


## Notes on Architectural & Scalability Decisions

### Component-Based Design
Each UI piece is built as a separate component (e.g., `Sidebar`, `Header`, `EmployeeCard`) for better maintainability and reusability.

### Data-Driven Rendering
The UI is powered by `employees.json`, making it easy to scale by replacing it with an API without changing the UI logic.

### Tailwind CSS Styling
Speeds up development with utility-first classes and ensures consistent styling.

### Dark Mode Implementation
Uses `class` strategy to toggle themes at the root level (`html` element).

### Scalability Considerations
- Can easily integrate pagination for large datasets.
- Org chart logic supports deep hierarchies without major code changes.
- Ready to connect to a backend service for real-time updates.
