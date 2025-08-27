import '../styles/pages/events.css'

function Events() {
  const news = [
    {
      id: 1,
      title: "Новая станция самообслуживания",
      date: "15 мая 2023",
      excerpt: "Открываем новую станцию самообслуживания в Северном районе. Специальные цены в первый месяц работы!",
      image: "/images/news1.jpg"
    },
    {
      id: 2,
      title: "Ночная акция -50%",
      date: "10 мая 2023",
      excerpt: "С 1 июня запускаем ночную акцию. С 23:00 до 06:00 скидка на все виды мойки 50%!",
      image: "/images/news2.jpg"
    },
    {
      id: 3,
      title: "Экологичные моющие средства",
      date: "28 апреля 2023",
      excerpt: "Перешли на новые экологически безопасные моющие средства немецкого производства.",
      image: "/images/news3.jpg"
    }
  ];

  return (
    <div className="events-page">
      <div className="events-header">
        <h2>Новости Н2О – всегда актуально!</h2>
        <p>Следите за обновлениями, акциями и событиями сети премиальных автомоек Н2О.</p>
      </div>

      <div className="news-grid">
        {news.map(item => (
          <article key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <button className="read-more-btn">Подробнее</button>
            </div>
          </article>
        ))}
      </div>

      <div className="newsletter-section">
        <h3>Подпишитесь на рассылку</h3>
        <p>Узнавайте первыми о новых акциях и специальных предложениях</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Ваш e-mail" />
          <button>Подписаться</button>
        </div>
      </div>
    </div>
  )
}

export default Events