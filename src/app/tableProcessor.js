class InfoRow {
    constructor(operation_prefix, name, date, amount, state, currency) {
        this.operation_prefix = operation_prefix
        this.name = name
        this.date = date
        this.amount = amount
        this.state = state
        this.currency = currency
    }
}

const rows = [
    new InfoRow(
        "Payment from",
        "Bonnie Green",
        new Date(2021, 3, 23),
        2300,
        0,
        "$"
    ),
    new InfoRow(
        "Payment refund to",
        "#00910",
        new Date(2021, 3, 23),
        670,
        0,
        "-$"
    ),
    new InfoRow(
        "Payment failed from",
        "#087651",
        new Date(2021, 3, 18),
        234,
        1,
        "$"
    ),
    new InfoRow(
        "Payment from",
        "Lana Byrd",
        new Date(2021, 3, 15),
        5000,
        2,
        "$"
    ),
    new InfoRow(
        "Payment from",
        "Jese Leos",
        new Date(2021, 3, 15),
        2300,
        0,
        "$"
    ),
    new InfoRow(
        "Payment from",
        "THEMSBERG LLC",
        new Date(2021, 3, 11),
        560,
        0,
        "$"
    )
];

const stateMap = new Map([
    [
        0,
        `<span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Completed</span>`
    ],
    [
        1,
        `<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Cancelled</span>`
    ],
    [
        2,
        `<span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">In progress</span>`
    ],
]);

export function fillTable() {
    const tableBodyElement = document.getElementById('table_body');
    let tableInnerHtml = '';
    for (var i = 0; i < rows.length; i++) {
        let row = fillRow(rows[i]);
        tableInnerHtml = tableInnerHtml + row;
    }
    tableBodyElement.innerHTML = tableInnerHtml;
}

function fillRow(row) {
    let state = row.state;
    let rowHtml =
        `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span>${row.operation_prefix} </span><span class="name">${row.name}</span>
            </th>
            <td class="px-6 py-4">
                ${row.date.toDateString()}
            </td>
            <td class="px-6 py-4 amount">
                ${row.currency + row.amount}
            </td>
            <td class="px-6 py-4">
                ${stateMap.get(state)}
            </td>
        </tr>`;
    return rowHtml;
}