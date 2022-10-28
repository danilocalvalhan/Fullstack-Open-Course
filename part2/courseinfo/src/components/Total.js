const Total = ({parts}) => {
	const sumOfExercises = parts.reduce((a, b) => a + b.exercises, 0);
	return (
		<>
			<h3>total of {sumOfExercises} exercises </h3>
		</>
	)
}


export default Total;
