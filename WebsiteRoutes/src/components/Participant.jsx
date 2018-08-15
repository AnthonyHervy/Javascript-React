import React from "react";
import { Card, Icon, Image, Container } from "semantic-ui-react";

const Participant = ({
  pseudo,
  perso,
  kart,
  nbreCourses,
  nbreWins,
  nbreLoses
}) => (
  <Card>
    <Card.Header>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Image avatar src={`/persos/${perso}`} /> {pseudo}{" "}
        <Image avatar src={`/karts/${kart}`} />{" "}
      </Container>
    </Card.Header>
    <Card.Content>
      <Card.Meta>Total : {nbreCourses}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Icon name="winner" />
      {nbreWins}
    </Card.Content>
    <Card.Content extra>
      <Icon name="cancel" />
      {nbreLoses}
    </Card.Content>
  </Card>
);

export default Participant;
