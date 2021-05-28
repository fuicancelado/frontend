import { ToneContainer, ToneList, ToneCard, ScoreContainer, DescriptionContainer } from "../styles";
import { FaRegSmileWink, FaRegGrinStars, FaRegSmileBeam, FaRegMeh, FaRegGrimace, FaRegAngry, FaRegSadTear, FaQuestionCircle} from 'react-icons/fa'
import { SearchResult, Tone } from "..";
import { renderTranslatedTone } from "../../../utils/tone";

interface Props {
    searchResult: SearchResult,
    setModalIsOpen: any,
    setToneModal: any
}

export const Tones = ({ searchResult, setModalIsOpen, setToneModal }:Props) => {    

    const handleClickCard = (tone: Tone) => {
        setModalIsOpen(true);
        setToneModal(tone);
    };

    const renderToneIcon = (tone_id: string) => {
        switch (tone_id) {
            case 'confident':
                return <FaRegSmileWink/>
            case 'fear':
                return <FaRegGrimace/>
            case 'anger':
                return <FaRegAngry/>
            case 'joy':
                return <FaRegGrinStars/>
            case 'analytical':
                return <FaRegMeh/>
            case 'sadness':
                return <FaRegSadTear/>
            case 'tentative':
                return <FaRegSmileBeam/>
            default:
                return <></>
        }
    };

    return (
        <ToneContainer>
            <h3>Emoções</h3>
            <ToneList>
                {searchResult.tones.map(tone => {
                    var isToneActive = tone.score > 0.0;
                    return (
                        <ToneCard onClick={() => handleClickCard(tone)} key={tone.tone_id} className={`${tone.tone_id}Container ${!isToneActive && 'toneDisabled'} cursorHand`}>
                            <DescriptionContainer>
                                <span>{renderTranslatedTone(tone.tone_name)}</span>
                                <FaQuestionCircle/>
                            </DescriptionContainer>
                            <ScoreContainer>
                                <span>{isToneActive ? `${(tone.score * 100).toFixed(2)}%` : '-- %'}</span>
                                {renderToneIcon(tone.tone_id)}
                            </ScoreContainer>
                        </ToneCard>
                    )
                })}
{/*                 
                <ToneCard key="2" className="angerContainer">
                    <span>Raiva</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegGrimace/>
                    </ScoreContainer>
                </ToneCard>
                <ToneCard key="3" className="confidentContainer">
                    <span>Confianca</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegAngry/>
                    </ScoreContainer>
                </ToneCard>
                <ToneCard key="4" className="analyticalContainer">
                    <span>Pensativo</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegMeh/>
                    </ScoreContainer>
                </ToneCard>
                <ToneCard key="5" className="tentativeContainer">
                    <span>Decepcao</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegSmileWink/>
                    </ScoreContainer>
                </ToneCard>
                <ToneCard key="6" className="sadnessContainer">
                    <span>Tristeza</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegSadTear/>
                    </ScoreContainer>
                </ToneCard>
                <ToneCard key="7" className="joyContainer">
                    <span>Prazer</span>
                    <ScoreContainer>
                        <span>-- %</span>
                        <FaRegSmileBeam/>
                    </ScoreContainer>
                </ToneCard> */}
            </ToneList>
        </ToneContainer>
    )
}