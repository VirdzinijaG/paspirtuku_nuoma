// import dateformat from 'dateformat';

function Scooter({ scooter, deleteScooter, showModal }) {

    const d = new Date(scooter.last_use_time);
    let month = "00" + (d.getMonth() + 1);
    month = month.substring(month.length - 2);
    let day = "00" + d.getDate();
    day = day.substring(day.length - 2);
    scooter.last_use_time = `${d.getFullYear()}-${month}-${day}`;

    return (<>
        <div className="col-lg-12 col-md-12 col-sm-10">
            <div className="card m-2">
                <div style={{ boxShadow: "5px 5px #888888" }} className="card-body">
                    <h5 className="card-title">Paspirtuko registracijos kodas:</h5>
                    <h6>{scooter.registration_code}</h6>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Paspirtuko paskutinio naudojimo data: {scooter.last_use_time}
                    </span>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Paspirtuko nuvažiuoti kilometrai  {(scooter.total_ride_kilometres)}
                    </span>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Laisvas:  {scooter.is_busy}
                    </span>
                    <div className="form-group mt-3">
                        <button type="button" className="btn btn-danger m-1" onClick={() => deleteScooter(scooter.id)}>
                            Ištrinti
                        </button>
                        <button type="button" className="btn btn-success m-1" onClick={() => showModal(scooter.id)}>
                            Redaguoti duomenis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Scooter;