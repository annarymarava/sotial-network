import Friends from './Friends/Friends';
import s from './SideBar.module.css';

const SideBar = (props) => {
    let friendsArr = props.sectionFriends.map( item => <Friends name={item.name} id={item.id} photo={item.photo} />)
    return (
        <div className={s.container}>
            {friendsArr}
        </div>
    )
}

export default SideBar;