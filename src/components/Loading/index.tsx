import { Container, CancelometroContainer } from './styles';
import { SyncLoader } from 'react-spinners';
import { SearchResult } from '../../pages/Home';
import { FaChevronDown } from 'react-icons/fa';
import { IsCancelado, RenderCancelometerText } from '../../utils/cancelometro';
import { useEffect, useState } from 'react';

interface LoadingProps {
    setIsLoading: any,
    isLoading: boolean,
    result: SearchResult
}

export function Loading({ setIsLoading, isLoading, result }: LoadingProps) {
    const [isCancelado, setIsCancelado] = useState<boolean>(false)
    const [cancelometer, setCancelometer] = useState(0)

    useEffect(() => {
        if(result.cancelometer){
            setIsCancelado(IsCancelado(result.cancelometer.balance));
            setCancelometer(isCancelado ? (result.cancelometer.balance-1) *100 : (1-result.cancelometer.balance) *100)
        }
    },[result]);

    const handleDetalhesClick = () => {
        const loadingContainer = document.getElementById('loadingContainer');
        loadingContainer?.classList.add("loadingFadeOut");

        setTimeout(function () {
            loadingContainer?.classList.remove("loadingFadeOut");
            setIsLoading(false);            
        }, 500)
    }

    return(
        isLoading ? 
            <Container id="loadingContainer" className={ isCancelado ? "lowScore" : "highScore"}>
            {!result.results ?
                    <>
                        <h3>Verificando Tweets</h3>
                        <SyncLoader size={15} color="#BAB9D2"/>
                    </>
            : result.cancelometer &&
                    <CancelometroContainer>
                        <h3>{RenderCancelometerText(isCancelado!)} ({cancelometer.toFixed(2)}%)</h3>

                        <div className="maisDetalhes" onClick={() => handleDetalhesClick()}>
                            <span>Mais detalhes</span>
                            <FaChevronDown/>
                        </div>
                    </CancelometroContainer>
                }
            </Container>
        :<></>
    )
}