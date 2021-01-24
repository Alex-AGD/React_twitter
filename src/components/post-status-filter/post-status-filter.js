import React from 'react';
import './post-status-filter.css'
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline  color="primary" >Все</Button>{' '}
            <Button outline  color="danger">Понравилось</Button>{' '}
        </div>
    )
}

export default PostStatusFilter