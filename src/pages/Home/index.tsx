import React, { FC, useEffect, useState } from 'react';
import { Container, SearchContainer, TitleContainer, ToneCard, ScoreContainer, ToneContainer, ToneList, CommentsContainer, CommentsList, CommentItem, CancelometroContainer } from "./styles";
import { SearchInput } from '../../components/SearchInput';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MainLogo from "../../assets/img/main-logo.png";
import { api } from "../../services/api";
import { Loading } from '../../components/Loading';

import { Tones } from './components/Tones';
import { Comments } from './components/Comments';
import { ToneDescriptionModal } from './components/ToneDescriptionModal';
import { Cancelometro } from './components/Cancelometro';

export interface User {
    name: string,
    profile_image: string
}

export interface Tone {
    score: number,
    tone_id: string,
    tone_name: string
}

export interface Tweet {
    created_at: Date,
    url: string
}

export interface TwitterResult {
    id: number,
    original_text: string,
    user : User,
    tweet: Tweet,
    tones: Tone[]
}

export interface Cancelometer { 
    balance: number
}

export interface SearchResult {
    results: TwitterResult[],
    tones: Tone[],
    cancelometer: Cancelometer
}

export const Home: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState<SearchResult>({} as SearchResult);
    const [isLoading, setIsLoading] = useState(false);
    const [isToneDescriptionModalOpen, setIsToneDescriptionModalOpen] = useState(false);
    const [selectedToneModal, setSelectedToneModal] = useState({} as Tone);

    const handleKeyPress = async (e:any) => {
        if (e.key === 'Enter') {      
            try{
                setSearchResult({} as SearchResult);
                setIsLoading(true);
                var response = await api.get(`search?searchItem=${searchValue}`);
                var data = response.data as SearchResult;
                setSearchResult(data);
            } catch (err){
                toast.error(err.message);
            } finally{ 
                console.log('O vitor é melhor que eu')
            }
        }
    }        

    return (
        <Container>
            <SearchContainer>
                <TitleContainer>
                    <img src={MainLogo} alt="Logo Fui Cancelado" />
                </TitleContainer>
                <SearchInput onChange={setSearchValue} onKeyPress={handleKeyPress} value={searchValue} type="text" />  
            </SearchContainer>
            {searchResult.tones &&
            <>
                <Cancelometro searchResult={searchResult} />
                <Tones searchResult={searchResult} setToneModal={setSelectedToneModal} setModalIsOpen={setIsToneDescriptionModalOpen}/>
            </>
            }
            {searchResult.results &&
                <Comments searchResult={searchResult} />
            }
            <Loading setIsLoading={setIsLoading} isLoading={isLoading} result={searchResult}/>
            <ToastContainer/>
            <ToneDescriptionModal tone={selectedToneModal} onRequestClose={setIsToneDescriptionModalOpen} isOpen={isToneDescriptionModalOpen}/>
        </Container>
    )
}