/* eslint-disable object-curly-newline */
/**
 *
 * DetailOccordion
 *
 */
import React, { useState } from 'react';

// InterFaces
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import { cardLists } from '@data/detail/data';
import { IDetailOccordion } from './DetailOccordion';

// styles
import styles from './styles/DetailOccordion.module.scss';

// static data

export const DetailOccordion: React.FunctionComponent<IDetailOccordion.IProps> = () => {
  const [selected, setSelected] = useState(undefined);
  return (
    <section>
      <Container fluid="lg" className={`px-lg-0  ${styles['section-tab']}`}>
        <Accordion defaultActiveKey="0">
          {cardLists.map((cardList, index) => (
            <Card bsPrefix={styles['feature-card']} key={index + 1}>
              <Card.Header bsPrefix={styles['card-header']} key={index}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  key={index}
                  eventKey={`${index + 1}`}
                  onClick={() => (selected === index ? setSelected(undefined) : setSelected(index))}>
                  <div className={selected === index ? styles['arrow-open'] : styles['arrow-close']} />
                  {cardList.cardHeader}
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey={`${index + 1}`} key={index + 1}>
                <Card.Body style={{ padding: 0 }}>
                  <cardList.cardToggle />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default DetailOccordion;
