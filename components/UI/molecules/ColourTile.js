import styles from './colourTile.module.scss';

const ColourTile = (props) => {
  const { name, hex, varName } = props.colour;

  return (
    <div className={styles.tile}>
      <div className={styles['tile__colour-box']} style={{backgroundColor: hex}}></div>
      <div className={styles['tile__content']}>
        <p>{name}</p>
        <p>{hex}</p>
        <p>{varName}</p>
      </div>
    </div>
  )
}

export default ColourTile;