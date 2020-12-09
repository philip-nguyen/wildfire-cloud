import React from 'react'

const WildfirePredictionDetail = (props) => {
  return (
    <div className="ui card" style = {{width:'99%', height: '63%'}}>
          <div className="content">
            <p className="header"> Detection Detail </p>
            <div className="meta">
              <div>
                <span className="name"style = {{fontSize: 16}}><b>Name</b>: Star Fire</span>
              </div>
              <div>
              <span className="date" style = {{fontSize: 16}}><b>First Occurence </b>: 2015</span>
              </div>
              <div>
                <span className="counties" style = {{fontSize: 16}}><b>Counties</b>: Santa Clara</span>
              </div>
              <div>
                <span className="lat" style = {{fontSize: 16}}><b>Latitude:</b> [34.86]</span>
              </div>
              <div>
                <span className="coordinates" style = {{fontSize: 16}}><b>Longitude</b>: [-119.16]</span>
              </div>
            </div>
          </div>
        </div>
  );
}

export default WildfirePredictionDetail
