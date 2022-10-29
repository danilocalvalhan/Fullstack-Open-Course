import { useState } from "react";

const Numbers = ({ numbers }) => {
	return numbers.map((person) => (
		<p key={person.name}>
			{person.name} {person.number}
		</p>
	));
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		if (newName === "" || newNumber === "") {
			alert("Enter a new name and a new number");
		} else {
			const newPersonAlreadyInPhonebook = persons
				.map((person) => person.name)
				.includes(newName);

			if (newPersonAlreadyInPhonebook) {
				alert(
					`${newName} is already added to phonebook`
				);
			} else {
				const personObj = {
					name: newName,
					number: newNumber,
				};
				setPersons(persons.concat(personObj));
				setNewName("");
				setNewNumber("");
			}
		}
	};

	const changeName = (event) => setNewName(event.target.value);
	const changeNumber = (event) => setNewNumber(event.target.value);

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name:{" "}
					<input
						type="text"
						value={newName}
						onChange={changeName}
					/>
				</div>
				<div>
					number:{" "}
					<input
						type="tel"
						value={newNumber}
						onChange={changeNumber}
					/>
				</div>
				<div>
					<button
						type="submit"
						onClick={addPerson}
					>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<Numbers numbers={persons} />
		</div>
	);
};

export default App;
