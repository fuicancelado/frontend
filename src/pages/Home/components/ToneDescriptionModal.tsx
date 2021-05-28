import { ToneDescriptionContainer, Container } from "../styles";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Tone } from "..";
import { renderToneHelpText, renderTranslatedTone } from "../../../utils/tone";

interface SearchModalProps {
    isOpen: boolean,
    onRequestClose: any;
    tone : Tone
}

export function ToneDescriptionModal({isOpen, onRequestClose, tone } : SearchModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={() => onRequestClose(false)}
        >
            <button 
                type="button"
                onClick={() => onRequestClose(false)} 
                className="react-modal-close"
            >
                <FaTimes/>
            </button>
            <ToneDescriptionContainer className={`${tone.tone_id}Border`}>
                <div>
                    <h2>{renderTranslatedTone(tone.tone_name)}</h2>
                    <p>{renderToneHelpText(tone.tone_id)}</p>
                </div>
            </ToneDescriptionContainer>
        </Modal>
    )
}