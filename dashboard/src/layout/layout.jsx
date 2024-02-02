import { Box } from "@mui/material";
import Topbar from "../layout/components/topbar";
import Sidebar from "./components/sidebar";


const Layout = ({mode, setMode, children}) => {
  return(
    <Box>
       <Box display={"block"}>
        <Topbar mode={mode} setMode={setMode}/>
        </Box>
        <Box position={"fixed"} display={"flex"} width={"100%"}>
          <Sidebar/>
          {children}
        </Box>
    </Box>
  )
}
export default Layout;