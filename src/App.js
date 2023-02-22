import logo from "./logo.svg";
import "./App.css";

import News from "./components/News/News";
import { dataNews } from "./serverData/dataNews/dataNews";

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
				<News
					header='Nowy News'
					text='dasdasdada sdas dasdasda dsdasdasdasdasdas'
				/>
        <News
					header='Nowy News'
					text='dasdasdada sdas dasdasda dasdasdas'
				/>
        <News
					header='Nowy News'
					text='dasdasdada sdas dasdasda dasdasdasdas'
				/>
			</div>
		</div>
	);
}

export default App;
