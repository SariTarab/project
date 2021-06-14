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
        state.employee.name = state.payLooa.name;
        state.employee.age = state.payLooa.age;
        state.employee.mail = state.payLooa.mail;
        state.employee.city = state.payLooa.city;
        state.employee.phone = state.payLooa.phone;

    },
    setAllEmployes(state, action) {
        state.AllEmployes = action.payLoad;
    }
}

export default produce((state, action) => {
    execHandler(state, action, employee);
}, initialState);