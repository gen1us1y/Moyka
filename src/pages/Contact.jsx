import { useState, useEffect } from 'react'
import Header from '../components/Header' // Убедитесь, что импортирован Header
import Footer from '../components/Footer'
import '../styles/pages/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
  
  })

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

 
}

export default Contact