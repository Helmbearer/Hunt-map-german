import { Sidebar } from './containers/sidebar';
import { Map } from './containers/map';
import { Banner } from './components/banner';

import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Map />
      <Banner />
    </div>
  );
}

export default App;
