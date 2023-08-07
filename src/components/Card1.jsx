import MainBtn from "./MainBtn"

function Card1() {
    const cityName = 'New York'
    return (
      <article className='singleCard'>
          <img className='cardImg' src="/img/newyork.jpg" alt="new york" />
          <div className="cardInfo">
            <h3 className="cardTitle">{cityName}</h3>
            <p className='cardDate'>Fri 27 Nov 2016</p>
            <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <MainBtn />
          </div>
        </article>
    )
  }

  export default Card1