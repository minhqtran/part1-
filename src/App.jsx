import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistic = ({ text, value }) => (
  <table>
    <tbody>
      <StatisticLine text={text} value={value} />
    </tbody>
  </table>
);

const Statistics = ({ good, bad, neutral, average, all }) => {
  if (all === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feed back Given</p>
      </>
    );
  }

  return (
    <>
      <h2>Statistics</h2>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="Total" value={all} />
      <Statistic text="Average" value={average / all} />
      <Statistic text="Positive" value={good / all} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    console.log("good selected");
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };
  const handleNeutral = () => {
    console.log("neutral selected");
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    console.log("bad selected");
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
      />
    </div>
  );
};

export default App;
