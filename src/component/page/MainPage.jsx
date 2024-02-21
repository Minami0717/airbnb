import data from '../../data.json'
import RoomList from '../list/RoomList';

function MainPage(props) {
    return (
        <RoomList rooms={data}></RoomList>
    )
}

export default MainPage;