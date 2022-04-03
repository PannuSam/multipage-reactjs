
import Nav from './component/Header';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';

function App() {
return (
	<Router basename={process.env.PUBLIC_URL}>
	<Nav/>
	<Routes>
		<Route  path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/gallery' element={<Gallery/>} />
	</Routes>
	</Router>
);
}

export default App;

