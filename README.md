
# voyageVista

voyageVista is your go to travel planner enabling access to real world map allowing user's to seamlessly pin point there visited location and list there memories   

---

## Table of Contents  
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Folder Structure](#folder-structure)  

---

## Installation  

Follow these steps to set up the project locally:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Niraj21611/voyagevista.git
   cd voyagevista
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

4. **Start the local server**:
    ```
    npm run server    
    ```

5. **View the project in your browser**:  
    ```bash
   Open `http://localhost:3000` in your preferred browser.  
    ```

---

## Technologies Used  
- **ReactJS**: For building the user interface.  
- **Mpdules's css**: For styling and responsiveness.  
- **HTML**: For structuring the application.  
- **Vite**: For fast development and build process.  

---

## Features  
- Used react's leaflet for displaying map 
- Created flexible hooks to get url position and geolocation 
- Industry standard naming convention's for maintainability
- Managed state using react's Context API

---

## Folder Structure  
```plaintext  
src/  
├── Components/     # Reusable React components
├── Pages/          # Static React pages  
├── contexts/       # Application global state
├── hooks/          # Self defined hooks
├── assets/         # Static assets (images, fonts, etc.)  
├── styles/         # Global and modular CSS files  
├── App.jsx         # Main application file  
├── index.jsx       # Entry point for the React app  
└── ...             # Other necessary files  
```  
---