import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../config/theme';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';

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
      </Routes>
    </ThemeProvider>
  );
}

export default App;