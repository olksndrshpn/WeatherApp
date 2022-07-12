import React from "react";
import {router} from "react";
import MyButton from "./button/MyButton";

const PostItem = (props) => {
    return(
    <div className="post">
        <div className="post_content">
<a href={props.post.link}>{props.post.link}</a>
<p>{props.post.title}</p>
<p>{props.post.source_id}</p>
<p>{props.post.keywords}</p>
<p>{props.post.creator}</p>
<img src={props.post.image_url} alt={props.post.image_url}></img>
<p>{props.post.content}</p>
<p>{props.post.description}</p>

<div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Читай
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Видаляй
                </MyButton>
            </div>
        </div>
    </div>
    )
}
export default PostItem;

