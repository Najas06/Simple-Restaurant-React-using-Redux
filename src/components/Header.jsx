import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(search(e.target.value));
  }
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Eat Hungry</Link> </Navbar.Brand>
          <div className='d-flex'>
            <input type="text" className='form-control w-25' 
            onChange={handleSearchChange}
            onClick={(e)=>dispatch(search(e.target.value))}/>
            <button className='btn' ><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <img
            height="50px"
            width="50px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2usBgrn1PvUvwZjrRaajyL29wqfk8l62nS_BOicfiQ&s" alt="" />

        </Container>
      </Navbar>
    </div>

  )
}

export default Header