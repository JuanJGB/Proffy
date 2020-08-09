import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/37118141?s=460&u=8ad0df67c35cc694de42ff334f9d544aecb9b4f0&v=4" alt="Juan Gustavo Benini"/>
        <div>
          <strong>Juan Gustavo benini</strong>
          <span>Development</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <br/><br/>
        Nulla at urna tristique, condimentum lectus ac, ullamcorper nisl. Sed massa purus, elementum non luctus vel, auctor id metus. 
        Quisque eu odio eget sem feugiat dignissim
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 82,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;