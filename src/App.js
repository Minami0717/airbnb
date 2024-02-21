import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './component/page/MainPage';
import styled from 'styled-components';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>airbnb</MainTitleText>
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
