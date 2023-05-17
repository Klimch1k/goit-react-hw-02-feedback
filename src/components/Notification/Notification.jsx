import propTypes from 'prop-types';
import { NotificationTitle } from './Notification.styled';

const Notification = ({ notification }) => { 
    return <NotificationTitle>{notification}</NotificationTitle>;
}

Notification.propTypes = {
    notification: propTypes.string.isRequired
}

export default Notification;