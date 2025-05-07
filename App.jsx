import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.title}</h1>
}

const StatisticLine = (props) => {
  return (
    <div>{props.text}: {props.counter}</div>
  )
}

const StatisticsLine = (props) => {
  return (  
    <tr>
        <td>{props.text}</td>
        <td>{props.counter}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
      <StatisticsLine text="good" counter={good} />
      <StatisticsLine text="neutral" counter={neutral} />
      <StatisticsLine text="bad" counter={bad} />
      <StatisticsLine text="total" counter={total} />
      <StatisticsLine text="average" counter={average} />
      <StatisticsLine text="positive" counter={positivePercentage + ' %'} />
      </tbody>
    </table>
  )

  
}

const App = () => {
  // save clicks of each button to its own state
  const title = {
    top: 'give feedback', middle: 'Statistics'}


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title={title.top} />

      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      
      <Header title={title.middle} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App