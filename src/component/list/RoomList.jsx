import styled from "styled-components";
import RoomListItem from "./RoomListItem";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
`;

function RoomList(props) {
    const { rooms, onClickItem } = props;

    return (
        <Wrapper>
            {rooms.map((room) => {
                return (
                    <RoomListItem
                        key={room.roomId}
                        room={room}
                        onClick={() => {
                            onClickItem(room);
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default RoomList;