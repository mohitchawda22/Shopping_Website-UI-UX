import AppDownload from "@/components/AppDownload";
import BrandsBar from "@/components/BrandsBar";
import Contact from "@/components/Contact";
import Favourite from "@/components/Favourite";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";
import SalesBanner from "@/components/SalesBanner";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <BrandsBar/>
  <NewArrival/>
  <SalesBanner/>
  <Favourite/>
  <AppDownload/>
  <Contact/>
  <Footer/>
  </>
  );
}
