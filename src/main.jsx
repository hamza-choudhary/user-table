import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import USER from './context/user.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<USER>
			<App />
		</USER>
	</React.StrictMode>
)
