import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './sb-admin-2.min.css'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
<div id="content">
  <Topbar/>
<Dashboard/>
</div>
      </div>
      </div>
    </div>
  );
}

export default App;
