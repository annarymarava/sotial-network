import axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render = () => {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id} className={s.container}>
                        <div>
                            <div>
                                <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}></img>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => (this.props.unFollow(u.id))}>Unfollow</button>
                                    : <button onClick={() => (this.props.follow(u.id))}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <span>{u.name}, </span>
                            <span>{u.status},</span>
                        </div>
                        <div>
                            <span>{'u.location.country'}, </span>
                            <span>{'u.location.city'}</span>
                        </div>
                    </div>)}
            </div>
        )
    }
}

export default Users;