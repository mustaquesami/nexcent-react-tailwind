import Achievement from "./components/Achievement";
import Banner from "./components/Banner";
import Calender from "./components/Calender";
import Caring from "./components/Caring";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import GetDemo from "./components/GetDemo";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css"; 

export default function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Clients/>
      <Community/>
      <Calender/>
      <Achievement/>
      <Mobile/>
      <Customer/>
      <Caring/>
      <GetDemo/>
      <Footer/>
    </>
  )
}