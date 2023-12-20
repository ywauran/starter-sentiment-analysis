import { useState } from "react";
import { useResultContext } from "../context/ResultContext.jsx";
import { useProcessedDataContext } from "../context/ProcessedDataContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Preprocessing = () => {
  const { processedData } = useProcessedDataContext();
  const { setResultState } = useResultContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const handleProcess = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.97.142:81/calculate",
        processedData.df_stemming
      );
      setResultState(response.data);
      if (response) {
        navigate("/validation");
      }
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
      <div className="mt-8 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Original</th>
              <th>Lowercase</th>
              <th>Cleaning</th>
              <th>Tokenization</th>
              <th>Stopword</th>
              <th>Stemming</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {processedData.length !== 0 &&
              processedData.df_cleaning.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{processedData.df_original[index].comment}</td>
                  <td>{processedData.df_lower_case[index].comment}</td>
                  <td>{data.comment}</td>
                  <td>
                    {Array.isArray(processedData.df_token[index].comment) &&
                      processedData.df_token[index].comment.join(", ")}
                  </td>
                  <td>
                    {Array.isArray(processedData.df_stopwords[index].comment) &&
                      processedData.df_stopwords[index].comment.join(", ")}
                  </td>
                  <td>{processedData.df_stemming[index].comment}</td>
                  <td>{data.label}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button
            className="btn btn-primary"
            onClick={(e) => handleProcess(e)}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Preprocessing;
