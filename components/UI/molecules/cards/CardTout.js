import styles from './cardTout.module.css';

const CardTout = (props) => {
  const { title, description, modifier, link } = props.card;

  return (
    // <div className={`card-tout card-tout--${modifier}`}>
    <div className={styles[`card-tout--${modifier}`]}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default CardTout;