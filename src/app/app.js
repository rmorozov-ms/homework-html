import './app.css'
import html from "./app.html";
import { getFilledTable, saveItem } from "./contragents/table/table.js"
import { openModal, getModalToggle, getModal } from "./contragents/modal/modal.js"

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const modalToggle = getModalToggle();
rootElement.querySelector("#modal_toggle").appendChild(modalToggle);
const modal = getModal(saveItem);
rootElement.querySelector("#main_modal").appendChild(modal);

const table = getFilledTable(openModal);
rootElement.querySelector("#table_position").appendChild(table);