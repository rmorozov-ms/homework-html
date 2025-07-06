import "./table.css";
import TableRow from "./TableRow";

interface TableProps {
    onRowDoubleClick?: () => void;
}

const Table = ({onRowDoubleClick}: TableProps) => {

    const titles: string[] = ["ID", "наименование", "ИНН", "адрес", "КПП"]

    return (
        <div className="table relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">{titles[0]}</th>
                        <th scope="col" className="px-6 py-3">{titles[1]}</th>
                        <th scope="col" className="px-6 py-3">{titles[2]}</th>
                        <th scope="col" className="px-6 py-3">{titles[3]}</th>
                        <th scope="col" className="px-6 py-3">{titles[4]}</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow onDoubleClick={onRowDoubleClick} />
                </tbody>
            </table>
        </div>
    )
}

export default Table;