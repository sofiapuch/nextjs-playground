import { Col, Container, Row } from "react-grid-system";

import CardTout from "../../molecules/cards/CardTout";

const cards = [
  {
    modifier: "primary",
    title: "Auto finden",
    description: "Ob Neuwagen oder Gebrauchtwagen, konfigurierbar oder ready to go - hier findest du dein neues Auto.",
    link: {}
  },
  {
    title: "ALLES.AUTO Garage",
    description: "Registriere dich ganz einfach mit deinem aktuellen Fahrzeug für die Garage und sichere dir unzählige Vorteile.",
    link: {}
  },
  {
    modifier: "secondary",
    title: "Ersatzteile & Zubehör",
    description: "Egal was du suchst, hier findest du es! ",
    link: {}
  },
  {
    modifier: "secondary",
    title: "Auto verkaufen",
    description: "Nutze den Preis-Check und finde heraus, wie viel du noch für deinen Alten bekommst.",
    link: {}
  },
  {
    modifier: "dark",
    title: "Smarte Suche",
    description: "Wir helfen dir, das perfekte Auto zu finden. Hier gehts zur Online-Beratung.",
    link: {}
  },
  {
    title: "Werkstatttermin buchen",
    description: "Finde eine Werkstatt in deiner Nähe und bekomme Hilfe immer genau da, wo du sie brauchst.",
    link: {}
  }
]

const CardToutList = () => {
  return (
    <Container fluid>
      <Row nogutter>
        {cards.map((card, index) => {
          return (
            <Col sm={6} md={4} key={`${card.title}-${index}`}>
              <CardTout card={card}/>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CardToutList;