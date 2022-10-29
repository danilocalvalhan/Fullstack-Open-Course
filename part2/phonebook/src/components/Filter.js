const Filter = (props) => {
	const { newFilter, changeFilter } = props;
	return (
		<div>
			{" "}
			filter show with:{" "}
			<input
				type="text"
				value={newFilter}
				onChange={changeFilter}
			/>
		</div>
	);
};

export default Filter;
