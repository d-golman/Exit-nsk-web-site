import React, { Component } from 'react'
import './error.sass'
class Error extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (!this.state.error) {
            return (this.props.children)
        }
        else {
            return (
                <div id="error">
                    <h2>Что-то пошло не так</h2>
                    <div onClick={() => window.location.reload()} className="btn btn-dark">Обновить</div>
                </div>
            )
        }
    }
}


export default Error
