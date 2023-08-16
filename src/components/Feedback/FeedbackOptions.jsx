import PropTypes from 'prop-types';
import css from './Feedback.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} name ={option} className={css.buttons} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
}