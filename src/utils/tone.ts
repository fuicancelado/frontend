import { FaRegSmileWink, FaRegGrinStars, FaRegSmileBeam, FaRegMeh, FaRegGrimace, FaRegAngry, FaRegSadTear, FaQuestionCircle} from 'react-icons/fa'

export const renderTranslatedTone = (tone_name: string) => {
    switch (tone_name) {
        case 'Confident':
            return 'Confiança'
        case 'Fear':
            return 'Medo'
        case 'Anger':
            return 'Raiva'
        case 'Joy':
            return 'Prazer'
        case 'Analytical':
            return 'Pensativo'
        case 'Sadness':
            return 'Tristeza'
        case 'Tentative':
            return 'Hesitação'
        default:
            return ''
    }
};


export const renderToneHelpText = (tone_id: string) => {
    switch (tone_id) {
        case 'confident':
            return 'O grau de certeza de uma pessoa.'
        case 'fear':
            return 'Uma resposta ao perigo iminente. É um mecanismo de sobrevivência que é uma reação a algum estímulo negativo. Pode ser um cuidado leve ou uma fobia extrema.'
        case 'anger':
            return 'Provocado por injustiça, conflito, humilhação, negligência ou traição. Se a raiva estiver ativa, o indivíduo ataca o alvo, verbal ou fisicamente. Se a raiva for passiva, a pessoa silenciosamente fica emburrada e sente tensão e hostilidade.'
        case 'joy':
            return 'Alegria ou felicidade tem tons de gozo, satisfação e prazer. Existe uma sensação de bem-estar, paz interior, amor, segurança e contentamento.'
        case 'analytical':
            return 'O raciocínio e a atitude analítica de uma pessoa sobre as coisas'
        case 'sadness':
            return 'Indica um sentimento de perda e desvantagem. Quando uma pessoa pode ser observada como quieta, menos enérgica e retraída, pode-se inferir que existe tristeza.'
        case 'tentative':
            return 'O grau de inibição de uma pessoa.'
        default:
            return ''
    }
};