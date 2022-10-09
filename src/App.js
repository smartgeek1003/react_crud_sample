import logo from './logo.svg';
import './App.css';
import { useRoutes, Router, BrowserRouter } from 'react-router-dom'
import routes from './routes';

function App() {
  const content = useRoutes(routes)
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
