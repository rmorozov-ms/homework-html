import html from "./app.html";
import './app.css'
import { getFilledTable, reFillTableBody } from "./contragents/table.js"
import { openModal, getModalToggle, getModal } from "./modal/modal.js"
import { setItem } from "./contragents/datarows";

function saveFunc(newItem) {
    setItem(newItem);
    //т.к. содержимое массива с данными изменилось- перерисуем содержимое таблицы
    reFillTableBody();
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const modalToggle = getModalToggle();
rootElement.querySelector("#modal_toggle").appendChild(modalToggle);
const modal = getModal(saveFunc);
rootElement.querySelector("#main_modal").appendChild(modal);

const table = getFilledTable(openModal);
rootElement.querySelector("#table_position").appendChild(table);