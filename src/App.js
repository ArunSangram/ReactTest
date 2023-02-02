import {useState} from 'react'
import RoomsList from './pages/RoomsList';
import PatientsList from './pages/PatientsList';
import SinglePatient from './pages/SinglePatient';

function App() {
  const [page,setPage] = useState(1)
  return (
    <div >
        {page===1?<RoomsList state={setPage}/>:page===2?
          <PatientsList state={setPage}/>:<SinglePatient state={setPage}/>}
    </div>
  );
}

export default App;
