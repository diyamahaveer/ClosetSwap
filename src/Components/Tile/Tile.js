import './Tile.css'

export default function Tile({name, price, size, date, image, id}) {
    return (
      <div className='tile' > 
        <img src={image} alt={name} width={200} height={200} />
        <div className="tile-info">
          <div className="tile-name">
            <text> {name}</text>
          </div>
          <div className="tile-price">
            <p> ${price}</p>
          </div>
          <div className="tile-size">
          <p> Size: {size} </p>
          </div>
          <div className="tile-date">
          <text> {date} </text>
          </div>
        </div>
      </div>
    )
  }