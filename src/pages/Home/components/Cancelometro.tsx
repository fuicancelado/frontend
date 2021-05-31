import { CancelometroContainer } from "../styles";
import { FaRegLaugh, FaRegSadCry } from 'react-icons/fa'
import { SearchResult } from "..";
import { IsCancelado, RenderCancelometerText } from "../../../utils/cancelometro";

interface Props {
    searchResult: SearchResult;
}

export const Cancelometro = ({ searchResult }: Props) => {
    const isCancelado = IsCancelado(searchResult.cancelometer.balance);
    

    return (
        <CancelometroContainer className={ isCancelado ? 'lowScore' : 'highScore'}>
            {isCancelado ? <FaRegSadCry/> : <FaRegLaugh/>}
            <span>{RenderCancelometerText(isCancelado)}</span>
        </CancelometroContainer>
    )
}