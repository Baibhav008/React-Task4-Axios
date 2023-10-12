
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Datafetch } from './components/Datafetch';

function App() {

  return (
    <div className='bg-info d-flex container-fluid align-items-center justify-content-center'>
      <Datafetch />
    </div>
  );
}

export default App;
