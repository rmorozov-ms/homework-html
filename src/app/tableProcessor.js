import getTableData from "./data/tableData.js"
import getStateMap from "./data/states.js"

const rows = getTableData();
const stateMap = getStateMap();

export function fillTable() {
    const tableBodyElement = document.getElementById('table_body');
    for (var i = 0; i < rows.length; i++) {
        let row = fillRow(rows[i]);
        tableBodyElement.appendChild(row);
    }
}

function fillRow(row) {
    let template = document.querySelector("#row_template");
    let rowHtml = template.content.cloneNode(true);
    rowHtml.querySelector("#operation").innerHTML = row.operation;
    rowHtml.querySelector("#name").innerHTML = row.name;
    rowHtml.querySelector("#date").innerHTML = row.date.toDateString();
    rowHtml.querySelector("#amount").innerHTML = row.currency + row.amount;
    rowHtml.querySelector("#state").innerHTML = stateMap.get(row.state);
    return rowHtml;
}