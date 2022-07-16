import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


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
    <motion.div className='grid'
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        
        {cuisine.map((item) => {
            return(
                <div className="grid-card" key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </div>
            )
        })}
    </motion.div>
  )
}


export default Cuisine