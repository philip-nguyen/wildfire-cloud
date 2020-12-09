import React from 'react'
import Marker from '../components/Marker.js'
import Text from 'react-text'

const Legend = (props) => {
  return (
    <div className="ui card" style = {{width:'99%', height: '35%'}}>
          <div className="content">
            <p className="header" > Legend </p><Text>{"\n"}</Text>
            <div className="meta">
            <span className="legend1"></span>

              <span className="legend2"><Marker /><Text>{"\n"}</Text><br/>&nbsp;&nbsp;&nbsp; Predicted Fire</span>

            </div>
          </div>
        </div>
  );
}

export default Legend
