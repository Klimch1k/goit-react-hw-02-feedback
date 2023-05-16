import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {
  FeedbackBox,
  FeedbackTitle,
  FeedbackListBox,
  FeedbackListTitle,
} from './Feedback.styled';
import ListGroup from 'react-bootstrap/ListGroup';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { id } }) => {
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <FeedbackBox>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <ButtonGroup size="lg">
          <Button
            id="good"
            onClick={this.handleClick}
            variant="success"
            size="sm"
          >
            Good
          </Button>
          <Button
            id="neutral"
            onClick={this.handleClick}
            variant="secondary"
            size="sm"
          >
            Neutral
          </Button>
          <Button
            id="bad"
            onClick={this.handleClick}
            variant="danger"
            size="sm"
          >
            Bad
          </Button>
        </ButtonGroup>
        <FeedbackListBox>
          <FeedbackListTitle>Statistics</FeedbackListTitle>
          <ListGroup>
            <ListGroup.Item variant="success">
              Good: {this.state.good}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Neutral: {this.state.neutral}
            </ListGroup.Item>
            <ListGroup.Item variant="danger">
              Bad: {this.state.bad}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              Total: {totalFeedback}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              Positive feedback: {positiveFeedbackPercentage}%
            </ListGroup.Item>
          </ListGroup>
        </FeedbackListBox>
      </FeedbackBox>
    );
  }
}

export default Feedback;
