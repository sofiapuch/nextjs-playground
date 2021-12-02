import ColourTile from "../../components/UI/molecules/ColourTile";

import styles from './palette.module.css';

const colourPalettes = [
  {
    title: "Core Brand",
    colours: [
      { name: "Violet 500", hex: "#680075", varName: "$violet-500" },
      { name: "Green 400", hex: "#04FFC8", varName: "$green-400" },
    ]
  },
  {
    title: "Background",
    colours: [
      { name: "Grey Background", hex: "#E5E5E5", varName: "$grey-backbround" },
    ]
  },
  {
    title: "Typography",
    colours: [
      { name: "Grey 400", hex: "#232323", varName: "$grey-400" },
      { name: "Light Grey 100", hex: "#767676", varName: "$light-grey-100" },
    ]
  }
]

const Palette = (props) => {
  const {title, colours} = props.palette;
  return (
    <section className="palette">
      <h2>{title}</h2>
      <div className={styles.colours}>
        {colours.map((colour) => {
          return (
            <ColourTile
              key={colour.varName}
              colour={colour}
            />
          )
        })}
      </div>
    </section>
  )
}

const Component = () => {
  return (
    <>
      <h1>Colour Palettes</h1>
      {colourPalettes.map((palette, index) => {
        return (
          <Palette
            key={`${palette.title}-${index}`}
            palette={palette}
          />
        )
      })}
    </>
  )
}

export default {
  title: "Style Guide",
  component: Component,
};

export const Colours = () => <Component />