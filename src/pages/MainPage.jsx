import styled from 'styled-components';
import Header from '../components/Header';
import RoomList from '../components/RoomList';
import data from '../data.json'

const Wrapper = styled.div`

`;

function MainPage(props) {
    return (
        <Wrapper>
            <Header />
            <RoomList rooms={data} />
        </Wrapper>
    )
}

export default MainPage;