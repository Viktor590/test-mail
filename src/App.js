import { Route, Routes } from "react-router-dom"
import InboxPage from './pages/InboxPage';
import Layout from './components/layout/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<InboxPage />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;
