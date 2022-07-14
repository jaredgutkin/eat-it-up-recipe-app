import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

function Cuisine() {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCusine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
            );
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCusine(params.type)
        console.log(params.type)
    }, [params.type])
  return (
    <div className='grid'>
        {cuisine.map((item) => {
            return(
                <div className="grid-card" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </div>
            )
        })}
    </div>
  )
}


export default Cuisine