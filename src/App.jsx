
 import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './MainPage/MainPage';
import ListPage from './ListPage/ListPage';
import DetailPage from './DetailPage/DetailPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
  
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage  />} />
      <Route path="/list" element={<ListPage  />} />
      <Route path="/detail" element={<DetailPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  </Routes>
     
   
  )
}

export default App
