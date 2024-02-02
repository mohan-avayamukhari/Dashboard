import { Box } from "@mui/material";
import Line from "../components/line";

const Daily = () => {
  return(
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} flexDirection={"column"}>
      <Line pData={[2400, 1398, 9800, 3908, 4800, 3800]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      <Line pData={[5732, 2489, 6971, 1356, 8902, 4123]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      <Line pData={[3456, 7890, 2345, 6789, 9012, 1234]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
      <Line pData={[8743, 1234, 5678, 9876, 4321, 8765]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      <Line pData={[6210, 3421, 5187, 7654, 2198, 9345]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      <Line pData={[5432, 8765, 1234, 9876, 5678, 4321]} xLabels={['Page A','Page B','Page C','Page D','Page E','Page F',]}/>
      </Box>
    </Box>
  )
}
export default Daily;