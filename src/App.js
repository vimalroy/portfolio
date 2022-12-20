import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

	return (

		<div className="page-scroll">
			<div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
				<div id="main" className="site-main">

					<Router>
						<Header />
						<div id="main-content" className="single-page-content">
							<div id="primary" className="content-area">
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/resume" element={<Resume />} />
									<Route path="/portfolio" element={<Portfolio />} />
									<Route path="/contact" element={<Contact />} />
								</Routes>
							</div>
						</div>
						<Footer />
					</Router>

				</div>

			</div>
		</div>

	)
}

export default App;
