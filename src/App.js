import './App.css';
import Main from './routers/main';
import Header from './routers/header';
import Sent from './routers/sent';
import Plus from './routers/plus';
import Like from './routers/like';
import Random from './routers/random';
import NotFound from './routers/NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sent/*" element={<Sent />}></Route>
          <Route path="/plus/*" element={<Plus />}></Route>
          <Route path="/random/*" element={<Random />}></Route>
          <Route path="/like/*" element={<Like />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
