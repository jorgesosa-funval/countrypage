import React from "react";

const Status = () => {
  return (
    <div className="ml-6 mt-5 text-gray-700 font-medium max-w-[400px] max-h-[180px] ">
      <h5>Status</h5>
      <div class="flex items-center mb-4 mt-4 ">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ms-2 text-sm font-medium text-white"
        >
          Members of the Uniteds Nations
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ms-2 text-sm font-medium text-white "
        >
          Indepent
        </label>
      </div>
    </div>
  );
};

export default Status;
