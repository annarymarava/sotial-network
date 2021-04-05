import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialod}>
            <div>
                <img className={s.photo} src='http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1' />
            </div>
            <div>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.item}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;