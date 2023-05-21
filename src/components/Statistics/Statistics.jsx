import { FeedbackListBox } from './Statistics.styled';
import ListGroup from 'react-bootstrap/ListGroup';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <FeedbackListBox>
      <ListGroup>
        <ListGroup.Item variant="success">Good: {good}</ListGroup.Item>
        <ListGroup.Item variant="secondary">Neutral: {neutral}</ListGroup.Item>
        <ListGroup.Item variant="danger">Bad: {bad}</ListGroup.Item>
        <ListGroup.Item variant="primary">
          Total: {total}
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          Positive feedback: {positivePercentage}%
        </ListGroup.Item>
      </ListGroup>
    </FeedbackListBox>
  );
};


Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
}


export default Statistics;