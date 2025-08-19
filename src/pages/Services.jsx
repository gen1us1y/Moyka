import ServiceCard from '../components/ServiceCard'
import '../styles/pages/services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Детейлинг мойка',
      description: 'Это не просто мойка, а глубокая чистка и обработка, при которой уделяется внимание каждой детали авто',
      image:'/images/detailmoy.png',
      price: 'От 5 000₽'
    },
    {
      id: 2,
      title: 'Керамическая защита',
      description: 'Это средство для защиты кузова автомобиля, представляющее собой жидкий полимер, который при нанесении образует прочный слой на лакокрасочном покрытии',
      image:'/images/keram.jpg',
      price: 'От 25 000₽'
    },
    {
      id: 3,
      title: 'Химчистка салона',
      description: ' Это процедура очистки всего салона от загрязнений разной степени и происхождения',
      image: '/images/himiya.png',
      price: 'От 1 000₽'
    }
  ]
  return (
    <div className="services-page">
      <section className="services-list">
        <div className="container">
          <h2>Основные услуги</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  
}

export default Services