import Slider from './components/slider/Slider';
import Quality from "./components/qualityandperiod/QualityAndPeriod";
import ContentBox from "./components/contentbox/ContentBox";
import TestManagement from "./components/testandmanagement/TestAndManagement";
import MainExplain from "./components/mainexplain/MainExplain";
import Reference from "./components/reference/Reference";
import ReacthToUs from "./components/reachtous/ReachToUs";
import FooterArea from './components/footerarea/FooterArea';


function App() {
  return (
    <div className="App">
        <Slider />
        <Quality />
        <ContentBox />
        <TestManagement />
        <MainExplain />
        <Reference />
        <ReacthToUs />
        <FooterArea />
    </div>
  );
}

export default App;
