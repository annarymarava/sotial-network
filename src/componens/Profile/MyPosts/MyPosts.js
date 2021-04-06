import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer-profile';

const MyPosts = (props) => {
    let newPostText = props.profilePage.newPostText;
    let postElements = props.profilePage.postsData.map(item => <Post message={item.message} like={item.likesCount} />)

    let addPost = () => {
        props.addPost();
    }
    let postChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            My posts
            <div className={s.description}>
                <textarea onChange={postChange} value={newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;