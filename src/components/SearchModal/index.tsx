import React, { useState } from "react"
import { Container } from "./styles";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa'
import { Input } from "../Input";

interface SearchModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function SearchModal({isOpen, onRequestClose} : SearchModalProps) {
    const [date, setDate] = useState("04/05/2021")

    return(
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <FaTimes/>
            </button>
            <Container>
                <Input label="Date" type="text" value={date}/>
            </Container>
        </Modal>
    )
}