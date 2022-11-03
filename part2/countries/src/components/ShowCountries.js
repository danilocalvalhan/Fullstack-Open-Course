import { useState, useEffect } from "react";
import axios from "axios";

const ShowWeather = ({ name, weather }) => {
	if (weather !== undefined) {
		return (
			<div>
				<h2> {`Weather in ${name}`} </h2>
				<p> {`Temperature ${weather.main.temp} Celsius`}</p>
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].description}
				/>
				<p> {`Wind ${weather.wind.speed} m/s`} </p>
			</div>
		);
	}
};

const ShowCountry = (props) => {
	const singleCountry = props.show;
	const lang = Object.values(singleCountry.languages);
	const [countryLat, countryLon] = singleCountry.capitalInfo.latlng;
	const [countryWeather, setCountryWeather] = useState();
	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLon}&appid=${props.api}&units=metric`
			)
			.then((response) => {
				setCountryWeather(response.data);
			});
	}, []);

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
			<ShowWeather
				name={singleCountry.name.common}
				weather={countryWeather}
			/>
		</>
	);
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
		} else if (showAll[0] !== undefined) {
			return <ShowCountry show={showAll[0]} api={props.api} />;
		} else {
			return <> </>;
		}
	}
};

export default ShowCountries;
