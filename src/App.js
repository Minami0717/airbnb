import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          {/* <Route path='post-write' element={<PostWritePage />} />
          <Route path='post/:postId' element={<PostViewPage />} />
          <Route path='post-modify/:postId' element={<PostModifyPage />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
