import React from 'react'

const DetectionDetail = ({box, score, classification}) => {

  let topLeftPoint = '',
        bottomRightPoint = '',
        detectionConfidences = 0,
        entityClassification = '';
  // if detail exists, parse the information given back
  if(box && score && classification){

    topLeftPoint = formatTopLeft(box);
    bottomRightPoint = formatBottomRight(box);
    detectionConfidences = formatPercent(score);
    entityClassification = classification == 1 ? 'Fire' : 'Smoke';
  }
  else {
    return (
      <div className="ui card fluid">
        <div className="content">
          <p className="description">No Image Selected...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ui card">
      <div className="content">
        <p className="header">{entityClassification} Detected </p>
        <div className="meta">
          <span className="date">Entity Detected</span>
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
                <td>Top Left Point</td>
                <td>{topLeftPoint}</td>
              </tr>
              <tr>
                <td>Bottom Right Point</td>
                <td>{bottomRightPoint}</td>
              </tr>
              <tr>
                <td>Confidence</td>
                <td>{detectionConfidences}</td>
              </tr>
              <tr>
                <td>Classification</td>
                <td>{entityClassification}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function formatTopLeft(box) {
  return "(" + box[0].toFixed(3) + ", " + box[1].toFixed(3) + ")";
}

function formatBottomRight(box) {
  return " (" + box[2].toFixed(3) + ", " + box[3].toFixed(3) + ")";
}

function formatPercent(score) {
  return (score * 100).toFixed(1) + "%";
}

export default DetectionDetail;
