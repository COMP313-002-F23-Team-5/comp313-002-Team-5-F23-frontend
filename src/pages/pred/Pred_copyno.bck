import React, { useState } from 'react';
import './Pred.css';
import graphImage from '../../assets/graph.png';

export default function Pred() {
  const [selectedPeriod, setSelectedPeriod] = useState('');

  // Dummy data for stock predictions
  const stockPredictions = {
    '7 Days': [
      { day: 'Day 1', prediction: '548.40' },
      { day: 'Day 2', prediction: '556.74' },
      { day: 'Day 3', prediction: '548.40' },
      { day: 'Day 4', prediction: '556.74' },
      { day: 'Day 5', prediction: '548.40' },
      { day: 'Day 6', prediction: '556.74' },
      { day: 'Day 7', prediction: '548.40' }
    ],
    '10 Days': [
      { day: 'Day 1', prediction: '548.40' },
      { day: 'Day 2', prediction: '556.74' },
      { day: 'Day 3', prediction: '548.40' },
      { day: 'Day 4', prediction: '556.74' },
      { day: 'Day 5', prediction: '548.40' },
      { day: 'Day 6', prediction: '556.74' },
      { day: 'Day 7', prediction: '548.40' },
      { day: 'Day 8', prediction: '556.74' },
      { day: 'Day 9', prediction: '548.40' },
      { day: 'Day 10', prediction: '556.74' }
    ],
    '20 Days': [
      { day: 'Day 1', prediction: '548.40' },
      { day: 'Day 2', prediction: '556.74' },
      { day: 'Day 3', prediction: '548.40' },
      { day: 'Day 4', prediction: '556.74' },
      { day: 'Day 5', prediction: '548.40' },
      { day: 'Day 6', prediction: '556.74' },
      { day: 'Day 7', prediction: '548.40' },
      { day: 'Day 8', prediction: '556.74' },
      { day: 'Day 9', prediction: '548.40' },
      { day: 'Day 10', prediction: '556.74' },
      { day: 'Day 11', prediction: '548.40' },
      { day: 'Day 12', prediction: '556.74' },
      { day: 'Day 13', prediction: '548.40' },
      { day: 'Day 14', prediction: '556.74' },
      { day: 'Day 15', prediction: '548.40' },
      { day: 'Day 16', prediction: '556.74' },
      { day: 'Day 17', prediction: '548.40' },
      { day: 'Day 18', prediction: '556.74' },
      { day: 'Day 19', prediction: '548.40' },
      { day: 'Day 20', prediction: '556.74' }
    ],
  };

  const handlePeriodChange = (event) => {
    const period = event.target.value;
    setSelectedPeriod(period);
    // Here you would also update the graphImage state with the image for the selected period
    // For example:
    // setGraphImage(`path-to-${period}-graph-image.png`);
  };

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
          <option value="7 Days">7 Days</option>
          <option value="10 Days">10 Days</option>
          <option value="20 Days">20 Days</option>
        </select>
      </div>
      {selectedPeriod && ( // Only display the graph and predictions if a period has been selected
        <>
          <div className="graph-container">
            <img src={graphImage} alt="Stock Prediction Graph" />
          </div>
          <div className="predictions-table-container">
            <table className="predictions-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Prediction</th>
                </tr>
              </thead>
              <tbody>
                {stockPredictions[selectedPeriod]?.map((prediction, index) => (
                  <tr key={index}>
                    <td>{prediction.day}</td>
                    <td>{prediction.prediction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}