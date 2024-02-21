import styled from "styled-components";

const Wrapper = styled.div`
    
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

const Content = styled.div`
    
`

function RoomListItem(props) {
    const { title, content, date, price, grade } = props.room;
    return (
        <Wrapper>
            <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720" alt="" />
            <Content>
                <p>{title}</p>
                <p>{content}</p>
                <p>{date}</p>
                <p>{price}</p>
                <p>{grade}</p>
            </Content>
        </Wrapper>
    )
}

export default RoomListItem;