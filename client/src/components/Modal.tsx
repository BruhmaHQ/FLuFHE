import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: React.ReactNode;
    closeModal: () => void;
    closeOnOutsideClick?: boolean;
}
const Modal: React.FC<ModalProps> = ({
    children,
    closeModal,
    closeOnOutsideClick = true,
}) => {
    const modalRef = useRef();
    const elRef = useRef<HTMLDivElement>();
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    const handleOutsideClick = (e: any) => {
        //checks if click is on modal root or the children if it's on children closeModal won't run
        if (e.target === e.currentTarget) return closeModal();
    };

    useEffect(() => {
        const elRefCurrent = elRef.current;
        const modalRoot = document.getElementById("modal");

        if (elRefCurrent && modalRoot) {
            modalRoot.appendChild(elRefCurrent);
        }
        window.history.pushState({ modalOpen: true }, "");

        if (closeOnOutsideClick) {
            const modalRoot = document.getElementById("modal");
            modalRoot?.addEventListener("click", handleOutsideClick);
        }

        window.addEventListener("popstate", closeModal);

        return () => {
            if (elRefCurrent && modalRoot) {
                modalRoot.removeChild(elRefCurrent);
            }
            window.removeEventListener("popstate", closeModal);

            modalRoot?.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const tempChildren: any = children; //? to avoid type error

    return <>{createPortal(tempChildren, elRef?.current)}</>;
};

export default Modal;
