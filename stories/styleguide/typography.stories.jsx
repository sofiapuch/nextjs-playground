import { Container, Row, Col } from 'react-grid-system';

const typeStyles = [
  {
    name: "Heading 01",
    modifier: "heading01",
    text: "Lorem ipsum",
  },
  {
    name: "Heading 02",
    modifier: "heading02",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Caption",
    modifier: "p--caption",
    text: "I am a caption."
  },
  {
    name: "Body",
    modifier: "p--body",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  }
]

const TypeStyle = (props) => {
  const { name, modifier, text } = props.typoStyle

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>{name}</h2>
        </Col>
        <Col md={6}>
          <p className={modifier}>{text}</p>
        </Col>
      </Row>
    </Container>
  )
}

const Component = () => {
  return (
    <>
      <Container>
        <h1>Typography</h1>
      </Container>
      {typeStyles.map((style, index) => {
        return (
          <TypeStyle key={`${style.name}-${index}`} typoStyle={style}/>
        )
      })}
    </>
  )
}

export default {
  title: "Style Guide",
  component: Component,
};

export const Typography = () => <Component />