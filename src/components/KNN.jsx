const dummyData = [
  {
    totalData: 100,
    akurasi: 0.85,
    presisi: 0.78,
    recall: 0.92,
    f1Measure: 0.84,
    partisi: "A",
  },
  {
    totalData: 150,
    akurasi: 0.92,
    presisi: 0.89,
    recall: 0.88,
    f1Measure: 0.9,
    partisi: "B",
  },
];

const KNN = () => {
  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Total Data</th>
              <th>Akurasi</th>
              <th>Presisi</th>
              <th>Recall</th>
              <th>F1-Measure</th>
              <th>Partisi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <tr key={index}>
                <td>{data.totalData}</td>
                <td>{data.akurasi}</td>
                <td>{data.presisi}</td>
                <td>{data.recall}</td>
                <td>{data.f1Measure}</td>
                <td>{data.partisi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KNN;
