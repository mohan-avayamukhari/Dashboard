import {ResponsiveLine} from "@nivo/line"
import { Box } from "@mui/material"

const MyResponsiveLine = ({mode}) => (
  <Box width={"100%"} height={"20rem"} paddingLeft={"4rem"}>
    <ResponsiveLine
        data={[
          {
            "id": "japan",
            "color": "hsl(351, 70%, 50%)",
            "data": [
              {
                "x": "Jan",
                "y": 267
              },
              {
                "x": "feb",
                "y": 196
              },
              {
                "x": "mar",
                "y": 1
              },
              {
                "x": "apr",
                "y": 79
              },
              {
                "x": "may",
                "y": 89
              },
              {
                "x": "jun",
                "y": 265
              },
              {
                "x": "jul",
                "y": 278
              },
              {
                "x": "aug",
                "y": 11
              },
              {
                "x": "sep",
                "y": 29
              },
              {
                "x": "oct",
                "y": 172
              },
              {
                "x": "nov",
                "y": 288
              },
              {
                "x": "dec",
                "y": 205
              }
            ]
          },
          {
            "id": "france",
            "color": "hsl(154, 70%, 50%)",
            "data": [
              {
                "x": "Jan",
                "y": 86
              },
              {
                "x": "feb",
                "y": 59
              },
              {
                "x": "mar",
                "y": 234
              },
              {
                "x": "apr",
                "y": 235
              },
              {
                "x": "may",
                "y": 8
              },
              {
                "x": "jun",
                "y": 110
              },
              {
                "x": "jul",
                "y": 26
              },
              {
                "x": "aug",
                "y": 246
              },
              {
                "x": "sep",
                "y": 0
              },
              {
                "x": "oct",
                "y": 155
              },
              {
                "x": "nov",
                "y": 163
              },
              {
                "x": "dec",
                "y": 113
              }
            ]
          },
          {
            "id": "us",
            "color": "hsl(245, 70%, 50%)",
            "data": [
              {
                "x": "Jan",
                "y": 203
              },
              {
                "x": "feb",
                "y": 258
              },
              {
                "x": "mar",
                "y": 263
              },
              {
                "x": "apr",
                "y": 268
              },
              {
                "x": "may",
                "y": 70
              },
              {
                "x": "jun",
                "y": 208
              },
              {
                "x": "jul",
                "y": 47
              },
              {
                "x": "aug",
                "y": 221
              },
              {
                "x": "sep",
                "y": 1
              },
              {
                "x": "oct",
                "y": 145
              },
              {
                "x": "nov",
                "y": 120
              },
              {
                "x": "dec",
                "y": 211
              }
            ]
          },
          {
            "id": "germany",
            "color": "hsl(323, 70%, 50%)",
            "data": [
              {
                "x": "Jan",
                "y": 104
              },
              {
                "x": "feb",
                "y": 273
              },
              {
                "x": "mar",
                "y": 245
              },
              {
                "x": "apr",
                "y": 212
              },
              {
                "x": "may",
                "y": 89
              },
              {
                "x": "jun",
                "y": 269
              },
              {
                "x": "jul",
                "y": 97
              },
              {
                "x": "aug",
                "y": 35
              },
              {
                "x": "sep",
                "y": 210
              },
              {
                "x": "oct",
                "y": 215
              },
              {
                "x": "nov",
                "y": 263
              },
              {
                "x": "dec",
                "y": 133
              }
            ]
          },
          {
            "id": "norway",
            "color": "hsl(336, 70%, 50%)",
            "data": [
              {
                "x": "Jan",
                "y": 98
              },
              {
                "x": "feb",
                "y": 272
              },
              {
                "x": "mar",
                "y": 26
              },
              {
                "x": "apr",
                "y": 296
              },
              {
                "x": "may",
                "y": 239
              },
              {
                "x": "jun",
                "y": 268
              },
              {
                "x": "jul",
                "y": 20
              },
              {
                "x": "aug",
                "y": 27
              },
              {
                "x": "sep",
                "y": 240
              },
              {
                "x": "oct",
                "y": 9
              },
              {
                "x": "nov",
                "y": 91
              },
              {
                "x": "dec",
                "y": 198
              }
            ]
          }
        ]}
        colors={{scheme: "category10"}}
        theme={{
          legends:{text:{fill: mode? "white":"black"}},
          grid:{line:{stroke: mode? "": "white"}},
          axis:{legend:{text:{fill:mode? "white":"black"}}, ticks:{text:{fill: mode? "white":"black"}}},
          tooltip:{container:{backgroundColor:mode? "black":"white"}}
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
            }
        ]}
    />
  </Box>
);

export default MyResponsiveLine;