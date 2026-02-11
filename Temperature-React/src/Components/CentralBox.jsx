import { useState } from "react";
import "./CentralBox.css";
import FormBox from "./FormBox";

function CentralBox({ isAbout }) {
	const [value, setValue] = useState();
	const [retValue, setRetValue] = useState();
	const [TempOption, setTempOption] = useState("Celsius");
	const [retOption, setRetOption] = useState("Celsius");

	function setValFunc(val) {
		setValue(val);
	}

	const retValFunc = (val) => {
		setRetValue(val);
	};

	const setTemp = (val) => {
		setTempOption(val);
	};

	const retTemp = (val) => {
		setRetOption(val);
	};

	const convert = () => {
		let storageVar = value;
		if (TempOption == retOption) {
			return value;
		}

		if (TempOption == "Kelvin") {
			storageVar -= 273;
			console.log("Result ", storageVar);
		}

		switch (retOption) {
			case "Celsius":
				if (value == storageVar + 273) {
					return parseInt(storageVar);
				} else {
					return (storageVar - 32) * 0.5555555556;
				}
			case "Fahrenheit":
				return storageVar * 1.8 + 32;
			case "Kelvin":
				if (TempOption == "Fahrenheit") {
					storageVar = (storageVar - 32) * 0.5555555556;
				}
				return parseInt(storageVar) + 273;
		}
	};

	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					{!isAbout ? (
						<div className="mainbox col-10 col-md-10 col-lg-8 row">
							<FormBox val={value} func={setValFunc} OptionFunc={setTemp} isInput={true}/>

							<button
								type="button"
								class="btn btn-light col-4 col-md-1"
								onClick={() => {
									setRetValue(convert());
								}}
							>
								<img
									src="src/assets/two-clockwise-circular-rotating-arrows-circle.png"
									alt=""
									srcset=""
									className="rot-img"
								/>
							</button>

							<FormBox val={retValue} func={retValFunc} OptionFunc={retTemp} isInput={false}/>
						</div>
					) : (
						<div className="mainbox col-10 col-md-10 col-lg-8 row">
							<div className="about-text">
								THIS IS THE ABOUT PAGE FOR THIS TEMPERATURE CONVERTER SITE. A
								QUICK PAGE THAT TOOK 1ish DAYS. YOU CAN VIEW MORE OF MY PROJECTS
								AT <a href="https://github.com/AxiomDays">MY GITHUB</a> OR VISIT
								MY PERSONAL VANITY WEBSITE AT{" "}
								<a href="https://ravennest.neocities.org/" id="raven">Raven's Nest</a>.
								<br></br>
								<br></br>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default CentralBox;
