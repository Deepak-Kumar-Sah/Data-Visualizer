import React from "react";
import EChartsReact from "echarts-for-react/lib";

const ScatterPlot = (ScatterData) =>{
    const option = {
        xAxis: {
          name:"Color Intensity",
          nameLocation:"middle",
          nameTextStyle: {padding:20}
        },
        yAxis: {
          name:"Hue",
          nameLocation:"middle",
          nameTextStyle: {padding:20}
        },
        series: [
          { 
            symbolSize: 5,
            data:ScatterData.ScatterData ,
            type: 'scatter'
          }
        ]
      }; 
    return(
        <>
          <h1>ScatterPlot</h1>
          <EChartsReact option={option}/>
        </>
    )
}
export default ScatterPlot;