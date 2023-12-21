import Header from './component/Header/Header'
import Home from './component/Home/Home';
import Docs from './component/Docs/Docs';
import LineChart from './component/LineChart/LineChart';
import AreaChart from './component/AreaChart/AreaChart';
import ColumnChart from './component/ColumnChart/ColumnChart';
import Candlestick from './component/Candlestick/Candlestick';
import Donut from './component/Donut/Donut';
import SynchronizedCharts from './component/SynchronizedCharts/SynchronizedCharts';
import PolarAreaChart from './component/PolarAreaChart/PolarAreaChart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "docs",
    element: (
      <div className="App">
        <Header />
        <Docs />
      </div>
    ),
  },
  {
    path: "lineChart",
    element: (
      <div className="App">
        <Header />
        <LineChart />
      </div>
    )
  },
  {
    path: "areaChart",
    element: (
      <div className="App">
        <Header />
        <AreaChart />
      </div>
    )
  },
  {
    path: "columnChart",
    element: (
      <div className="App">
        <Header />
        <ColumnChart />
      </div>
    )
  },
  {
    path: "candlestick",
    element: (
      <div className="App">
        <Header />
        <Candlestick />
      </div>
    )
  },
  {
    path: "donut",
    element: (
      <div className="App">
        <Header />
        <Donut />
      </div>
    )
  },
  {
    path: "synchronizedChart",
    element: (
      <div className="App">
        <Header />
        <SynchronizedCharts />
      </div>
    )
  },
  {
    path: "polarAreaChart",
    element: (
      <div className="App">
        <Header /> 
        <PolarAreaChart />
      </div>
    )
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;