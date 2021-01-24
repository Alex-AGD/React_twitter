import React from 'react';
import { Button } from 'reactstrap';

const PostAddForm = () => {
    return (
        <div>
            <form className="bottom-panel d-flex">
                <input type="text"
                       placeholder="Ваш текст"
                       className="form-control new-post-label"/>

                <Button type="submit" color="success">Добавить </Button>{' '}
            </form>
        </div>
    )
}
export default PostAddForm