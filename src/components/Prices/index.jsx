import s from './style.module.sass';

export default function Prices(){
  return(
    <div className={s.prices}>
      <div className={s.prices_title}>
        <h2>Освой IT в кратчайшие сроки</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel temporibus distinctio, unde</p>
      </div>
      <div className={s.prices_content}>
        <div>
          <h3>Starter</h3>
          <span>Free</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quos eius impedit unde repellat ea?</p>
        </div>
        <div>
          <h3>Premium</h3>
          <span>$29</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta doloribus eius nisi recusandae aut.</p>
        </div>
        <div>
          <h3>Enterprise</h3>
          <span>$49</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae fugiat quos ut magni nam!</p>
        </div>
      </div>
    </div>
  )
}