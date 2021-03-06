import { useState, useEffect } from "react";
// import dateformat from "dateformat";

function Modal({ id, scooter, editScooter, hideModal }) {
    const [code, setCode] = useState('');
    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');
    const [is_busy, setIsBusy] = useState(0);

    useEffect(() => {
        setCode(scooter.registration_code)
        setUseTime(scooter.last_use_time);
        setRide(scooter.total_ride_kilometres);
        setIsBusy(scooter.is_busy);
    }, [scooter]);

    const control = (e, what) => {
        switch (what) {
            case "registration_code":
                setCode(e.target.value);
                break;
            case "last_use_time":
                setUseTime(e.target.value);
                break;
            case "total_ride_kilometres":
                setRide(e.target.value);
                break;
            case "is_busy":
                setIsBusy(e.target.value);
                break;
        }
    };

    const edit = () => {
        editScooter(id, {
            last_use_time: useTime,
            total_ride_kilometres: ride,
            is_busy: is_busy,
        });
        setCode("")
        hideModal();
        setUseTime("");
        setRide("");
        setIsBusy(0);
    };

    const isChecked = () => {
        if (is_busy === 1) {
            setIsBusy(0);
        } else {
            setIsBusy(1);
        }
    };

    if (id === 0) {
        return null;
    }

    return (
        <div className="edit-modal">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-title">Redaguoti</h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" style={{ fontWeight: "bolder", textAlign: "center" }} value={code} />
                                    <small className="form-text text-muted">
                                        Paspirtuko registracijos kodas
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="text" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} className="form-control" style={{ textAlign: "center" }} onChange={(e) => control(e, "last_use_time")} value={useTime} />
                                    <small className="form-text text-muted">
                                        Pakeisti dat??
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="text" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} className="form-control" style={{ textAlign: "center" }} onChange={(e) => control(e, "total_ride_kilometres")} value={ride} />
                                    <small className="form-text text-muted">
                                        Pakeisti prava??iuotus kilometrus
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" style={{ textAlign: "center" }} value={is_busy} />
                                    <small className="form-text text-muted">
                                        Laisvas paspirtukas?
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label>Laisvas/U??imtas?</label>
                                    <input className="form-control" onChange={isChecked} isChecked={isChecked} type="checkbox" />
                                </div>
                                <button type="button" className="btn btn-info m-1" onClick={edit}>
                                    Atnaujinti
                                </button>
                                <button type="button" className="btn btn-danger m-1" onClick={hideModal}>
                                    At??aukti
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;