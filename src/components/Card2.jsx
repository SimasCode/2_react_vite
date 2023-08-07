import MainBtn from "./MainBtn"

function Card2() {
    const cityName = 'Paris'
    return (
      <article className='singleCard'>
      <img className='cardImg' src="/img/paris.jpg" alt="new york" />
      <div className="cardInfo">
        <h3 className="cardTitle">{cityName}</h3>
        <p className='cardDate'>Sat 28 Nov 2016</p>
        <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <MainBtn />
      </div>
    </article>
    )
  }

  export default Card2