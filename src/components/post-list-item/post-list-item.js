import React from 'react';
import './post-list-item.css'

const PostListItem = () => {
    return (
        <div>
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item">
                    Hello world!!!
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-star btm-sm">

                        <i className="fa fa-star"/>
                    </button>
                    <button type="button"
                            className="btn-trash btm-sm">

                        <i className="fa fa-trash-o"/>
                    </button>
                    <i className="fa fa-heart"/>
                </div>
            </li>
        </div>
    )
}

export default PostListItem;