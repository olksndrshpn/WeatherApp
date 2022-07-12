import React, {useState} from 'react';
import MyInput from "../Components/Input/MyInput";
import MyButton from "../Components/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.imgUrl}
                onChange={e => setPost({...post, imgUrl: e.target.value})}
                type="text"
                placeholder="Категорія"/>
 <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Тіло"/>

            <MyInput
                value={post.category}
                onChange={e => setPost({...post, category: e.target.value})}
                type="text"
                placeholder="Категорія"/>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder=""
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>З Богом!</MyButton>
        </form>
    );
};

export default PostForm;
