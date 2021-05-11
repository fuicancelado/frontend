import React, { FC, useEffect, useState } from "react";
import { Container, SearchContainer, TitleContainer, ToneCard, ToneContainer, ToneList, CommentsContainer, CommentsList, CommentItem } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { FaRegSmileWink, FaRegGrinStars, FaRegSmileBeam, FaRegMeh, FaRegGrimace, FaRegAngry, FaRegSadTear} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip';

import MainLogo from "../../assets/img/main-logo.png";
import { api } from "../../services/api";

interface SearchResult {
    tones: [{
        score: number,
        tone_id: string,
        tone_name: string,
    }],
    twitter_comments: [{
        created_at: Date,
        id: number,
        text: string,
        user : {
            id: number,
            name: string,
            profile_image_url_https: string
        }
    }]
}


export const Home: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState<SearchResult>({} as SearchResult);

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {            
            api.get(`search/${searchValue}`)
            //.then(response => console.log(response.data));
            .then(response => setSearchResult(response.data));
        }
    }

    useEffect(() => {
        console.log(searchResult)
    },[searchResult]);

    const renderToneIcon = (tone_id:string) => {
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
                <ToneContainer>
                    <h3>Emotions</h3>
                    <ToneList className="row">
                        {searchResult.tones.map(tone => (
                            tone.score > 0 &&
                                <ToneCard key={tone.tone_id} className={`${tone.tone_id}Container col-2`} data-tip={`Score: ${tone.score}`}>
                                    <span>{tone.tone_name}</span>
                                    {renderToneIcon(tone.tone_id)}
                                </ToneCard>
                        ))}
                    </ToneList>
                </ToneContainer>
            }
            {searchResult.twitter_comments &&
                <CommentsContainer>
                    <h3>Resume of Comments</h3>
                    <CommentsList>
                        {searchResult.twitter_comments.map(comment => (
                            <CommentItem key={comment.id}>
                                <div className="imgContainer">
                                    <img src={comment.user.profile_image_url_https} alt="" />
                                </div>
                                <div>
                                    <p>{comment.text}</p>
                                    <span>
                                        {new Intl.DateTimeFormat(
                                            'en-US',
                                            { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false}
                                        ).format(new Date(comment.created_at))}
                                    </span>
                                </div>
                            </CommentItem>
                        ))}
                    </CommentsList>
                </CommentsContainer>
            }
            <ReactTooltip />
        </Container>
    )
}