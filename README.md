#Employee Management System

An interactive Employee Management System built with React.js and Tailwind CSS, utilizing localStorage for data persistence. This project allows users to manage tasks dynamically, update their status, and track completed and failed tasks efficiently.

🚀 Features
Add new tasks for employees
Mark tasks as Completed or Failed
Track the count of Completed and Failed tasks
Store and retrieve data from localStorage for persistence
Animated UI for smooth user experience

📌 Installation

1️⃣ Clone the Repository
  
git clone https://github.com/srcvision/employee_management_system.git
cd employee_management_system

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm start

🛠️ Technologies Used

React.js - For building UI components
Tailwind CSS - For responsive styling
LocalStorage - To persist data even after page reload
React Hooks - Managing state and side effects

💡 How It Works
Task Management
Adding a Task:
New tasks are stored in localStorage.
Tasks appear in the New Tasks section.
Marking as Completed:

Clicking “Mark as Completed” updates the task status.
The button changes to Completed.
The completed task count increases.
Updates are stored in localStorage.
Marking as Failed:

Clicking “Mark as Failed” updates the task status.
The button changes to Failed.
The failed task count increases.
Updates are stored in localStorage.
Persistent Storage:

All task updates are saved in localStorage.
The app remembers task progress even after page reload.

🖥️ Project Structure

/employee_management_system
│── /src
│   │── /components
│   │   │── AcceptTask.js   # Handles active tasks
│   │   │── CompleteTask.js # Displays completed tasks
│   │   │── FailedTask.js   # Displays failed tasks
│   │   │── NewTask.js      # Manages new tasks
│   │   │── TaskList.js     # Renders all tasks dynamically
│   │── App.js              # Main application logic
│   │── index.js            # React app entry point
│── public/
│── package.json
│── README.md               # Project documentation

🌟 Future Enhancements

Implement authentication for user-based task tracking
Add task categories for better organization
Use a database (MongoDB/Firebase) instead of localStorage

🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature-name
Commit your changes: git commit -m "Added new feature"
Push to the branch: git push origin feature-name
Create a Pull Request

📩 Contact
For any issues or suggestions, feel free to reach out!
📧 Email: srchaudhari0806@gmail.com
🔗 GitHub: srcvision
