import {useState} from 'react'
import{FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('hey')
        navigate('/searched/' + input)
    }
  return (
    <form  onSubmit={submitHandler} className='form-style'>
        <div>
            <FaSearch></FaSearch>
        <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}
            />
        </div>
    </form>
  )
}

export default Search