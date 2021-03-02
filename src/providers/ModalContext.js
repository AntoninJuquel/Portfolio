import React, { createContext, useMemo, useContext, useRef } from "react";
import { MyModal } from "../components/CustomComponents";

const ModalContext = createContext(null);

export function ModalProvider({ children, classes }) {
    const modalRef = useRef(null)
    const value = useMemo(() => ({ modalRef }), [modalRef]);
    return (
        <ModalContext.Provider value={value} >
            <MyModal ref={modalRef} classes={classes} />
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext).modalRef