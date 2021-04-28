/**
 *
 * Notification
 *
 */
import React from 'react';

// InterFaces
import { Container } from 'react-bootstrap';
import { INotification } from './Notification';

// styles
import styles from './styles/Notification.module.scss';

// assets
import Notific from './svg/notification.svg';

const Notification: React.FunctionComponent<INotification.IProps> = ({ children, status }) => (
  <div className={`${styles[`notif-${status}`]} wow fadeInLeft`}>
    <Container>
      <div className="d-flex align-items-center">
        <span>
          <Notific />
        </span>
        {children}
      </div>
    </Container>
  </div>
);

export default Notification;
