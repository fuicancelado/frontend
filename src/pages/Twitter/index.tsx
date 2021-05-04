import React, { useState } from "react"
import { ToneContainer } from "./styles"
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

export function Twitter () {
    const [searchResult, setSearchResult] = useState({} as Search)

    return (
        <>
            <ToneContainer>
                <h3>Emotions</h3>
                <ul>
                    <li className="confidentContainer">
                        <span>Confident</span>
                        <FaRegSmileWink/>
                    </li>
                    <li className="joyContainer">
                        <span>Joy</span>
                        <FaRegGrinStars/>
                    </li>
                    <li className="tentativeContainer">
                        <span>Tentative</span>
                        <FaRegSmileBeam/>
                    </li>
                    <li className="analyticalContainer">
                        <span>Analytical</span>
                        <FaRegMeh/>
                    </li>
                    <li className="fearContainer">
                        <span>Fear</span>
                        <FaRegGrimace/>
                    </li>
                    <li className="angerContainer">
                        <span>Anger</span>
                        <FaRegAngry/>
                    </li>
                    <li className="sadnessContainer">
                        <span>Sadness</span>
                        <FaRegSadTear/>
                    </li>
                </ul>
            </ToneContainer>
        </>
    )
}