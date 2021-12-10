import styles from './colourTile.module.scss';

const ColourTile = (props) => {
  const { name, hex, varName } = props.colour;

  console.log("styles: ", styles);

  return (
    <div className={styles.tile}>
      <div className={styles.colourBox} style={{backgroundColor: hex}}></div>
      <div className={styles.contentWrapper}>
        <p>{name}</p>
        <p>{hex}</p>
        <p>{varName}</p>
      </div>
    </div>
  )
}

export default ColourTile;