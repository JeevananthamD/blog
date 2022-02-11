import React, { useState } from "react";

import "../styles/AddCommentForm.css";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const addComment = async() => {
        const response = await (await fetch(`/api/articles/${articleName}/add-comment`, {
            method: "post",
            body: JSON.stringify({ username: name, text: comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        setArticleInfo(response);
        setName('');
        setComment('');
    }

    return(
        <div className="commentForm">
            <h3>Add Comment</h3>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={comment} onChange={(e) => setComment(e.target.value)} />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;