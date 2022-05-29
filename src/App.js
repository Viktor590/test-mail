import { Route, Routes } from "react-router-dom"
import InboxPage from './pages/InboxPage';
import SendPage from './pages/SendPage';
import Layout from './components/layout/Layout';
import ContactsPage from './pages/ContactsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<InboxPage />} />
          <Route path='send' element={<SendPage />} />
          <Route path='contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;
