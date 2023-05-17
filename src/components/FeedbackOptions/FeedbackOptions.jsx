import propTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ButtonGroup size="lg">
      {options.map(({ feedback, variant }) => (
        <Button key = { feedback}
          id={feedback}
          onClick={() => onLeaveFeedback(feedback)}
          variant={variant}
          size="sm"
        >
          {feedback}
        </Button>
      ))}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      feedback: propTypes.string.isRequired,
      variant: propTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions; 