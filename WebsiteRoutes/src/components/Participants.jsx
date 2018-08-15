import React from "react";
import { Card } from "semantic-ui-react";

import Participant from "./Participant";
import Filters from "./Filters";

const ParticipantList = ({ data }) => (
  <div>
    <Filters />
    <Card.Group itemsPerRow={6}>
      {data.map(p => <Participant key={p.id} {...p} />)}
    </Card.Group>
  </div>
);

export default ParticipantList;
