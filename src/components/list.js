import { useState } from "react"
import { useDispatch } from "react-redux";
import actions from "../redux/action";
import { useHistory } from "react-router-dom"

export default function List() {

    const [name, setName] = useState("name");
    const [age, setAge] = useState("age");
    const [city, setCity] = useState("city");
    const [mail, setMail] = useState("mail");
    const [phone, setPhone] = useState("phone");
    const history = useHistory();


    const dispatch = useDispatch();

    function submit() {
        dispatch(actions.sendNewEmployee({ name, mail, city, phone, age }));
        history.push('/SHOW');
    }

    return (
        <>
            <input onChange={v => setName(v.target.value)} placeholder="name" /><br></br><br></br>
            <input onChange={v => setAge(v.target.value)} placeholder="age" /><br></br><br></br>
            <input onChange={v => setCity(v.target.value)} placeholder="city" /><br></br><br></br>
            <input onChange={v => setMail(v.target.value)} placeholder="mail" /><br></br><br></br>
            <input onChange={v => setPhone(v.target.value)} placeholder="phone" /><br></br><br></br>
            <button onClick={submit}>submit</button>
        </>
    )
}