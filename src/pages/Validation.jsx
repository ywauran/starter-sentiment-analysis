import NaiveBayes from "../components/NaiveBayes";
import KNN from "../components/KNN";
import { useResultContext } from "../context/ResultContext";
const Validation = () => {
  const { resultState } = useResultContext();
  const keysLength = Object.keys(resultState).length;

  return (
    <>
      {keysLength === 0 ? (
        <h4 className="font-semibold text-center underline">
          Please upload files and preprocessing first.
        </h4>
      ) : (
        <>
          <div className="grid grid-cols-2 mx-8 mt-4">
            <KNN />
            <NaiveBayes />
          </div>
        </>
      )}
    </>
  );
};

export default Validation;
