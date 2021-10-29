import axios from 'axios';
import './App.css';
const fetchData = () => {
	axios
		.get('/api')
		.then((res) => console.log('success'))
		.catch((err) => console.error(err));
};
function App() {
	return (
		<div className='App'>
			<button onClick={fetchData}>Fetch</button>
		</div>
	);
}

export default App;
