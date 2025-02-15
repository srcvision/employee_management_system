import React from 'react';

const TaskNummber = ({ data }) => {
  return (
    <div className="flex -ml-11 justify-between mt-6 w-screen px-10">
      {[
        { title: "New Task", count: data.taskCount.newTask, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
        { title: "Completed Task", count: data.taskCount.completed, color: "bg-green-500", hoverColor: "hover:bg-green-600" },
        { title: "Accepted Task", count: data.taskCount.active, color: "bg-yellow-500", hoverColor: "hover:bg-yellow-600" },
        { title: "Failed Task", count: data.taskCount.failed, color: "bg-red-500", hoverColor: "hover:bg-red-600" }
      ].map((item, index) => (
        <div
          key={index}
          className={`rounded-xl p-10 w-[20%] text-white shadow-lg ${item.color} ${item.hoverColor} transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          <h1 className="text-3xl font-bold animate-pulse">{item.count}</h1>
          <h3 className="text-xl font-medium">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNummber;
