import propTypes from 'prop-types';
import { FeedbackBox, FeedbackTitle } from './Section.styled';

const Section = ({title, children}) => {
    return (
      <FeedbackBox>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
      </FeedbackBox>
    );
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node
}


export default Section;