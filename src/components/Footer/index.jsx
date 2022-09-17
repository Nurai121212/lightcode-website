import s from './style.module.sass';

import Instagram from '../../assets/imgs/ig-logo.svg';
import Telegram from '../../assets/imgs/telegram-logo.svg';
import TikTok from '../../assets/imgs/tiktok-logo.svg';

export default function Footer(){
  return(
    <footer className={s.footer}>
      <div>
        <div className={s.logo}>Logo</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fugit excepturi! Sapiente doloremque tempore eius sint nemo veritatis praesentium doloribus similique voluptates deleniti, quam possimus.</p>
        <ul>
          <li>
            <a href="https://">
              <img src={Instagram} alt="Instagram Link Logo" />
            </a>
          </li>
          <li>
            <a href="http://">
              <img src={Telegram} alt="Telegram Link logo" />
            </a>
          </li>
          <li>
            <a href="http://">
              <img src={TikTok} alt="TikTok Link Logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}