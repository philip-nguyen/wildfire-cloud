import React from 'react'
import Marker from '../components/Marker.js'
import Text from 'react-text'

const Legend = (props) => {
  return (
    <div className="ui card" style = {{width:'99%', height: '40%'}}>
          <div className="content">
            <p className="header" > Legend </p>
            <div className="meta">
              <span className="legend"></span>
              <span className="legend2"><Text>{"   "}</Text><Marker/></span>
              <span className="legend3"> Predicted Fire</span>

            </div>
          </div>
        </div>
  );
}

export default Legend
