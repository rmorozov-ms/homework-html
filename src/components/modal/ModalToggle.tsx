import "./modal.css";

interface ModalToggleProps {
    setOpen: (open: boolean) => void;
}

const ModalToggle = ({ setOpen }: ModalToggleProps) => {

    const open = () => {
        setOpen(true);
    };

    return (
        <button
            onClick={open}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
        >
            Добавить
        </button>
    )
}

export default ModalToggle;