import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({children}) => {
    // A container to return you the same thing every single time.
    const elRef = useRef(null);

    if(!elRef.current){
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);

    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;