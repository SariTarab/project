
import actions from "../action";

export const getEmployes = (store) => (next) => (action) => {
    if (action.type == "GET_ALL_EMPLOYES") {
        fetch(`https://localhost:4000/getAllEmployee`, { method: "GET" })
            .then((response) => response.json())
            .then((result) => {
                store.dispatch(actions.setAllEmployes(result));
                debugger;
            })
            .catch((error) => console.log("error", error));
    }
    return next(action);
};


export const saveEmployee = (store) => (next) => (action) => {
    if (action.type == "SEND_NEW_EMPLOYEE") {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: action.payLoad.name,
                age: action.payLoad.age,
                city: action.payLoad.city,
                mail: action.payLoad.mail,
                phone: action.payLoad.phone
            }),
        };
        fetch(
            `https://localhost:3001/addNewEmployee`,
            requestOptions
        ).then((response) => {
            response.json();
            store.dispatch(actions.sendNewEmployee(action.payLoad));
        });
    }
    return next(action);
};