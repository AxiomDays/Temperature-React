import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import CentralBox from "./Components/CentralBox";

function App() {
	const [isAbout, setIsAbout] = useState(false);

	const swap = () => {
		setIsAbout(!isAbout);
	};

	return (
		<>
			<Header switchToAbout={swap} />
			<CentralBox isAbout={isAbout} />
		</>
	);
}

export default App;
