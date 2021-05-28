import { FC }  from "react";
import { SearchResult } from "..";
import { CommentsContainer, CommentsList, CommentItem } from "../styles"; 

interface Props {
    searchResult: SearchResult
}

export const Comments = ({ searchResult }: Props) => {
    return (
        searchResult.tones ?
            <CommentsContainer>
                <h3>Comentários (4 de {searchResult.results.length})</h3>
                <CommentsList className="row">
                    {searchResult.results.slice(0, 4).map(comment => (
                        <CommentItem key={comment.id} className="col-6">
                            <div className="imgContainer">
                                <img src={comment.user.profile_image} alt="" />
                            </div>
                            <div className="infoContainer">
                                <h5>"{comment.user.name}" diz...</h5>
                                <p className="commentText">{comment.original_text}</p>
                                <div className="commentItemFooter">
                                    <div className="badgeContainer">
                                        {comment.tones && comment.tones.map(tone => {
                                            return <span key={tone.tone_id} className={`badge ${tone.tone_id}Badge`} >{tone.tone_name}</span>
                                        })}
                                    </div>
                                    <span>
                                        {new Intl.DateTimeFormat (
                                                'en-US',
                                                { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false}
                                            ).format(new Date(comment.tweet.created_at))
                                        }
                                    </span>
                                </div>
                            </div>
                        </CommentItem>
                    ))}
                </CommentsList>
                {/* <ReactTooltip /> */}
            </CommentsContainer>
        : <></>
    )
}