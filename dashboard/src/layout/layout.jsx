import { Box } from "@mui/material";
import Topbar from "../layout/components/topbar";
import Sidebar from "./components/sidebar";


const Layout = ({mode, setMode}) => {
  return(
    <Box>
       <Box display={"block"}>
        <Topbar mode={mode} setMode={setMode}/>
        </Box>
        <Box position={"fixed"}>
          <Sidebar/>
        </Box>
    </Box>
  )
}
export default Layout;