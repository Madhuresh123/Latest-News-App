import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <>
   <div className='header'>
    <Link className='header_left' to='/'>{props.title}</Link>
    <Link className='header_right' to='/news'>{props.about}</Link>  
   </div>
   <div style= {{height: "2rem"}}>
   <div className='alert'>
    <p>Alert!</p>
    <p>You text is coverted into upper case</p>
   </div>
   </div>
   </>
  )
}

    Header.propTypes = {
        title: PropTypes.string,
        about:  PropTypes.string
    };

export default Header;

