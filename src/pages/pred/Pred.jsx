import React, { useState, useEffect } from 'react';
import './Pred.css';
import graphImage from '../../assets/graph.png';

export default function Pred() {
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [predictionValues, setPredictionValues] = useState([]);
  const [predictionGraph, setPredictionGraph] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePeriodChange = async (event) => {
    const period = event.target.value;
    setSelectedPeriod(period);

    // Set loading state to true
    setLoading(true);

    // Make an API request with the selected period and update state
    await fetchData(period);

    // Set loading state to false after the request is completed
    setLoading(false);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('en-CA', {
      style: 'currency',
      currency: 'CAD'
    });
  };

  // Example function to fetch data from the API
  const fetchData = async (period) => {
    try {
      const response = await fetch(`https://testinggroup5sp.azurewebsites.net/api/get_predictions?code=PG-6Zy9_8LC9fOuuvg_3081lvplZ-miI6nuwR34cq1pqAzFuDyfrFw==&days=${period}`);
      const data = await response.json();

      if (data.status === 'ok') {
        // Format prediction values
        const formattedPredictions = data.prediction_values.map(prediction => ({
          date: prediction.date,
          prediction: formatCurrency(prediction.prediction)
        }));

        setPredictionValues(formattedPredictions);
        setPredictionGraph(data.prediction_graph);
      } else {
        // Handle error case
        console.error('API request failed:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    if (selectedPeriod) {
      handlePeriodChange({ target: { value: selectedPeriod } });
    }
  }, [selectedPeriod]); // Re-fetch data when selectedPeriod changes

  return (
    <div className="pred-content">
      <h1>Stock Prediction</h1>
      <div className="dropdown-container">
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="period-dropdown"
        >
          <option value="">Please Select Prediction</option> {/* Default option added */}
          <option value="7">7 Days</option>
          <option value="10">10 Days</option>
          <option value="15">15 Days</option>
          <option value="20">20 Days</option>
          <option value="25">25 Days</option>
          <option value="30">30 Days</option>
          <option value="35">35 Days</option>
          <option value="40">40 Days</option>
        </select>
      </div>

      {/* Display loading message if data is being fetched */}
      {loading && <p>Loading...</p>}

      {!loading && selectedPeriod && ( // Only display the graph and predictions if a period has been selected
        <>
          {/* Display prediction graph */}
          {!loading && predictionGraph && (
            <div className="graph-container">
              <img src={`data:image/png;base64, ${predictionGraph}`} alt="Stock Prediction Graph" />
            </div>
          )}

          {/* Display prediction values */}
          {!loading && predictionValues.length > 0 && (
            <div className="predictions-table-container">
              <table className="predictions-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Prediction</th>
                  </tr>
                </thead>
                <tbody>
                  {predictionValues.map((prediction, index) => (
                    <tr key={index}>
                      <td>{prediction.date}</td>
                      <td>{prediction.prediction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}