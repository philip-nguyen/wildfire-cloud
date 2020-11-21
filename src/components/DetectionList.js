import React from 'react';
import DetectionDetail from './DetectionDetail';

const DetectionList = ({ fires, onFireSelect }) => {
  const renderedList = fires.map((fire) => {
    return (
      <DetectionDetail 
        onFireSelect={onFireSelect}
        fire={fire}
      />
    );
  });

return <div className="ui relaxed divided list">{renderedList}</div>
}

export default DetectionList;