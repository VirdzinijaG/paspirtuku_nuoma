function Top({ sort, scootersCount, rideCount }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-title">Rūšiuoti pagal</h5>
                                <button type="button" className="btn btn-info m-1" onClick={() => sort("last_use_time")}>
                                    Paskutinio naudojimo datą
                                </button>
                                <button type="button" className="btn btn-info m-1" onClick={() => sort("total_ride_kilometres")}>
                                  Nuvažiuotus kilometrus
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-title">Statistika</h5>
                                <h6>Paspirtukų kiekis: {scootersCount}</h6>
                                <h6>Nuvažiuoti kilometrai: {rideCount} km</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Top;