import { useState } from "react"
import { ToneCard, ToneContainer, ToneList } from "../styles"
import { FaRegSmileWink, FaRegGrinStars, FaRegSmileBeam, FaRegMeh, FaRegGrimace, FaRegAngry, FaRegSadTear} from 'react-icons/fa'

interface Search {
    tones: {
        anger: number,
        analytical: number,
        confident: number,
        joy: number,
        sadness: number,
        tentative: number,
        fear: number
    }
}

export function ToneBoard () {
    const [searchResult, setSearchResult] = useState({} as Search)

    return (
        <ToneContainer>
            <h3>Emotions</h3>
            <ToneList className="row">
                <ToneCard className="confidentContainer col-2">
                    <span>Confident</span>
                    <FaRegSmileWink/>
                </ToneCard>
                <ToneCard className="joyContainer col-2">
                    <span>Joy</span>
                    <FaRegGrinStars/>
                </ToneCard>
                {/* <ToneCard className="tentativeContainer col-12">
                    <span>Tentative</span>
                    <FaRegSmileBeam/>
                </ToneCard> */}
                <ToneCard className="analyticalContainer col-2">
                    <span>Analytical</span>
                    <FaRegMeh/>
                </ToneCard>
                <ToneCard className="fearContainer col-2">
                    <span>Fear</span>
                    <FaRegGrimace/>
                </ToneCard>
                <ToneCard className="angerContainer col-2">
                    <span>Anger</span>
                    <FaRegAngry/>
                </ToneCard>
                <ToneCard className="sadnessContainer col-2">
                    <span>Sadness</span>
                    <FaRegSadTear/>
                </ToneCard>
            </ToneList>
        </ToneContainer>
    )
}