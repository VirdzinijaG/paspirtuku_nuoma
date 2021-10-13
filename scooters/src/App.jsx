import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Scooters from './Scooters';
import NewScooter from './NewScooter';
import Modal from "./Modal";
import Top from './Top';

function App() {

  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);
  const [scootersCount, setScootersCount] = useState(0);
  const [rideCount, setRideCount] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3003/scooters").then((response) => {
      setScooters(response.data);
    });
  }, [lastUpdate]);


  // Statistika
  // Visi paspirtukai
  useEffect(() => {
    axios.get('http://localhost:3003/scooters/count')
      .then((response) => {
        setScootersCount(response.data[0].scootersCount);
      })
  }, [lastUpdate])

  // Kilometrai visi
  useEffect(() => {
    axios.get('http://localhost:3003/scooters/ride-count')
      .then((response) => {
        console.log(response.data);
        setRideCount(response.data[0].total_ride_kilometres);
      })
  }, [lastUpdate])


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

  // rusiavimas
  const sort = by => {
    const scootersCopy = scooters.slice();
    if ('total_ride_kilometres' === by) {
      scootersCopy.sort((a, b) => {
        if (a.total_ride_kilometres > b.total_ride_kilometres) {
          return 1
        }
        if (a.total_ride_kilometres < b.total_ride_kilometres) {
          return -1
        }
        return 0
      })
      setScooters(scootersCopy)
    }
    if ("last_use_time" === by) {
      scootersCopy.sort((a, b) => {
        if (a.last_use_time > b.last_use_time) {
          return 1;
        }
        if (a.last_use_time < b.last_use_time) {
          return -1;
        }
        return 0;
      });
      setScooters(scootersCopy);
    }
  }







  return (
    <div className="App">
      <h1>Paspirtukų nuoma</h1>
      <Top sort={sort} scootersCount={scootersCount} rideCount={rideCount}></Top>
      <NewScooter addScooter={addScooter}></NewScooter>
      <Scooters scooters={scooters} deleteScooter={deleteScooter} showModal={showModal}></Scooters>
      <Modal id={modalId} editScooter={editScooter} scooter={getScooter(modalId)} hideModal={hideModal}></Modal>

    </div>
  );
}

export default App;