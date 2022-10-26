import { useState } from "react";

const Heading = ({ text }) => <h1> {text} </h1>;
const Button = (props) => <button onClick={props.click}>{props.inside}</button>;

const Stats = (props) => (
	<p>
		{props.text} {props.number}
	</p>
);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const text = ["give feedback", "statistics"];
	const buttonValues = ["good", "neutral", "bad"];

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
			<Heading text={text[1]} />
			<Stats text={buttonValues[0]} number={good} />
			<Stats text={buttonValues[1]} number={neutral} />
			<Stats text={buttonValues[2]} number={bad} />
		</>
	);
};

export default App;
