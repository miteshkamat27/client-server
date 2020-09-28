import React, { useEffect, useState } from "react";

export const Overview = () => {

  const [chartData, setChartData] = useState();
  useEffect(() => {
    fetch('http://kaboom.rksv.net/api/historical?interval=1')
    .then(res => res.json())
    .then(result => setChartData(result));
    
  },[])

  return (
    <div>
      <h3>Overview</h3>
      
    </div>
  )
};
