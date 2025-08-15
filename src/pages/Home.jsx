import { useState, useEffect } from 'react'
import NewsBanner from '../components/NewsBanner'
import '../styles/pages/home.css'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
    
    },
    {
    
    },
    {
   
    }
  ]

  const news = [
    {
    
    },
    {
    
    }
  ]

  const stats = [

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  
}

export default Home