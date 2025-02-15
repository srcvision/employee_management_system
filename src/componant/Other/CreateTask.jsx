import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignto, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  
  const [newTask, setNewTask] = useState({});
  
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDesc,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = [...userData];
    data.forEach((elem) => {
      if (asignto === elem.firstname) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
      }
    });

    setUserData(data);
    console.log(data);
    
    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDesc("");
  };

  return (
    <div className="relative p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl rounded-xl mt-7 border border-gray-700 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse bg-opacity-20 bg-gray-500 blur-3xl rounded-xl"></div>
      
      <h2 className="text-lg text-gray-200 font-semibold mb-4 relative z-10">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between relative z-10">
        <div className="w-1/2 space-y-4">
          <div>
            <h3 className="text-md text-gray-400">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-3/4 py-2 px-3 rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-400">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-3/4 py-2 px-3 rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-400">Assign to</h3>
            <input
              value={asignto}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              className="w-3/4 py-2 px-3 rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"
              placeholder="Enter Employee name"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-400">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="w-3/4 py-2 px-3 rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"
              placeholder="Design, Development, etc..."
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start space-y-4">
          <h3 className="text-md text-gray-400">Description</h3>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="w-full h-40 py-2 px-3 rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"
            placeholder="Description..."
          ></textarea>
          <button
            className="group relative inline-flex items-center overflow-hidden rounded-md bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700 transition-all duration-300 focus:ring-2 focus:outline-none focus:ring-indigo-500"
          >
            <span className="absolute -end-full transition-all duration-300 ease-in-out group-hover:end-4">
              <svg
                className="w-5 h-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all duration-300 ease-in-out group-hover:mr-4">
              Create Task
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;