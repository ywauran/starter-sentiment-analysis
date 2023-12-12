import { dummyCommentData } from "../utils/data.js";
import Pagination from "../components/pagination/Pagination.jsx";

const Comment = () => {
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
          <input type="file" className="hidden" />
        </label>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Komentar</th>
                <th>Label</th>
              </tr>
            </thead>
            <tbody>
              {dummyCommentData.map((data) => (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <td>{data.comment}</td>
                  <td>{data.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
