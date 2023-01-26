import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import WakeUps from './components/WakeUps'
import WakeUp from './components/WakeUp'
import EditWakeUp from './components/EditWakeUp'
import Foods from './components/Foods'
import Food from './components/Food'
import EditFood from './components/EditFoods'
import { Fragment } from 'react';
import CreateWakeLog from './components/CreateWakeUp';
import CreateFoods from './components/CreateFoods';

function groupDisplay() {
  return(
    <Fragment>
      <WakeUps />
      <Foods />
      <CreateWakeLog />
      <CreateFoods />
    </Fragment>
  )
}


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>

  <Route path='/' element={groupDisplay()}/>
  <Route path='/:id' element={<WakeUp />}/>
  <Route path='/:id/edit' element={<EditWakeUp />}/>
  <Route path='/:id' element={<Food />}/>
  <Route path='/:id/edit' element={<EditFood  />}/>
      </Routes>
     
     </Router>
     
    </div>
  );
}

export default App;
