import InfoRow from "./infoRow.js"

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
        "-$" //тут особо не заморачиваемся и лепим минус прямо сюда.
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

export default function getTableData() {
    return rows;
}