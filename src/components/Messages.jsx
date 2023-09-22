import { useEffect, useState } from "react";

export const Messages = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let json = await response.json();
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 p-3 rounded-lg border-2 border-gray-600">
      {advice}
    </div>
  );
};
