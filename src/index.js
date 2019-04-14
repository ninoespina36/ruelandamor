import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';
import { BrowserRouter,Route,Link } from 'react-router-dom';

//Components
import About from './components/about';
import Party from './components/party';

import './css/custom.css';

const App = () => {
    return (
      <div>

      	<Cover />

      	<BrowserRouter>

      	<nav className="nav navbar navbar-expand-xl navbar-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  	<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
				  <li><Link to="/">About</Link></li>
				  <li><Link to="/details">Details</Link></li>
				  <li><Link to="/program">Program</Link></li>
				  <li><Link to="/party">Party</Link></li>
				  <li><Link to="/attire" className="last-item">Attire</Link></li>
				</ul>			
			</div>
		</nav>

		<div className="wrapper">
			<div className="container">
				<Route path="/" exact component={About}></Route>
				<Route path="/party" component={Party}></Route>
			</div>
		</div>

		</BrowserRouter>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));