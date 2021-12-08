import styles from './colourTile.module.scss';

const ColourTile = (props) => {
  const { name, hex, varName } = props.colour;

  return (
    <div className={styles.tile}>
      <div className={styles.colour} style={{backgroundColor: hex}}></div>
      <div className={styles.content}>
        <p>{name}</p>
        <p>{hex}</p>
        <p>{varName}</p>
      </div>
    </div>
  )
}

export default ColourTile;