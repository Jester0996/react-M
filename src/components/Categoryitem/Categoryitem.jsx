import styles from './style.module.scss';

const  Categoryitem = ({title, img}) => {
  return ( 
  <div className={styles.wrapper}>
    <div className={styles.img}>
      <img src={img} alt="cat" />
    </div>
    <div className={styles.title}>{title}</div>
   
  </div> );
}
 
export default Categoryitem;