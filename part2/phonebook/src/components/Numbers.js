const Numbers = ({ numbers }) => {
	return numbers.map((person) => (
		<p key={person.id}>
			{person.name} {person.number}
		</p>
	));
};

export default Numbers;
