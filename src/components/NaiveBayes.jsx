import { useResultContext } from "../context/ResultContext";

const NaiveBayes = () => {
  const { resultState } = useResultContext();

  const data = Object.keys(resultState).map((partition) => ({
    partition: partition,
    ...resultState[partition],
  }));

  return (
    <div className="p-10">
      <h3 className="text-2xl font-bold">Naive Bayes</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Partition</th>
              <th>Naive Bayes Confusion Matrix</th>
              <th>Train Samples</th>
              <th>Test Samples</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td className="text-center">
                  {data.partition === "partition_1" ? "60 : 40" : null}
                  {data.partition === "partition_2" ? "70 : 30" : null}
                  {data.partition === "partition_3" ? "80 : 20" : null}
                  {data.partition === "partition_4" ? "90 : 10" : null}
                </td>
                <td>
                  <table>
                    {data.nb_cm.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </table>
                </td>
                <td>{data.train_samples}</td>
                <td>{data.test_samples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NaiveBayes;
