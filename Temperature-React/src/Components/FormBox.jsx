import { useState } from "react";
import "./FormBox.css";

function FormBox({ val, func, OptionFunc, isInput }) {
	return (
		<>
			<div className="formbox col-8 col-sm-4 row">
				<form action="" className="forminner row">
					<input
						className="input-val"
						type="number"
                        name="value"
						onChange={(e) => func(e.target.value)}
						value={val}
						placeholder="Input"
					></input>

					<select
						name="selectedTemp"
						onChange={(e) => OptionFunc(e.target.value)}
                        className="input-select"
					>
						<option value="Celsius">CELSIUS</option>
						<option value="Kelvin">KELVIN</option>
						<option value="Fahrenheit">FAHRENHEIT</option>
					</select>
				</form>
			</div>
		</>
	);
}

export default FormBox;
