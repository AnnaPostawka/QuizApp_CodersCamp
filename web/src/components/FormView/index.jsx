import React, { Component } from 'react';
import { Button } from 'antd';

import './FormView.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="formView">
                <h2 className="formView__title">Sign In</h2>
                <form className="formView__form form">
                    <div className="form__group">
                        <input
                            className="form__input"
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required />
                        <span className="form__span"></span>
                        <label
                            className="form__label"
                            htmlFor="username">Username</label>
                    </div>
                    <div className="form__group">
                        <input
                            className="form__input"
                            id="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required />
                        <span className="form__span"></span>
                        <label
                            className="form__label"
                            htmlFor="password">Password</label>
                    </div>
                    <Button htmlType="submit" size="large" block >Sign In</Button>
                </form>
            </div>
        )
    }
}
export default Form;