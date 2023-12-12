import { useState } from "react";
import NaiveBayes from "../components/NaiveBayes";
import KNN from "../components/KNN";

const Validation = () => {
  const [activeTab, setActiveTab] = useState("KNN");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex mx-8 mt-4">
        <button
          className={`tabButton mr-3 ${
            activeTab === "KNN" ? "bg-blue-500 text-white" : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => handleTabClick("KNN")}
        >
          KNN
        </button>
        <button
          className={`tabButton ${
            activeTab === "NaiveBayes"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => handleTabClick("NaiveBayes")}
        >
          Naive Bayes
        </button>
      </div>

      <div className="relative mx-8 mt-4">
        {activeTab === "KNN" && <KNN />}
        {activeTab === "NaiveBayes" && <NaiveBayes />}
      </div>
    </>
  );
};

export default Validation;
