import React from 'react';
import { Button } from 'reactstrap';

const PostAddForm = ({onAdd}) => {
    return (
        <div>
            <div className="bottom-panel d-flex">
                <input type="text"
                       placeholder="Ваш текст"
                       className="form-control new-post-label"/>

                <Button type="submit"
                        color="success"
                        onClick={() => onAdd('Hello')}>Добавить </Button>
            </div>
        </div>
    )
}
export default PostAddForm