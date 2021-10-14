import { useState, useEffect } from "react";
import dateformat from "dateformat";

function Modal({ id, scooter, editScooter, hideModal }) {
    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = () =>{

        setChecked(!checked);

    };

    useEffect(() => {
        setUseTime(scooter.last_use_time);
        setRide(scooter.total_ride_kilometres);
    }, [scooter]);

    const control = (e, what) => {
        switch (what) {
            case "last_use_time":
                setUseTime(e.target.value);
                break;
            case "total_ride_kilometres":
                setRide(e.target.value);
                break;
        }
    };

    const edit = () => {
        editScooter(id, {
            last_use_time: useTime,
            total_ride_kilometres: ride,
        });
        hideModal();
        setUseTime("");
        setRide("");
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
                                    <input type="text" className="form-control" onChange={(e) => control(e, "last_use_time")} value={dateformat(useTime, "yyyy-mm-dd")} />
                                    <small className="form-text text-muted">
                                        Pakeisti datą
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={(e) => control(e, "total_ride_kilometres")} value={ride} />
                                    <small className="form-text text-muted">
                                        Pakeisti pravažiuotus kilometrus
                                    </small>
                                </div>
                                <div className="form-group">
                                    <small className="form-text text-muted">
                                        Ar paspirtukas užimtas?
                                        <input style={{ marginLeft: "5px" }} type="checkbox" checked={checked} onChange={handleChange} />
                                        {checked ? "Taip" : "Ne"}
                                    </small>
                                </div>
                                <button type="button" className="btn btn-info m-1" onClick={edit}>
                                    Atnaujinti
                                </button>
                                <button type="button" className="btn btn-danger m-1" onClick={hideModal}>
                                    Atšaukti
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