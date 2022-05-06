import ContactIcon from "../../icons/ContactIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import EnvIcon from "../../icons/EnvIcon";
import LogIcon from "../../icons/LogIcon";
import UploadIcon from "../../icons/UploadIcon";
import WidgetIcon from "../../icons/WidgetIcon";
import Logo from "./logo.svg";
import { useContainer } from '../../providers/ContainerProvider';
import NavButton from "../NavButton";
import InfoIcon from "../../icons/InfoIcon";
import { useState } from "react";
import Modal from "../Modal";
import logo from '../../logo.svg';
import { Button } from "@statflo/textkit-ui-library";

export default function Navigation() {
    const { setPage } = useContainer();
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <nav className="flex items-center justify-center flex-col w-12 bg-nav-background h-full py-4">
            <img src={Logo} alt="TextKit" className="w-8" />
            <div className="flex-1 py-2">
                <NavButton onClick={() => setPage('logs')}>
                    <LogIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setPage('manageEnv')}>
                    <EnvIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setPage('manageContacts')}>
                    <ContactIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setPage('manageWidgets')}>
                    <WidgetIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setPage('upload')}>
                    <UploadIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setPage('download')}>
                    <DownloadIcon className="w-5 h-5" />
                </NavButton>
                <NavButton onClick={() => setOpen(true)}>
                    <InfoIcon className="w-5 h-5" />
                </NavButton>
            </div>
            <div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm bg-teal-300 text-teal-800 uppercase font-medium">
                    T
                </div>
            </div>

            <Modal open={open} setOpen={setOpen}>
                <img src={logo} alt="TextKit" className="h-14 mx-auto" />
                <h2 className="text-center text-lg font-semibold text-main-l1">TextKit Playground</h2>
                <p className="text-center text-xs font-medium text-main-l2 uppercase tracking-wide">
                    Version: <span className="font-bold">{process.env.REACT_APP_VERSION}</span>
                </p>
                <p className="text-center">
                    <Button secondary small onClick={() => setOpen(false)}>Done</Button>
                </p>
            </Modal>
        </nav>
    )
}