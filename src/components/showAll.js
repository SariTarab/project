import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";

export default function Show_All() {

    const dispatch = useDispatch();
    const Data = useSelector(state => state.employee);

    useEffect(() => {
        dispatch(actions.getAllEmployes())
    })

    return (
        <>
            {Data.AllEmployes.map((emp, index) => {
                <p>
                    user number {index + 1}:
            {emp.name}
                    <br></br>
                    {emp.mail}
                </p>;
            })}
        </>
    );
}

