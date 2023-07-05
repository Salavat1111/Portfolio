// import { useMemo, useState } from 'react';
import { useState } from 'react';
import './App.css';
import {Night, Day, CardList} from './components';


function App() {
  
  // const root = useMemo(() => document.querySelector(':root'), [])
  const [visibleСhange, setVisibleСhange] = useState(false)
  const handleToggle = () => {
    setVisibleСhange(!visibleСhange);
  }; 
  // const parallaxHandler = (e) => {
  //       const x = (e.clientX - window.innerWidth / 2) / 100;
  //       const y = (e.clientY - window.innerHeight / 2) / 100;
  //       root.style.setProperty('--posX', -x)
  //       root.style.setProperty('--posY', -y)
  //       root.style.setProperty('--rotateX', -x)
  //       root.style.setProperty('--rotateY', -y)
  // }
  

  return (
    <div className="App">
        <div className='container--layers'>
        {/* <div className='container--layers'onMouseMove={parallaxHandler}> */}
          {visibleСhange ?  <Night /> : <Day /> }
          <CardList handleToggle={handleToggle} visibleСhange={visibleСhange}/>
        </div>
        <div className='bg__violet'>
            <div className='bl__text--content'>
               <h1>Портфолио react.js</h1>
               <p>Я с реактом работаю уже около полугода, а на GitHub есть пару проектов. 
                Этот сайт взял за прототип и вложил в него максимум из того, что я знаю. 
                Пусть сам сайт весьма небольшой, но можно придумать как вместить ту или 
                иную технологию, чтобы показать, что я умею с этим работать и как я это делаю.</p>
                <p>Постоянно смотрю обучающие видео на YouTube, чтобы черпать знания и искать решения для задуманного</p>
                <p>Главное, что я выбрал для себя цель- стать программистом, к этому и стремлюсь...</p>
                <p>Расматриваю в качесте стажировки Frontend-разрабочик React.js, web-программист и т.д</p>
            </div>
        </div>
    </div> 
  );
}

export default App;
