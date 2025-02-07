Event Management Platform - Uplaince Assessment

Overview
This is a professional React application implementing all the requested core functionalities along with additional optimizations for performance, state management, and user experience.

 Features Implemented

 Counter Component
- Uses CSS transitions instead of React Spring.
- Adjusts color intensity dynamically.
- Saves counter state in `localStorage` to retain values between sessions.
- Utilizes Lucide React icons for a clean UI.

 User Form
- Displays error messages for incorrect inputs.
- Generates UUIDs using `crypto.randomUUID()`.
- Uses Context API for efficient state management.
- Alerts users if they attempt to leave with unsaved changes.
- Built with Tailwind CSS for responsiveness.

 Rich Text Editor
- Supports basic text editing features.
- Uses Lucide React icons for formatting.
- Saves text content automatically.
- Ensures text is not lost on page refresh.

 State Management
- Uses React Context API instead of Redux.
- Implements proper TypeScript types.
- Ensures smooth user experience with error handling and loading states.

 Tech Stack
- Frontend: React.js, TypeScript, Tailwind CSS, Lucide React
- State Management: React Context API
- Storage: LocalStorage for persistence
- Icons: Lucide React

 Installation & Setup

1. Clone the Repository:
   bash
   git clone https://github.com/your-username/uplaince-assessment.git
   cd uplaince-assessment
   
2. Install Dependencies:
   bash
   npm install
   
3. Run the Application:
   bash
   npm run dev
   
4. Open in Browser:
   
   http://localhost:5173
   

 Live Demo
[Live Deployment](https://your-live-demo-link.com)

 Folder Structure

📦 uplaince-assessment
├── 📁 src
│   ├── 📁 components   UI Components
│   ├── 📁 context      Context API for state management
│   ├── 📁 hooks        Custom React hooks
│   ├── 📁 pages        Main application pages
│   ├── 📁 assets       Static assets
│   ├── App.tsx        Main App component
│   ├── main.tsx       Entry point
├── package.json    Dependencies & scripts
├── tailwind.config.js   Tailwind configuration
└── README.md       Project documentation


 Notes
- The application is fully responsive and optimized for both desktop and mobile.
- If you encounter any issues, check the browser console for errors or reach out.

 Contact
For any queries, reach out at [your-email@example.com](mailto:your-email@example.com)
