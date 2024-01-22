import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState('light')
  const handleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.background  = 'black'
      document.body.style.color  = 'white'
    }
    else {
      setMode('light')
      document.body.style.background  = 'white'
      document.body.style.color  = 'gray'
    }
  }
  return (
   <div>
     <Navbar mode={mode} handleMode={handleMode}/>
    <Component {...pageProps} />
    <Footer/>
   </div>
  )
}
