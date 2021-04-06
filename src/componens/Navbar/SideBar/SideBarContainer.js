import { connect } from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        sectionFriends: state.sidebar.sectionFriends, 
    }
}

const mapDispatchToProps = (dispatch) => {

}
const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer;