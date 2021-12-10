import styles from './cardTout.module.css';

const CardTout = (props) => {
  const { title, description, modifier, link } = props.card;

  return (
    <div className={`${styles.cardTout} ${styles[`cardTout--${modifier}`]}`}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.caption}>{description}</p>
    </div>
  )
}

export default CardTout;