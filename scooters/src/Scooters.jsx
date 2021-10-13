import Scooter from "./Scooter";


function Scooters({ scooters, deleteScooter, showModal }) {
    return (
        <>
            {scooters.map((scooter) => (<Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} showModal={showModal} />))}
        </>
    )
}

export default Scooters;