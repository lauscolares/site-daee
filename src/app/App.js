import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../config/theme';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          children={[
            <Route path="/" element={<Home />} />
          ]}
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;