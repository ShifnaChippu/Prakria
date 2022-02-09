import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Layout from './Layout';
import ClientDashboard from './Components/Client/ClientDashboard';
import ClientProjects from './Components/Client/ClientProjects';
import ClientBrands from './Components/Client/ClientBrands';
import ClientFiles from './Components/Client/ClientFiles';
import ClientResource from './Components/Client/ClientResource';
import ClientAccount from './Components/Client/ClientAccount';
import CreateProject from './Components/Client/CreateProject/CreateProject';
import EditProject from './Components/Client/CreateProject/EditProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/client/projects" element={<ClientProjects />} />
          <Route path="/client/brands" element={<ClientBrands />} />
          <Route path="/client/files" element={<ClientFiles />} />
          <Route path="/client/resource" element={<ClientResource />} />
          <Route path="/client/account" element={<ClientAccount />} />
          <Route path="/client/create-project" element={<CreateProject />} />
          <Route path="/client/projects/edit-project/:id" element={<EditProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;