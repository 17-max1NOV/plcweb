import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baselightTheme } from "./theme/DefaultColors";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/index.css";
import "./assets/css/cms.css";
function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <CssBaseline />
      {routing}

    </ThemeProvider>
  );
}

export default App;
