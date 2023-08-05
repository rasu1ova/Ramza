import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='container row header'>
        <div className="logo">
            {/* <img src="" alt="" /> */}
            
          <Link to='/'>Logo</Link>
        </div>
        <nav className=''>
            <ul className='row'>
                <li><Link className='link' to='/biz-haqimizda'>Biz haqimizda</Link></li>
                <li><Link className='link' to='/kurslar'>Kurslar</Link></li>
                <li><Link className='link' to='/fikrlar'>Fikrlar</Link></li>
                <li><Link className='link' to='/yangiliklar'>Yangiliklar</Link></li>
                <li><Link className='link' to='/aloqa'>Aloqa</Link></li>
                <li><button className='btn'><Link to='login'>Log In</Link></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header