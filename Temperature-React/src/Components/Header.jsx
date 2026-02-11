import { useState } from "react";
import "./Header.css";

function Header({switchToAbout}) {
	

	return (
		<>
			<div className="header">
				<span className="temp overcame">TEMPERATURE CONVERTER</span>
				<span className="temp overcame about" onClick={switchToAbout}>ABOUT ICON</span>
			</div>
		</>
	);
}

export default Header;
