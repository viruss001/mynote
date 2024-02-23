
import Header from './component/Header'
import{Outlet} from 'react-router-dom'
import './App.css';
function App() {
  document.querySelector("title").innerHTML="Notes"
  return (
    <div className='container dark'>
      <div className='app'>

    <Header/>
    <Outlet/>
      </div>
    </div>
  )
}

export default App
