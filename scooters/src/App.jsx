import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Scooters from './Scooters';
import NewScooter from './NewScooter';
import Modal from "./Modal";

function App() {

  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);


  useEffect(() => {
    axios.get("http://localhost:3003/scooters").then((response) => {
      setScooters(response.data);
    });
  }, [lastUpdate]);


  const addScooter = (scooter) => {
    axios.post("http://localhost:3003/scooters", scooter).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const deleteScooter = (id) => {
    axios.delete("http://localhost:3003/scooters/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };


  const editScooter = (id, scooter) => {
    axios.put("http://localhost:3003/scooters/" + id, scooter).then(() => {
      setLastUpdate(Date.now());
    });
  };


  const getScooter = (id) => {
    if (id === 0) {
      return {
        registration_code: '',
        last_use_time: '',
        total_ride_kilometres: '',
      };
    }
    for (let i = 0; i < scooters.length; i++) {
      if (scooters[i].id === id) {
        return { ...scooters[i] };
      }
    }
  };

  const showModal = (id) => {
    setModalId(id);
  };

  const hideModal = (id) => {
    setModalId(0);
  };








  return (
    <div className="App">
      <h1>Paspirtukų nuoma</h1>
      <NewScooter addScooter={addScooter}></NewScooter>
      <Scooters scooters={scooters} deleteScooter={deleteScooter} showModal={showModal}></Scooters>
      <Modal id={modalId} editScooter={editScooter} scooter={getScooter(modalId)} hideModal={hideModal}></Modal>

    </div>
  );
}

export default App;