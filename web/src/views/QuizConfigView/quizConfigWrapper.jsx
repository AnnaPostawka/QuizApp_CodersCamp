import React, { Component } from "react";
import { Divider } from "antd";

export default class QuizConfigWrapper extends Component {

	render() {
        return (
            <div className={this.props.className ? "content-wrapper "+this.props.className : "content-wrapper"}>
				<Divider className="divider" />
                {this.props.title ? (<h1 className="content-title">{this.props.title}</h1>) : ("")}
                <div>{this.props.children}</div>
            </div>
            );
	}
}