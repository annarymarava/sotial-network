import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers/props.pageSize);
        let pages = [];
        for (let i =1; i<=pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p=> {
                       return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})}
                </div>
                {props.users.map(u =>
                    <div key={u.id} className={s.container}>
                        <div>
                            <div>
                                <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}></img>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => (props.unFollow(u.id))}>Unfollow</button>
                                    : <button onClick={() => (props.follow(u.id))}>Follow</button>
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

export default Users;