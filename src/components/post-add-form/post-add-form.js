import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PostAddForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        // отменяем стадрт повед браузера
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render () {

        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}    >
                <input type="text"
                       placeholder="Ваш текст"
                       className="form-control new-post-label"
                       onChange={this.onValueChange}
                       //контролируемый элемент для очищ input
                       value={this.state.text}

                />

                <Button type="submit"
                        color="success"
                        >Добавить </Button>
            </form>
        )
    }
}
