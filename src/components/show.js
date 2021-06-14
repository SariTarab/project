import { useSelector } from "react-redux"
import actions from "../redux/action";

export default function Show() {
    const Data = useSelector(state => state.employee);
    return (<>
        {Data.employee.name}:שמי<br></br>
        {Data.employee.age}:ואני בן<br></br>
        {Data.employee.phone}:מספר הפל<br></br>
        {Data.employee.city}:אני גר<br></br>
        {Data.employee.mail}:המייל שלי<br></br>


    </>)
}