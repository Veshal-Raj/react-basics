import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import IncrementANDdecrement from './Components/IncrementANDdecrement.jsx'
import Counter from './Components/Counter.jsx'
import UsernameForm from './Components/UsernameForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <IncrementANDdecrement />
    <Counter /> 
    <UsernameForm />
  </React.StrictMode>,
)
