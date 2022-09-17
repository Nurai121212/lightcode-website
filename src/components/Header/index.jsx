import { useEffect, useState } from 'react';
import s from './style.module.sass';

export default function Header(){
  const [burgerState, setBurgerState] = useState(false);

  useEffect(() => {
    if(burgerState){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = '';
    }
  }, [burgerState])

  const toggleBurger = () => {
    setBurgerState(!burgerState);
  };

  return(
    <header className={s.header}>
      <nav className={s.headerNav}>
        <div className={s.logo}>LOGO</div>
        <ul className={`${s.headerLinks} ${burgerState ? s.show: ''}`} onClick={() => setBurgerState(!burgerState)}>
          <li>
            <a href="http://">О нас</a>
          </li>
          <li>
            <a href="http://">Цены</a>
          </li>
          <li>
            <a href="http://">Ментора</a>
          </li>
          <li>
            <a href="http://">Контакты</a>
          </li>
        </ul>
        
        <div className={`${s.headerBurger} ${burgerState ? s.show : ""}`} onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}