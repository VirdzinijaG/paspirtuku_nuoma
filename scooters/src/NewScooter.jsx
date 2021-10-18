import { useState } from "react";

function NewScooter({ addScooter }) {
    const [code, setCode] = useState('');
    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');
    const [is_busy, setIsBusy] = useState(1);

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
                setIsBusy(1)
        }
    };

    for (let i = 0; i < code.length; i++) {
        if (code.length === 8) {
            alert("Registracijos numeris turi būti iš 8 skaičių");
        }
        break;
    }


    const insert = () => {
        addScooter({
            registration_code: code,
            last_use_time: useTime,
            total_ride_kilometres: ride,
            is_busy: is_busy
        });
        setCode("");
        setUseTime("");
        setRide("");
        setIsBusy(1)
    };

    return (
        <>
            <form>
                <div className="form-row" style={{ marginLeft: "60px" }}>
                    <div className="col-md-5 mb-3">
                        <input type="text"  maxLength="8" onkeypress="return IsNumeric(event);" ondrop="return false;" onChange={(e) => control(e, "registration_code")} value={code} className="form-control" id="validationDefault01" placeholder="Paspirtuko registracijos numeris" required />
                    </div>
                    <div className="col-md-5 mb-3">
                        <input type="date" onChange={(e) => control(e, "last_use_time")} value={useTime} className="form-control" id="validationDefault02" placeholder="Pakutinis naudojimo laikas" required />
                    </div>
                    <div className="col-md-5 mb-3">
                        <input type="number" onChange={(e) => control(e, "total_ride_kilometres")} value={ride} className="form-control" id="validationDefault02" placeholder="Pravažiuoti kilometrai" required />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" style={{ marginBottom: "20px", textAlign: "center" }} onClick={insert}>Įvesti naują paspirtuką</button>
            </form>
        </>
    )

}

export default NewScooter;