//
import React, {useState} from 'react';
import './App.sass';

function App() {
	const values = [5, -5];
	const [count, changeCount] = useState(0);
	return (
		<div className="App">
			<div className="uk-card uk-card-default uk-card-body">
				<h3 className="uk-card-title">Counter</h3>
				<div>{count}</div>
				<button className="uk-button uk-button-secondary"
						  onClick={() => changeCount(
							  count + +values.filter(item => item > 0)
						  )}>+
				</button>
				<button className="uk-button uk-button-primary"
						  onClick={() => changeCount(
							  count + +values.filter(item => item < 0)
						  )}>-
				</button>
			</div>
		</div>
	)
}


export default App;




