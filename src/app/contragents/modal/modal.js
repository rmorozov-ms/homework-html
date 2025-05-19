import './modal.css';
import modalHtml from "./modal.html"
import modalToggleHtml from "./modalToggle.html"
import ContrAgent from "../datasource/contragent";

const modalToggleElement = document.createElement('div')
modalToggleElement.innerHTML = modalToggleHtml;

const modalElement = document.createElement('div')
modalElement.innerHTML = modalHtml;

let itemId = null;

export function openModal(item) {
    const modalObj = FlowbiteInstances.getInstance('Modal', 'crud-modal');
    itemId = item ? item.id : null;
    modalElement.querySelector("#name").value = item ? item.name : "";
    modalElement.querySelector("#address").value = item ? item.address : "";
    modalElement.querySelector("#inn").value = item ? item.inn : "";
    modalElement.querySelector("#kpp").value = item ? item.kpp : "";
    modalObj.toggle();
}

export function getModalToggle() {
    modalToggleElement.querySelector("button")
        .addEventListener(
            'click',
            e => openModal()
        );
    return modalToggleElement;
}

export function getModal(saveFunc) {
    if (saveFunc) {
        modalElement.querySelector("#crud-modal")
            .addEventListener(
                'submit',
                e => {
                    saveAction(saveFunc);
                    e.preventDefault();
                }
            );
    }
    return modalElement;
}

function saveAction(saveFunc) {
    saveFunc(getItem());
    itemId = null;
    const modalObj = FlowbiteInstances.getInstance('Modal', 'crud-modal');
    modalObj.hide();
}

function getItem() {
    const id = itemId;
    const name = modalElement.querySelector("#name").value;
    const address = modalElement.querySelector("#address").value;
    const inn = modalElement.querySelector("#inn").value;
    const kpp = modalElement.querySelector("#kpp").value;
    return new ContrAgent(id, name, address, inn, kpp);
}