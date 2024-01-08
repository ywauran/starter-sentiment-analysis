import { useState } from "react";
import { useProcessedDataContext } from "../context/ProcessedDataContext.jsx";
import { useResultContext } from "../context/ResultContext.jsx";
import axios from "axios";

const Proessing = () => {
  const { processedData } = useProcessedDataContext();
  const { setResultState } = useResultContext();
  const [loading, setLoading] = useState(false);
  const handleProcess = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.1.10:81/calculate",
        processedData.df_stemming
      );
      setResultState(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : null}
      <div className="flex items-center justify-center">
        <div className="relative pt-2 mx-auto text-gray-600">
          <input
            className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
            <svg
              className="w-4 h-4 text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Result</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {processedData.length !== 0 &&
              processedData.df_cleaning.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{processedData.df_stemming[index + 30].comment}</td>
                  <td>{processedData.df_stemming[index + 30].label}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Proessing;
