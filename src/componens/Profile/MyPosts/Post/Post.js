import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://archilab.online/images/1/123.jpg'></img>
            {props.message}
            <div>
                <span>
                    like {props.like}
                </span>
            </div>
        </div>
    )
}

export default Post;