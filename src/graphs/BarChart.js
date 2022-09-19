import React from "react";
import EChartsReact from "echarts-for-react/lib";


// Object structure for reference
  // "Alcohol": 1,
  //     "Malic Acid": 14.23,
  //     "Ash": 1.71,
  //     "Alcalinity of ash": 2.43,
  //     "Magnesium": 15.6,
  //     "Total phenols": 127,
  //     "Flavanoids": 2.8,
  //     "Nonflavanoid phenols": 3.06,
  //     "Proanthocyanins": ".28",
  //     "Color intensity": 2.29,
  //     "Hue": 5.64,
  //     "OD280/OD315 of diluted wines": 1.04,
  //     "Unknown": 3.92

const BarChart = (BarData) =>{
  // Accessing Alcohol category and Average Malic Acid
  let AlcoholList=BarData.BarData[0].Category;
  let AvgValuesList=BarData.BarData[0].avg
    const option = {
        xAxis: {
          type: 'category',
          data: AlcoholList,
          name:"Alcohol",
          nameLocation:"middle",
          nameTextStyle: {padding:20}
        },
        yAxis: {
          type: 'value',
          name:"Malic Acid",
          nameLocation:"middle",
          nameTextStyle: {padding:20}
        },
        series: [
          {
            data: AvgValuesList,
            type: 'bar',
            barWidth: "30%",
          }
        ]
      }; 
    return(
        <>
          <h1>BarChart</h1>
          <EChartsReact option={option}/>
        </>
    )
}
export default BarChart;