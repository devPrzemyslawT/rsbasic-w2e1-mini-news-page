import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1> Breaking React News </h1>
				<img src={logo} className='App-logo' alt='logo' />
			</div>
			<div className='App-body'>
				<h2> Always in the right place at the right time! </h2>
				<h3> www.reactnews.reactnews </h3>
			</div>
		</div>
	);
}

export default App;
