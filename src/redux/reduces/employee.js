import produce from "immer";
import execHandler from "./reducerutil";

const initialState = {
    employee: {
        name: "name",
        age: "age",
        mail: "mail",
        city: "city",
        phone: "phone",
    },
    AllEmployes: []
}


const employee = {
    setNewEmployee(state, action) {
        state.employee.name = state.payLoad.name;
        state.employee.age = state.payLoad.age;
        state.employee.mail = state.payLoad.mail;
        state.employee.city = state.payLoad.city;
        state.employee.phone = state.payLoad.phone;

    },
    setAllEmployes(state, action) {
        state.AllEmployes = action.payLoad;
    }
}

export default produce((state, action) => {
    execHandler(state, action, employee);
}, initialState);