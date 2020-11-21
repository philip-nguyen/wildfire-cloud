import React from 'react'

const DetectionDetail = (detail) => {

  // if detail exists, parse the information given back
  if(detail){
    const boundingBoxes = [];
    const detectionConfidences = [];
    const classifications = [];
  }

  return (
    <div className="ui card">
      <div className="content">
        <p className="header"> Fire Details for [Fire] </p>
        <div className="meta">
          <span className="date">[Num] Entities Detected</span>
        </div>
        <div className="description">
          <table>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bounding Boxes</td>
                <td></td>
              </tr>
              <tr>
                <td>Detection Percentage</td>
                <td></td>
              </tr>
              <tr>
                <td>Classification</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetectionDetail;