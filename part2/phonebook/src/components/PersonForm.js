const PersonForm = (props) => {
	const { newName, changeName, newNumber, changeNumber, addPerson } =
		props;
	return (
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
				<button type="submit" onClick={addPerson}>
					add
				</button>
			</div>
		</form>
	);
};

export default PersonForm;
