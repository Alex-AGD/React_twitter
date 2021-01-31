import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = ({ posts, onDelete }) => {
//{...item} ES8
    const elements = posts.map ((item) => {
        const {id, ...itemsProps} = item;
        return (
            <li key={id} className='list-group-item' >
                <PostListItem
                    {...itemsProps}
                    onDelete={ () => onDelete(id)}
                  />
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