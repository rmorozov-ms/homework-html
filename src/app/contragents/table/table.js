import './table.css';
import html from "./table.html"
import { setItem, getItems, removeItem } from "../datasource/data";

const element = document.createElement('div')
element.innerHTML = html;

const rows = getItems();
let openModalFnc;

export function getFilledTable(openModal) {
    openModalFnc = openModal;
    fillTableHeader();
    fillTableBody();
    return element;
}

function fillTableHeader() {
    const tableHeaderElement = element.querySelector("#table_head");
    let template = element.querySelector("#table_header_template");
    let headHtml = template.content.cloneNode(true);
    headHtml.querySelector("#id_title").innerHTML = "ID";
    headHtml.querySelector("#name_title").innerHTML = "наименование";
    headHtml.querySelector("#inn_title").innerHTML = "ИНН";
    headHtml.querySelector("#address_title").innerHTML = "адрес";
    headHtml.querySelector("#kpp_title").innerHTML = "КПП";
    tableHeaderElement.appendChild(headHtml);
}

function fillTableBody() {
    const tableBodyElement = element.querySelector("#table_body");
    for (var i = 0; i < rows.length; i++) {
        let row = fillRow(rows[i]);
        tableBodyElement.appendChild(row);
    }
}

export function reFillTableBody() {
    const tableBodyElement = element.querySelector("#table_body");
    while (tableBodyElement.lastElementChild) {
        tableBodyElement.removeChild(tableBodyElement.lastElementChild);
    }
    for (var i = 0; i < rows.length; i++) {
        let row = fillRow(rows[i]);
        tableBodyElement.appendChild(row);
    }
}

function fillRow(row) {
    let template = element.querySelector("#table_row_template");
    let rowHtml = template.content.cloneNode(true);
    rowHtml.querySelector("#id_row").innerHTML = row.id;
    rowHtml.querySelector("#name_row").innerHTML = row.name;
    rowHtml.querySelector("#inn_row").innerHTML = row.inn;
    rowHtml.querySelector("#address_row").innerHTML = row.address;
    rowHtml.querySelector("#kpp_row").innerHTML = row.kpp;
    rowHtml.querySelector("#remove_row").appendChild(getRemoveButton(row));
    rowHtml.querySelector("#full_row")
        .addEventListener(
            'dblclick',
            e => {
                if (openModalFnc) {
                    openModalFnc(row);
                }
            }
        );
    return rowHtml;
}

function getRemoveButton(row) {
    let template = element.querySelector("#remove_button_template");
    let removeButton = template.content.cloneNode(true);
    removeButton.querySelector("#remove_button")
        .addEventListener(
            'click',
            e => {
                removeRow(row);
                e.stopPropagation();
            }
        );
    return removeButton;
}

export function saveItem(newItem) {
    setItem(newItem);
    reFillTableBody();
}

function removeRow(row) {
    removeItem(row.id);
    reFillTableBody();
}