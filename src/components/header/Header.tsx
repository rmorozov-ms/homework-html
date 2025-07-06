import ModalToggle from "../modal/ModalToggle";
import logo from "../../assets/logo.png";

interface HeaderProps {
    setModalIsOpen: (open: boolean) => void;
}

const Header = ({setModalIsOpen}: HeaderProps) => {

    return (
        <div className="header">
            <img className="logo" src={logo} />
            <ModalToggle setOpen={setModalIsOpen}/>
        </div>
    )
}

export default Header;