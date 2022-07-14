import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'


function Category() {
  return (
    <div className='list'>
        <NavLink to={'/cuisine/Italian'} className='navlink'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'} className='navlink'>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className='navlink'>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'} className='navlink'>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
    </div>
  )
}

export default Category