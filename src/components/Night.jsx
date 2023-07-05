// import '../App.css';
import styles from './NG.module.scss';
import { useEffect, useState } from 'react';

function Night() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
 return (
  <div className={styles.phone__wh}>
  <div className={styles.container__layers1}
  style={{backgroundPositionY: position*1}}
  ></div>
  <div className={styles.container__layers7}
  style={{backgroundPositionY: position*1.5}}
  ></div>
  <div className={styles.container__layers0}
  style={{backgroundPositionY: position*1.2}}
  ></div>
  <div className={styles.container__layers2}
  style={{backgroundPositionY: position*1}}
  ></div>
  <div className={styles.container__layers5}
  style={{backgroundPositionY: position*.4}}
  ></div>
</div>  
  );
}

export default Night;