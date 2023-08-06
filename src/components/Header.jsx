import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [active, setActive] = useState(false);

//   let body = document.getElementsByTagName("body").

//  useEffect(() => {
//   body.addEventListener("click", () => {
//     setActive(!active);
//   });
//  }, [])

  return (
    <header className="container header">
      <div className="logo">
        <Link to="/">Ramza</Link>
      </div>
      <nav className={active ? "active" : ""}>
        <ul className='row' onClick={()=> setActive(!active)} >
          <li><Link className='link' to='/biz-haqimizda'>Biz haqimizda</Link></li>
          <li><Link className='link' to='/kurslar'>Kurslar</Link></li>
          <li><Link className='link' to='/fikrlar'>Fikrlar</Link></li>
          <li><Link className='link' to='/yangiliklar'>Yangiliklar</Link></li>
          <li><Link className='link' to='/aloqa'>Aloqa</Link></li>
          <li><button className='btn'><Link to='login'>Log In</Link></button></li>
        </ul>
      </nav>
      <div className="menu">
        <button className="btn" onClick={() => setActive(!active)}>
          {active ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
