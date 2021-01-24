import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
  background-color: #cacac9;
`

const App = () => {

    const data = [
        { label: 'Impedit maxime minima nesciunt numquam quos.', important: false, id: '1' },
        { label: 'Ab accusamus commodi cupiditate.', important: true, id: 'sf' },
        { label: 'Lorem ipsum dolor sit amet.', important: false, id: 'sdf' }
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </AppBlock>
    )
}

export default App