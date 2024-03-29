import { useMemo, useState, useEffect } from "react";
import { createContext } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Routes, Route} from "react-router-dom";
import Dashboard from "./dashboard/page";
import Layout from "./layout/layout"

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  }), [mode]);

  useEffect(() => {
    setMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Layout mode={mode} setMode={setMode}><Dashboard mode={mode}/></Layout>}/>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  )
}
export default App

