import s from './Users.module.css';
const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, followed: false, fullName: 'Dima', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, fullName: 'Larisa', status: 'I am a boss too', location: { city: 'Moskow', country: 'Russia' } },
            { id: 3, followed: false, fullName: 'Dasha', status: 'Hi', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 4, followed: true, fullName: 'Anna', status: 'Privet', location: { city: 'Warshava', country: 'Poland' } }
        ])
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id} className={s.container}>
                    <div>
                        <div>
                            <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png'></img>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => (props.unFollow(u.id))}>Unfollow</button>
                                : <button onClick={() => (props.follow(u.id))}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <span>{u.fullName}, </span>
                        <span>{u.status},</span>
                    </div>
                    <div>
                        <span>{u.location.country}, </span>
                        <span>{u.location.city}</span>
                    </div>
                </div>)}
        </div>
    )
}

export default Users;