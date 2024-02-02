import Daily from "./DailyLines/daily";
import MyResponsiveLine from "./components/lines";
import { Box, Typography } from "@mui/material";
const Dashboard = ({mode}) => {
  return(
    <Box marginTop={"4rem"} display={"flex"} flexDirection={"column"} width={"86rem"}>
      <Typography paddingLeft={"2rem"} paddingTop={"1rem"} fontSize={"34px"}>
        Dashboard
      </Typography>
      <Box width={"86rem"} height={"3rem"} sx={{backgroundColor:mode? "#2f2f2f": "#1976d2"}} marginLeft={"2rem"} marginTop={"1rem"} paddingTop={"0.7rem"} borderRadius={"8px"}>
        <Typography textAlign="center">Usage</Typography>
      </Box>
      <MyResponsiveLine mode={mode}/>
      <Box width={"86rem"} height={"3rem"} sx={{backgroundColor:mode? "#2f2f2f": "#1976d2"}} marginLeft={"2rem"} marginTop={"1rem"} paddingTop={"0.7rem"} borderRadius={"8px"}>
        <Typography textAlign="center">Usage</Typography>
      </Box>
      <Daily/>
    </Box>
  )
}
export default Dashboard;