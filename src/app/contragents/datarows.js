import ContrAgent from "./contragent";
import { v4 as uuidv4 } from "uuid";

const data = [
    new ContrAgent(uuidv4(), "Some_Name_01", "Some_Address_01", "00000000001", "000000001"),
    new ContrAgent(uuidv4(), "Some_Name_02", "Some_Address_02", "00000000002", "000000002"),
    new ContrAgent(uuidv4(), "Some_Name_03", "Some_Address_03", "00000000003", "000000003")
];

export function getItems() {
    return data;
}

export function setItem(item) {
    const index = data.findIndex(exists => exists.id == item.id)
    if (index !== -1) {
        data[index] = item;
    } else {
        item.id = uuidv4();
        data.push(item);
    }
}

export function removeItem(rowId) {
    const index = data.findIndex(item => item.id == rowId)
    if (index !== -1) {
        data.splice(index, 1);
    }
}