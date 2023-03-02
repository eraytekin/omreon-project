import Slider from './components/slider/Slider';
import Quality from "./components/qualityandperiod/QualityAndPeriod";
import ContentBox from "./components/contentbox/ContentBox";
import TestManagement from "./components/testandmanagement/TestAndManagement";
import MainExplain from "./components/mainexplain/MainExplain";


function App() {
  return (
    <div className="App">
        <Slider />
        <Quality />
        <ContentBox />
        <TestManagement />
        <MainExplain />
    </div>
  );
}

export default App;
