import { useState, useEffect } from "react";
import axios from 'axios';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

	useEffect( () => {
		axios
			.get('http://localhost:3001/persons')
			.then( response => setPersons(response.data))
	}, [] )
	
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
					id: persons.length + 1,
				};
				setPersons(persons.concat(personObj));
				setNewName("");
				setNewNumber("");
			}
		}
	};

	const numberToShow = !newFilter
		? persons
		: persons.filter((person) =>
				person.name
					.toLowerCase()
					.includes(newFilter.toLowerCase())
		  );

	const changeName = (event) => setNewName(event.target.value);
	const changeNumber = (event) => setNewNumber(event.target.value);
	const changeFilter = (event) => setNewFilter(event.target.value);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				newFilter={newFilter}
				changeFilter={changeFilter}
			/>
			<h3>Add a new</h3>
			<PersonForm
				newName={newName}
				changeName={changeName}
				newNumber={newNumber}
				changeNumber={changeNumber}
				addPerson={addPerson}
			/>
			<h3>Numbers</h3>
			<Numbers numbers={numberToShow} />
		</div>
	);
};

export default App;
