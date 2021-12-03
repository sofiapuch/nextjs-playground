import styles from './colourTile.module.css';

const ColourTile = (props) => {
  const { name, hex, varName } = props.colour;

  return (
    <div className={styles.tile}>
      <div className={styles.colour} style={{backgroundColor: hex}}></div>
      <div className={styles.content}>
        <p className="text">{name}</p>
        <p className="colour-tile__text">{hex}</p>
        <p className="colour-tile__text colour-tile__text--secondary">{varName}</p>
      </div>
    </div>
  )
}

export default ColourTile;