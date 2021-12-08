import styles from './cardTout.module.scss';

const CardTout = (props) => {
  const { title, description, modifier, link } = props.card;

  return (
    <div className={`${styles['card-tout']} ${styles[`card-tout--${modifier}`]}`}>
      <h4 className={styles['card-tout__title']}>{title}</h4>
      <p className={styles['card-tout__caption']}>{description}</p>
    </div>
  )
}

export default CardTout;