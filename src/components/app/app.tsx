import React, { useState } from "react";
import Header from "../header/Header";
import Table from "../table/Table";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";

export const App: React.FC = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <Header setModalIsOpen={setModalIsOpen}/>
            <Table onRowDoubleClick={() => setModalIsOpen(true)}/>
            <Footer />
            <Modal isOpen ={modalIsOpen} setOpen={setModalIsOpen} />
        </>
    )
}