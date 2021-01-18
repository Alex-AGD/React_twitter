import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'

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
            <ul className="app-list list-group">
                { elements }
            </ul>
        </div>
    )
}

export default PostList