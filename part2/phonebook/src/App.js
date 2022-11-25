import { useState, useEffect } from "react";
import numbersService from "./services/numbers";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");
	const [newNotification, setNewNotification ] = useState(null);
	useEffect(() => {
		numbersService.getAll().then((response) => setPersons(response));
	}, []);

	const addPerson = (event) => {
		event.preventDefault();
		if (newName === "" || newNumber === "") {
			alert("Enter a new name and a new number");
		} else {
			const personRepeated = persons.find(
				(pers) =>
					pers.name.toLowerCase().trim() ===
					newName.toLowerCase().trim()
			);

			if (personRepeated) {
				const personObj = {
					...personRepeated,
					number: newNumber.trim(),
				};
				if (
					window.confirm(
						`${personObj.name} is already added to phonebook, replace the old number with a new one?`
					)
				) {
					numbersService
						.update(personObj.id, personObj)
						.then((response) => {
							setPersons(
								persons.map((p) =>
									p.id !== personObj.id ? p : response
								)
							);
							setNewName("");
							setNewNumber("");
							setNewNotification(
								`Updated ${personObj.name} number`
							)
							setTimeout( () => {
								setNewNotification(null)}, 4000
							)
						});
				}
			} else {
				const personObj = {
					name: newName.trim(),
					number: newNumber.trim(),
				};

				numbersService.create(personObj).then((response) => {
					setPersons(persons.concat(response));
					setNewName("");
					setNewNumber("");
					setNewNotification(
						`Added ${personObj.name} number`
					)
					setTimeout( () => {
						setNewNotification(null)}, 4000
					)
				});
			}
		}
	};

	const numberToShow = !newFilter
		? persons
		: persons.filter((person) =>
				person.name.toLowerCase().includes(newFilter.toLowerCase())
		  );

	const changeName = (event) => setNewName(event.target.value);
	const changeNumber = (event) => setNewNumber(event.target.value);
	const changeFilter = (event) => setNewFilter(event.target.value);

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={newNotification} />
			<Filter newFilter={newFilter} changeFilter={changeFilter} />
			<h3>Add a new</h3>
			<PersonForm
				newName={newName}
				changeName={changeName}
				newNumber={newNumber}
				changeNumber={changeNumber}
				addPerson={addPerson}
			/>
			<h3>Numbers</h3>
			<Numbers
				numbers={numberToShow}
				persons={persons}
				setPersons={setPersons}
			/>
		</div>
	);
};

export default App;
