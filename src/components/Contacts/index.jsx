import s from './style.module.sass';
export default function Contacts(){
  return(
    <div className={s.contacts}>
      <h2>Свяжитесь с нами</h2>
      <p>Есть вопросы? Оставьте ваши контакты и мы свяжимся с вами !</p>
      <form>
        <div>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name"/>
        </div>
        <div>
          <label htmlFor="phone">Номер</label>
          <input type="number" id="phone" />
        </div>
        <button>Отправить</button>
      </form>
    </div>
  )
}