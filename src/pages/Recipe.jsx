import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'



function Recipe() {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(()=>{
    fetchDetails()
  }, [params.name])
  return (
    <div className="detail-wrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="info">
        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>
          Instructions
        </button>
        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>
          Ingredients
        </button>
      </div>
    </div>
  )
}

export default Recipe