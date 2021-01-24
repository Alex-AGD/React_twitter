import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = ({ posts }) => {
//{...item} ES8
// const {id, ...itemProps} = item
    const elements = posts.map ((item) => {
        return (
            <li className='list-group-item' key={ item.id }>
                <PostListItem
                    label={ item.label }
                    important={ item.important }/>
            </li>
        )
    })

    return (
        <div>
            <ListGroup className="app-list">
                { elements }
            </ListGroup>
        </div>
    )
}

export default PostList