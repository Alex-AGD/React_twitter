import React, { Component } from 'react';
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

export default class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: [
                { label: 'Impedit maxime minima nesciunt numquam quos.', important: false, like: false, id: 1 },
                { label: 'Ab accusamus commodi cupiditate.', important: true, like: false, id: 2 },
                { label: 'Lorem ipsum dolor sit amet.', important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'

        };
        this.deleteItem = this.deleteItem.bind (this);
        this.addItem = this.addItem.bind (this);
        this.onToggleImportant = this.onToggleImportant.bind (this);
        this.onToggleLike = this.onToggleLike.bind (this);
        this.onUpdateSearch = this.onUpdateSearch.bind (this);
        this.onFilterSelect = this.onFilterSelect.bind (this);

        this.maxId = 4;
    }

    addItem (body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState (({ data }) => {
            const newArr = [ ...data, newItem ];
            return {
                data: newArr
            }
        })
    }


    deleteItem (id) {
        this.setState (({ data }) => {
            const index = data.findIndex (elem => elem.id === id)

            const newArr = [ ...data.slice (0, index), ...data.slice (index + 1) ];
            return {
                data: newArr
            }
        });
    }


    onToggleImportant (id) {
        this.setState (({ data }) => {
            const index = data.findIndex (elem => elem.id === id);

            const old = data[ index ];
            const newItem = { ...old, important: !old.important }

            const newArr = [ ...data.slice (0, index), newItem, ...data.slice (index + 1) ];

            return {
                data: newArr
            }
        })
    }

    onToggleLike (id) {
        this.setState (({ data }) => {
            const index = data.findIndex (elem => elem.id === id);

            const old = data[ index ];
            const newItem = { ...old, like: !old.like }

            const newArr = [ ...data.slice (0, index), newItem, ...data.slice (index + 1) ];

            return {
                data: newArr
            }
        })
    }

    searchPost (items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter ((item) => {
            return item.label.indexOf (term) > -1
        })
    }

    filterPost (items, filter) {
        if (filter === 'like') {
            return items.filter (item => item.like)
        } else {
            return items;
        }

    }

    onUpdateSearch (term) {
        this.setState ({ term })
    }
    onFilterSelect (filter){
        this.setState ({ filter })

    }

    render () {
        const { data, term, filter } = this.state

        const likes = data.filter (item => item.like).length;
        const allPost = data.length

        const visiblePost = this.filterPost (this.searchPost (data, term), filter);

        return (
            <AppBlock>
                <AppHeader likes={ likes }
                           allPost={ allPost }/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={ this.onUpdateSearch }
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={ visiblePost }
                    onDelete={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleLike={ this.onToggleLike }
                />
                <PostAddForm
                    onAdd={ this.addItem }/>
            </AppBlock>
        )
    }
}





