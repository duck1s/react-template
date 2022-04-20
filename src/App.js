import Information from "./components/Information";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/components/App.scss";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Information />
			<Footer />
		</div>
	);
};

export default App;
