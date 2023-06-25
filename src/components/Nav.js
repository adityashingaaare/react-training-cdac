import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React from 'react'


const Nav = () => {
  return (
    <div>
        <Link to='multimedia' className='btn btn-primary btn-sm'>Multimedia</Link>{' '}
        <Link to='userform' className='btn btn-primary btn-sm'>UserForm</Link>{' '}
        <Link to='toggleimg' className='btn btn-primary btn-sm'>ToggleImage</Link>{' '}
        <Link to='favcolor' className='btn btn-primary btn-sm'>FavColor</Link>{' '}
        <Link to='usestate' className='btn btn-primary btn-sm'>UseState</Link>{' '}
        <Link to='dashboard' className='btn btn-primary btn-sm'>DashBoard</Link>

    </div>
  )
}

export default Nav;
