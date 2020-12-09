import React from 'react';
import DetectionDetail from './DetectionDetail';

const DetectionList = ({ boxes, scores, classes }) => {
  const fires = [];
  
  console.log('Detection list scores', scores);
  if(scores.length == classes.length) {
    for(let i = 0; i<boxes.length; i++) {
      console.log('Fire push', boxes[i], 'score', scores[i], classes[i]);
      fires.push([boxes[i], scores[i], classes[i], i]);
    }
  }
  else console.log('Arrays are not the same length...');
  
  const renderedList = fires.map((fire) => {
    console.log('WPP Entity:', fire);
    return (
      <DetectionDetail 
        box={fire[0]}
        score={fire[1]}
        classification={fire[2]}
        key={fire[4]}
      />
    );
  });

return <div className="ui relaxed divided list">{renderedList}</div>
}

export default DetectionList;