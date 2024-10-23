import React from "react";

const TimeFrame: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row text-sm  justify-between pb-2 w-60">
        <p className="text-semibold">FROM</p>
        <p className="text-semibold">TO</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="time"
          id="large-input"
          className="block w-28 px-4 py-2 border rounded-lg bg-gray-50 text-base focus:ring-black focus:border-black dark:bg-gray-900 dark:border-gray-1000 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <svg
          width="78"
          height="12"
          viewBox="0 0 178 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM166.67 6C166.67 8.94552 169.057 11.3333 172.003 11.3333C174.949 11.3333 177.336 8.94552 177.336 6C177.336 3.05448 174.949 0.666667 172.003 0.666667C169.057 0.666667 166.67 3.05448 166.67 6ZM6 7H172.003V5H6V7Z"
            fill="white"
          />
        </svg>
        <input
          type="time"
          id="large-input"
          className="block w-28 px-4 py-2 text-gray-900 border border-gray-100 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-1000 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default TimeFrame;
