import * as XLSX from "xlsx";
import { useState } from "react";
import Pagination from "../components/pagination/Pagination.jsx";
import { useCommentContext } from "../context/CommentContext.jsx";
import { useProcessedDataContext } from "../context/ProcessedDataContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Comment = () => {
  const { commentData, setCommentData, currentPage, setCurrentPage } =
    useCommentContext();
  const { setProcessedData } = useProcessedDataContext();
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const reader = new FileReader();
    reader.readAsBinaryString(event.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setCommentData(parsedData);
      console.log(parsedData);
      setCurrentPage(1);
    };
  };

  const handleProprocess = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.97.142:81/preprocess",
        commentData
      );
      setProcessedData(response.data);
      if (response) {
        navigate("/preprocessing");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = commentData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="flex items-center justify-center w-full bg-white">
        <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-blue hover:bg-blue hover:text-slate-300">
          <svg
            className="w-8 h-8 bg-white "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input
            type="file"
            className="hidden"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Comment</th>
                <th>Label</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((row, index) => (
                <tr key={index}>
                  <td></td>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(commentData.length / itemsPerPage)}
              onPageChange={(page) => setCurrentPage(page)}
            />
            <button
              className="btn btn-primary"
              onClick={(e) => handleProprocess(e)}
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
      </div>
    </>
  );
};

export default Comment;
