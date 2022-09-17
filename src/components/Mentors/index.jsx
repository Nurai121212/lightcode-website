import s from './style.module.sass';

export default function Mentors(){
  return(
    <div className={s.mentors}>
      <div className={s.mentors_title}>
        <h2>Наши Ментора</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum perspiciatis, est illum dolorem voluptates delectus id unde explicabo modi veniam tenetur tempora quae quia architecto error veritatis numquam vero ipsam, assumenda quibusdam reiciendis? Sapiente possimus beatae reiciendi</p>
      </div>
      <div className={s.mentors_cards}>
        <div className={s.mentors_card}>
          <div className={s.mentors_card_frame}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className={s.mentors_card_desc}>
            <h3>Name Surname</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ipsam inventore qui libero obcaecati temporibus laboriosam soluta placeat ullam dolore.</p>
          </div>
        </div>
        <div className={s.mentors_card}>
          <div className={s.mentors_card_frame}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className={s.mentors_card_desc}>
            <h3>Name Surname</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ipsam inventore qui libero obcaecati temporibus laboriosam soluta placeat ullam dolore.</p>
          </div>
        </div>
      </div>
    </div>
  )
}