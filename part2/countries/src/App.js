import { useState, useEffect } from "react";
import axios from "axios";
import ShowCountries from "./components/ShowCountries";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [newInput, setNewInput] = useState("");

	const handleInput = (event) => {
		setNewInput(event.target.value);
	};

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	return (
		<div>
			find countries <input onChange={handleInput} />
			<ShowCountries
				show={countries}
				search={newInput}
				changeInput={setNewInput}
			/>
		</div>
	);
};

export default App;
