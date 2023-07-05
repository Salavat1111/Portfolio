import '../App.css';
import { FaFigma, FaGithub, FaTelegram, FaViber, FaWhatsapp, FaLink, FaVk  } from "react-icons/fa";


function CardList({handleToggle, visibleСhange}) {
  
 
  
  
    return (
            <div className={visibleСhange ? 'container--questionnaire active' : 'container--questionnaire'}>
              <div className={visibleСhange ? 'pr active' : 'pr'}>
              <div className='block--avt--switch' >
                <div className='block--avt'>
                </div>
                <div className='block--switch' onClick={handleToggle}>
                  <div
                  className={visibleСhange ? 'circle--yellow active' : 'circle--yellow'} >
                  </div>
                </div>
              </div>
              <div className={visibleСhange ? 'bl--lastName active' : 'bl--lastName'}>
                <h1>Салават Фаттахов</h1>
                <div className={visibleСhange ? 'bl--description active' : 'bl--description'}>
                  <p>
                      Хочу заниматься программированием на React, так как это творческое и умственное развитие, где постоянно предстоит знакомиться с чем-то новым.   
                  </p>
                </div>
              </div>
              <div className='bl--project--namber--1'>
                <div className='bl-wth--nb1'>
                <p>Мой первый проект web-приложения твой техник</p>
                </div>
                <div className="bl--link--git--figma">
                 <a href="https://www.figma.com/file/dgpfUraTX0ue337HGTyfDi/Kayak-ordering-service-(Community)?type=design&node-id=0-1&mode=design&t=iTT8ukw2s9MYcJoC-0"><FaFigma /></a>
                 <a href="https://github.com/Salavat1111/tt-tehnick"><FaGithub /></a>
                </div>
              </div>
              <div className='bl--project--namber--2'>
                <div className='bl-wth--nb1--2'>
                   <p>Мой второй проект web-приложения пиломатериалы63.рф</p>
                </div>
                <div className="bl--link--git--figma--2">
                 <a href="https://www.figma.com/file/sog2FedfEaQ5ZATLD0FhZO/GREEN---ЛЕС?type=design&node-id=0-1&mode=design&t=ypBmgMW4a2njveZA-0"><FaFigma /></a>
                 <a href="https://github.com/Salavat1111/green"><FaGithub /></a>
                 <a href="https://пиломатериалы63.рф/"><FaLink /></a> 
                </div>
                <div className='bl-wth--text--link'>
                   <p>Данный проект делал, с целью изучение адаптивной версти под телефон.</p>
                </div>
              </div>
                <div className={visibleСhange ? 'bl-description--text active' : 'bl-description--text'}>
                   <p>Очень хочу попасть на  стажировку где уже во всю работают профессионалы над комерческим продуктом, где бы смог черпать знания у профи, и тем самым прокачивать свои навыки.</p>
                </div>
                <div className="link--vk--tg--vb--vt">
                  <a href="https://invite.viber.com/?g2=AQA59jqXMkaoclFGCiOCWBTSP02nihIK%2B8DAZpVt3Tvyzl5OAWw3b%2Bi2iWlfCQ4k&lang=ru"><FaViber /></a>
                  <a href="https://t.me/salavat_fat"><FaTelegram /></a>
                  <a href="https://vk.com/id144709666"><FaVk /></a>
                  <a href="https://api.whatsapp.com/send?phone=79025183824"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
    );
}

export default CardList;