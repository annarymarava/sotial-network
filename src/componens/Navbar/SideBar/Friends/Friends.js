import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.container}>
            <div>
                <img className={s.photo} src={props.photo} />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;