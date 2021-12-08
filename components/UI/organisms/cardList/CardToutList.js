import { Col, Container, Row } from "react-grid-system";

import CardTout from "../../molecules/cards/CardTout";

const cards = [
  {
    modifier: "primary",
    title: "Auto finden",
    description: "Ob Neuwagen oder Gebrauchtwagen, konfigurierbar oder ready to go - hier findest du dein neues Auto.",
    link: {
      label: "",
      url: "",
      icon: ""
    }
  },
  {
    modifier: "light",
    title: "ALLES.AUTO Garage",
    description: "Registriere dich ganz einfach mit deinem aktuellen Fahrzeug für die Garage und sichere dir unzählige Vorteile.",
    link: {
      label: "",
      url: "",
      icon: ""
    }
  },
  {
    modifier: "secondary",
    title: "Auto verkaufen",
    description: "Nutze den Preis-Check und finde heraus, wie viel du noch für deinen Alten bekommst.",
    link: {
      label: "",
      url: "",
      icon: ""
    }
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