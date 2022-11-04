import numbersService from "../services/numbers";

const Numbers = ({ numbers, persons, setPersons }) => {
	return numbers.map((person) => (
		<div key={person.id}>
			<p style={{ display: "inline" }}>
				{person.name} {person.number}{" "}
			</p>{" "}
			<button
				type="button"
				onClick={() => {
					if (window.confirm(`Delete ${person.name} ?`)) {
						numbersService
							.remove(person.id)
							.then(() =>
								setPersons(
									persons.filter((p) => p.id !== person.id)
								)
							);
					}
				}}
			>
				{" "}
				delete{" "}
			</button>
		</div>
	));
};

export default Numbers;
