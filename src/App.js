
import './style/App.css';
import Header from './components/Header.jsx';
import { BrowserRouter} from 'react-router-dom';
import { RoutesApp } from './routes/RoutesApp.jsx';


function App() {
  return (

      <BrowserRouter>
      <div className='header'>
        <Header></Header>
      </div>
      
        <div className="App">
          <RoutesApp /> 
        </div>
      </BrowserRouter>
  );
}

export default App;

