import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-details-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
