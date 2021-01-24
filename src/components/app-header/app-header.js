import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        color: ${ props => props.colored ? 'red' : 'blue' };
        :hover{
         transition:  0.7s ;
         font-size: 30px;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: #ca8c8c;
    }
`

const CloneHeader = styled (Header)`
    background-color: #FFD700;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const AppHeader = () => {
    return (
        <>
            <Header colored>
                <h1>Alex-AGD</h1>
                <h2>5 записей, из них понравилось 0</h2>
            </Header>
            <CloneHeader>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>

            </CloneHeader>
        </>
    )
}

export default AppHeader;