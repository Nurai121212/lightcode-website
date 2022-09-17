import s from './style.module.sass';
export default function About(){
  return(
    <div className={s.about}>
      <div className={s.about_content}>
        <h2>Light Code - это...</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing eksks skskks ddjdjd sgdgff Lorem ipsum, dolor sit amet consectetur adip</p>
      </div>
      <div className={s.about_frame}>
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </div>
  )
}