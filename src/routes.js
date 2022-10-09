import Nav from 'components/Nav';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StandardPage from 'components/StandardPage';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<StandardPage />}>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
