const Part = (probs)=> {
	const {name, exercises, id} = probs.piece;
	return (
		<>
			<p> {name} {exercises} </p>
		</>
		)
}

export default Part;
