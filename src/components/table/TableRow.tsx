import RowRemoveButton from "./RowRemoveButton";

interface TableRowProps {
    onDoubleClick?: () => void;
}

const TableRow = ({onDoubleClick}: TableRowProps) => {

    const contrAgend = {
        id: "1111",
        name: "111",
        inn: "111",
        address: "111",
        kpp: "111"
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" onDoubleClick={onDoubleClick}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{contrAgend.id}</th>
            <td className="px-6 py-4">{contrAgend.name}</td>
            <td className="px-6 py-4 amount">{contrAgend.inn}</td>
            <td className="px-6 py-4">{contrAgend.address}</td>
            <td className="px-6 py-4">{contrAgend.kpp}</td>
            <td className="px-6 py-4 text-right"><RowRemoveButton /></td>
        </tr>
    )
}

export default TableRow;