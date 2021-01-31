import React, { Component } from 'react';
import './post-list-item.css'


export default class PostListItem extends Component {
    constructor (props) {
        super (props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind (this);
        this.onLike = this.onLike.bind (this);
    }

    onImportant () {
        this.setState (({ important }) => ({
            important: !important
        }))
    }

    onLike () {
        this.setState (({ like }) => ({
            like: !like
        }))
    }

    render () {

        const { label, onDelete } = this.props
        const { important, like } = this.state
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <div>
                <div className={ classNames }>
                <span className='app-list-item-label'
                      onClick={ this.onLike }>
                    { label }
                </span>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type='button'
                                className='btn-star btm-sm'
                                onClick={ this.onImportant }>
                            <i className='fa fa-star'/>
                        </button>
                        <button
                            onClick={onDelete}
                            type='button'
                            className='btn-trash btm-sm'>
                            <i className='fa fa-trash-o'/>
                        </button>

                        <i className='fa fa-heart'/>

                    </div>
                </div>
            </div>
        )
    }
}
