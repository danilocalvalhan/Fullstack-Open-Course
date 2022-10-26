import { useState } from "react";

const Heading = ({ text }) => <h1> {text} </h1>;
const Button = (props) => <button onClick={props.click}>{props.inside}</button>;
const Statistics = (props) => {
	if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
		return (
			<div>
				<h1> {props.text} </h1>
				<p> No feedback given </p>
			</div>
		);
	} else {
		return (
			<div>
				<h1> {props.text} </h1>
				<StatisticLine
					text={props.buttonValues[0]}
					number={props.good}
				/>
				<StatisticLine
					text={props.buttonValues[1]}
					number={props.neutral}
				/>
				<StatisticLine
					text={props.buttonValues[2]}
					number={props.bad}
				/>
				<StatisticLine
					text={props.buttonValues[3]}
					number={props.sum}
				/>
				<StatisticLine
					text={props.buttonValues[4]}
					number={props.avg}
				/>
				<StatisticLine
					text={props.buttonValues[5]}
					number={props.posPerc}
				/>
			</div>
		);
	}
};

const StatisticLine = (props) => (
	<>
		<p>
			{props.text} {props.number}
		</p>
	</>
);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const text = ["give feedback", "statistics"];
	const buttonValues = [
		"good",
		"neutral",
		"bad",
		"all",
		"average",
		"positive percentage",
	];

	const sum = () => good + neutral + bad;
	const avg = () => (good - bad) / sum();
	const posPerc = () => (100 * good) / sum() + "%";

	return (
		<>
			<Heading text={text[0]} />
			<Button
				click={() => setGood(good + 1)}
				inside={buttonValues[0]}
			/>
			<Button
				click={() => setNeutral(neutral + 1)}
				inside={buttonValues[1]}
			/>
			<Button
				click={() => setBad(bad + 1)}
				inside={buttonValues[2]}
			/>
			<Statistics
				text={text[1]}
				buttonValues={buttonValues}
				good={good}
				neutral={neutral}
				bad={bad}
				sum={sum()}
				avg={avg()}
				posPerc={posPerc()}
			/>
		</>
	);
};

export default App;
