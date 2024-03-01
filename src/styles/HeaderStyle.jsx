import styled from "styled-components";

export const HeaderWrap = styled.div`
    height: 168px;
    border-bottom: 1px solid grey;

    .top {
        display: flex;
        justify-content: space-between;
        height: 80px;
        align-items: center;
    }
    .search {
        border: 1px solid #dddddd;
        border-radius: 32px;
        width: 850px;
        height: 66px;
    }
    .search-wrap {
        display: flex;
        justify-content: center;
    }
`;