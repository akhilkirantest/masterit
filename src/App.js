import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Navbar from './Component/Navbar.js';

function App() {
  return (
<Router>
		<Navbar/>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
		</Routes>
		
	</Router>
  );
}

export default App;
