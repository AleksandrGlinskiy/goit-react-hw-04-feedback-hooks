import { useState } from 'react';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

/* handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
// handleClickGood = () => {
      //   this.setState(prevState => {
      //     return { good: prevState.good + 1 };
      //   });
      // };
    
      // handleClickNeutral = () => {
      //   this.setState(prevState => {
      //     return { neutral: prevState.neutral + 1 };
      //   });
      // };
    
      // handleClickBad = () => {
      //   this.setState(prevState => {
      //     return { bad: prevState.bad + 1 };
      //   });
      // }; 

  handleClickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  }; */

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return Math.round((this.state.good * 100) / total);
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         {!total ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         )}
//       </div>
//     );
//   }
// }
