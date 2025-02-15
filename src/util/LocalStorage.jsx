const employee = [
  {
    "id": 1,
    "firstname": "Saurav",
    "name": "Saurav Chaudhari",
    "email": "saurav@me.com",
    "position": "Software Engineer",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Develop API Endpoints",
        "taskDesc": "Create and optimize REST API endpoints for better performance.",
        "taskDate": "2025-02-08",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Login Bug",
        "taskDesc": "Resolve issues related to user authentication and login errors.",
        "taskDate": "2025-02-06",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstname": "Ajay",
    "name": "Ajay Chaudhari",
    "email": "ajay@me.com",
    "position": "Project Manager",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Client Meeting",
        "taskDesc": "Discuss project milestones and delivery expectations with stakeholders.",
        "taskDate": "2025-02-07",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Report",
        "taskDesc": "Summarize project progress and highlight key achievements.",
        "taskDate": "2025-02-05",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  },
  {
    "id": 3,
    "firstname": "Suraj",
    "name": "Suraj Mahajan",
    "email": "suraj@me.com",
    "position": "Frontend Developer",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Redesign Landing Page",
        "taskDesc": "Enhance the UI/UX of the homepage to improve user engagement.",
        "taskDate": "2025-02-09",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize CSS",
        "taskDesc": "Reduce CSS file size and improve overall website performance.",
        "taskDate": "2025-02-07",
        "category": "Optimization",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstname": "Ashish",
    "name": "Ashish Nanama",
    "email": "ashish@me.com",
    "position": "Data Analyst",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Data Cleaning",
        "taskDesc": "Prepare and clean raw data to ensure accuracy in analysis.",
        "taskDate": "2025-02-10",
        "category": "Data Processing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Generate Insights Report",
        "taskDesc": "Analyze trends in data and generate a detailed report.",
        "taskDate": "2025-02-08",
        "category": "Analysis",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 5,
    "firstname": "Nikesh",
    "name": "Nikesh Kalal",
    "email": "nikesh@me.com",
    "position": "DevOps Engineer",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Deploy Microservices",
        "taskDesc": "Set up and manage microservices deployment for scalability.",
        "taskDate": "2025-02-11",
        "category": "Deployment",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "CI/CD Pipeline Setup",
        "taskDesc": "Automate testing and deployment process for faster releases.",
        "taskDate": "2025-02-09",
        "category": "Automation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 }
  },
  {
    "id": 6,
    "firstname": "Vishal",
    "name": "Vishal Bulchandani",
    "email": "vishal@me.com",
    "position": "Marketing Specialist",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Social Media Campaign",
        "taskDesc": "Plan and execute a marketing strategy for social media platforms.",
        "taskDate": "2025-02-12",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDesc": "Improve the search engine ranking of the website with SEO techniques.",
        "taskDate": "2025-02-07",
        "category": "SEO",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  }
]



const admin = [
  {
    id: 1,
    name: "Alexander Carter",
    passwrod: '123',
    email: "admin@example.com",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees, admin};
};
