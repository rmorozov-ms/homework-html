import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const Modal = ({ isOpen, setOpen }: ModalProps) => {

    const close = () => {
        setOpen(false);
    };

    const save = () => {
        setOpen(false);
    };

    const cancel = () => {
        setOpen(false);
    };

    const modal = (
        <div id="crud-modal" tabIndex={-1} aria-modal="true" role="dialog"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
            >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Контрагент
                        </h3>
                        <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={close}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Наименование</label>
                                <input type="text" name="name" id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Наименование" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="address"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Адрес</label>
                                <input type="text" name="address" id="address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Адрес" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="inn"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ИНН</label>
                                <input type="text" name="inn" id="inn"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="ИНН" pattern="[0-9]{11}" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="kpp"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">КПП</label>
                                <input type="text" name="kpp" id="kpp"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="КПП" pattern="[0-9]{9}" />
                            </div>
                        </div>
                        <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
                            <button id="save_button" type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={save}
                            >
                                {/* <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"></path>
                                </svg> */}
                                Сохранить
                            </button>
                            <button type="button" onClick={cancel}
                                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Отменить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    return isOpen ? modal : <></>;
}

export default Modal;