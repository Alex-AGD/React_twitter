import React from 'react';

const PostAddForm = () => {
    return (
        <div>
            <form className="bottom-panel d-flex">
                <input type="text"
                       placeholder="Ваш текст"
                       className="form-control new-post-label"/>

                <button type="submit"
                        className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        </div>
    )
}
export default PostAddForm