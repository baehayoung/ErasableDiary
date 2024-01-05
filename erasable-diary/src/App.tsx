import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import MainPage from './views/MainPage';
import WritePage from './views/WritePage';
import ReadPage from './views/ReadPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/write/*" element={<WritePage />}></Route>
            <Route path="/read/*" element={<ReadPage />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
