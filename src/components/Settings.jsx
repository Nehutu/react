import { useState } from "react";

export const Settings = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container bg-gray-700 p-2">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 p-12 lg:grid-cols-3">
        <h3 className="p-4 text-white bg-green-700 rounded-lg text-center">
          Settings
        </h3>
        <button
          className="p-4 bg-red-700 text-white rounded-lg hover:bg-red-500"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
        <p className="p-4 bg-orange-200 rounded-lg text-center">
          Amount of clicks: {count}{" "}
        </p>
      </div>
    </div>
  );
};
