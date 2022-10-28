const Total = ({parts}) => {
	const exercises = parts.map( (obj) => obj.exercises);
	const sumOfExercises = exercises.reduce((a, b) => a + b, 0);
	return (
		<>
			<h3>total of {sumOfExercises} exercises </h3>
		</>
	)
}


export default Total;
