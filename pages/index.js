import Dropdown from "../components/Dropdown/Dropdown";
import HotelIcon from '@mui/icons-material/Hotel';
import ForestIcon from '@mui/icons-material/Forest';
import Card from "../components/Cards/Card";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";
import SpeedDial from "../components/SpeedDial/SpeedDial";
import Image from "../components/Image/Image";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export default function Home() {

  return (
    <div className="App">
      <h1 className='text-3xl'>Safehouse</h1>
      <br />
      <Dropdown
        op1="Host"
        icon1={<HotelIcon />}
        op2="Evacuee"
        icon2={<ForestIcon />}
      />
      <br />
      <Card />
      <br />
      <Slider />
      <br />
      <Navbar />
      <br />
      <SpeedDial />
      <br />
      <Image />
      <br />
      <ProgressBar />
    </div>
  );
}