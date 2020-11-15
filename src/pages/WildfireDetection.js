import React from 'react';
import MapView from '../components/Map.js';
import DetectionDetail from '../components/DetectionDetail.js';

const WildfireDetection = props => {
  
  return (
    <div classname="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="two wide column"></div>
          <div className="nine wide column">
            <MapView />
          </div>
          <div className="five wide column">
            <DetectionDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WildfireDetection;
