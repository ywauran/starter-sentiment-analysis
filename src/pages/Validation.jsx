import NaiveBayes from "../components/NaiveBayes";
import KNN from "../components/KNN";
const Validation = () => {
  return (
    <>
      <div className="grid grid-cols-2 mx-8 mt-4">
        <KNN />
        <NaiveBayes />
      </div>
    </>
  );
};

export default Validation;
