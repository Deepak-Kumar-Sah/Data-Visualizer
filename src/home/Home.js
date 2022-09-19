import React,{useEffect,useState} from "react";
import BarChart from "../graphs/BarChart";
import ScatterPlot from "../graphs/ScatterPlot";
import WineJson from '../data/Wine-Data.json';

const Home=()=>{
  const [BarChartData, setBarChartData] = useState([]); 
  const [ScatterPlotData, setScatterPlotData] = useState([]);

// BarChartList return two list(alcohol category,respective avg of malic acid)
  const BarChartList = ()=>{
    //Local Variables
    let totalMalic=0;
    let itemCount=0;
    let category=[];
    let avgValues=[];
    let data=[]
    WineJson.map((item,index)=>{
       if(WineJson[index+1]){
            let currItem=item.Alcohol
            let nextItem=WineJson[index+1].Alcohol
            if(currItem===nextItem){
                totalMalic+=item["Malic Acid"]
                itemCount++
            }else{
                totalMalic+=item["Malic Acid"]
                itemCount++
                category.push(item.Alcohol);
                avgValues.push(totalMalic/itemCount)
                totalMalic=0
                itemCount=0
            }
       }else{
            totalMalic+=item["Malic Acid"]
            itemCount+=1
            category.push(item.Alcohol);
            avgValues.push(totalMalic/itemCount)
            data.push({Category:category,avg:avgValues})
       }
    })  
    return data;

}
//ScatterList return coordinate [colorIntensity,hue]
const ScatterList = ()=>{
    let data=[]
    WineJson.map((item)=>{
    data.push([item["Color intensity"],item.Hue])
    })
    return data;
}
    useEffect(()=>{
        const Barval=BarChartList()
        const ScatterVal=ScatterList()
        setScatterPlotData(ScatterVal)
        setBarChartData(Barval)
    },[])

    return(
        <>
            {BarChartData.length && <BarChart BarData={BarChartData}/>}
            {ScatterPlotData.length && <ScatterPlot ScatterData={ScatterPlotData}/>}
        </>
    )
}
export default Home;