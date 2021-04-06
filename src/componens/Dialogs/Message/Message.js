import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div>
                <img className={s.photo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxpj2OOGlOnaXrRmZQ0-s3nOhCBwJEFfwZQ&usqp=CAU'/>
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Message;