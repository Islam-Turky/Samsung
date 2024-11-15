import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import NavScrollExample from './Navabar';
import loadingSpinner from "/sharp.png";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";


const Loading = () => (
  <div className="loading d-flex justify-content-center align-content-center align-items-center vh-100">
    <img src={loadingSpinner} width={300} alt="logo" className='loading-logo'/>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true); // Add loading state
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <>
    { loading ? (<Loading />) :(
    <>
        <NavScrollExample />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Home />
        <Footer />
    </>)}
    </>
  )
}

export default App
