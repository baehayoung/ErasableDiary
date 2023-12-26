import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>

          <Routes>
            <Route path="/" element={<div>main</div>}></Route>
            <Route path="/write/*" element={<div>write</div>}></Route>
            <Route path="/read/*" element={<div>read</div>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <div>contents</div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
