import { useState } from "react";

function NewScooter({ addScooter }) {
    const [code, setCode] = useState('');
    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');


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
        }
    };

    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 9) {
            alert("Registracijos numeris turi būti iš 8 skaičių")
        }
    }

    const insert = () => {
        addScooter({
            registration_code: code,
            last_use_time: useTime,
            total_ride_kilometres: ride,
        });
        setCode("");
        setUseTime("");
        setRide("");
    };

    return (
        <>
            <form>
                <div class="form-row" style={{ marginLeft: "60px" }}>
                    <div class="col-md-5 mb-3">
                        <input type="number" onChange={(e) => control(e, "registration_code")} value={code} class="form-control" id="validationDefault01" placeholder="Paspirtuko registracijos numeris" required />
                    </div>
                    <div class="col-md-5 mb-3">
                        <input type="date" onChange={(e) => control(e, "last_use_time")} value={useTime} class="form-control" id="validationDefault02" placeholder="Pakutinis naudojimo laikas" required />
                    </div>
                    <div class="col-md-5 mb-3">
                        <input type="number" onChange={(e) => control(e, "total_ride_kilometres")} value={ride} class="form-control" id="validationDefault02" placeholder="Pravažiuoti kilometrai" required />
                    </div>
                </div>
                <button class="btn btn-primary" type="submit" style={{ marginBottom: "20px", textAlign: "center" }} onClick={insert}>Įvesti naują paspirtuką</button>
            </form>
        </>
    )

}

export default NewScooter;