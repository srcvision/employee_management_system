import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[330px] bg-red-700 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDesc}
      </p>
      <div className="mt-4">
        <button className="w-full bg-red-500 text-sm px-3 py-1 rounded">
          Failed Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
