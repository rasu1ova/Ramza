import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer home ">
      <div className="container row-wrap pad">
        <div className="logo--part">
        <h2 className="logo">  <Link to="/">Ramza</Link></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            tristique placerat eleifend aliquam pellentesque facilisis ultrices.
            Imperdiet mus urna egestas at tellus.
          </p>
        </div>
          <ul>
            <h2 className="footer--title"><Link className="footer--link" to='/'>Menu</Link></h2>
            <li><Link className="footer--link" to='/biz-haqimizda'>Biz haqimizda</Link></li>
            <li><Link className="footer--link" to='/kurslar'>Kurslar</Link></li>
            <li><Link className="footer--link" to='/yangiliklar'>Yangiliklar</Link></li>
            <li><Link className="footer--link" to='/aloqa'>Aloqa</Link></li>
          </ul>
          <ul>
            <h2  className="footer--title"><Link className="footer--link" to='/'>Qo'llab quvvatlash</Link></h2>
            <li><Link className="footer--link" to='/'>Ishga qabul qilish</Link></li>
            <li><Link className="footer--link" to='/'>Yordam</Link></li>
            <li><Link className="footer--link" to='/'>Aloqa</Link></li>
          </ul>
          <ul>
            <h2  className="footer--title"><Link className="footer--link" to='/'>O'quv markazi</Link></h2>
            <li><Link className="footer--link" to='/'>Xavfsizlik</Link></li>
            <li><Link className="footer--link" to='/'>Jamoa</Link></li>
          </ul>
        </div>
        <hr className="hr container"/>
        <div className=" container header">
          <p className="grey--text">© Ramza</p>
          <p className="grey--text">Created 2023</p>
        </div>
    </footer>
  );
}

export default Footer;
