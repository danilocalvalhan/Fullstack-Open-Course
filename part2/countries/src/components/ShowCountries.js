const ShowCountry = (props) => {
	const singleCountry = props.show;
	if (singleCountry == undefined) {
		return <> </>;
	} else {
		const lang = Object.values(singleCountry.languages);

		return (
			<>
				<h2> {singleCountry.name.common} </h2>
				<p> Capital {singleCountry.capital} </p>
				<p> Area {singleCountry.area} </p>
				<h3> Languages </h3>
				<ul>
					{lang.map((singleLang) => (
						<li key={singleLang}> {singleLang} </li>
					))}
				</ul>
				<img
					src={singleCountry.flags.png}
					alt={`Flag of the ${singleCountry.name.common}`}
				/>
			</>
		);
	}
};

const ShowCountries = (props) => {
	const { show, search, changeInput } = props;
	if (search === "") {
		return <p> Type above the name of the country</p>;
	} else {
		const regex = new RegExp(search, "gi");
		const showAll = show.filter(
			(country) => country.name.common.search(regex) > -1
		);
		if (showAll.length > 10) {
			return <p>Too many matches, specify another filter</p>;
		} else if (showAll.length > 1) {
			return showAll.map((country) => (
				<div key={country.name.common}>
					<br />
					<p style={{ display: "inline" }}>{country.name.common} </p>
					<button
						type="button"
						onClick={() => changeInput(country.name.common)}
					>
						show
					</button>
				</div>
			));
		} else {
			return <ShowCountry show={showAll[0]} />;
		}
	}
};

export default ShowCountries;
