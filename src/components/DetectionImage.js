import React from 'react';

const DetectionImage = ({url, isLoading}) => {

  if(!url && !isLoading) {
    return (
      <div className="ui card">
        <div className="content">
          <i className="ui arrow alternate circle up icon"></i>
          <p className="description">Please Upload Satellite Image</p>
        </div>
      </div>
    );
  }
  else if (isLoading) {
    return (
      <div><i className="spinner loading icon"></i></div>
    );
  }
  else {
    return(
      <div>
        <img src={url} alt="fire prediction"/>
      </div>
    );
  }
  // 
  
  
  
}

export default DetectionImage;