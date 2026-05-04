import './LikeButton.css';
import {useState} from 'react'

function LikeButton() {
    const [like, setLike]= useState(0);

    return <button className="like-button"
        onClick= {()=> {
        setLike(like+1)
    }}
    >🤍 좋아요 {like}개
    </button>;
}

export default LikeButton;