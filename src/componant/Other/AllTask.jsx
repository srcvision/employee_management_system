import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <div className="p-4 rounded-md shadow-md overflow-hidden">
      <div className="overflow-hidden whitespace-nowrap flex items-center justify-center  ">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text animate-bounce animate-marquee">
          Employee Task Overview
        </h2>
      </div>

      {/* Table Header */}
      <div className="py-2 px-3 flex justify-between text-sm font-semibold text-gray-700 border-b border-gray-300 animate-slide-in">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h5 className="w-1/5 text-center">Active</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      {/* Loading Effect */}
      {loading ? (
        <div className="mt-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 animate-pulse bg-gray-300 rounded-md my-1"
            ></div>
          ))}
        </div>
      ) : (
        <div className="overflow-auto max-h-60 ">
          {userData.map((elem, idx) => (
            <div
              key={idx}
              className="py-2 px-3 flex justify-between mt-1 rounded-md border border-gray-300 text-gray-800 shadow-sm animate-fade-in"
            >
              <h2 className="text-sm font-medium w-1/5 text-center">
                {elem.firstname}
              </h2>
              <h3 className="text-sm font-medium w-1/5 text-center text-blue-500">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="text-sm font-medium w-1/5 text-center text-yellow-500">
                {elem.taskCount.active}
              </h5>
              <h5 className="text-sm font-medium w-1/5 text-center text-green-500">
                {elem.taskCount.completed}
              </h5>
              <h5 className="text-sm font-medium w-1/5 text-center text-red-500">
                {elem.taskCount.failed}
              </h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTask;
