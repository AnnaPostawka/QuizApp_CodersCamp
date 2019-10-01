import React, { Component } from "react";
import './LoginView.css';
import TopBar from '../../components/TopBarLoginView'
import Form from '../../components/FormView';
import Footer from '../../components/Footer';
class LoginView extends Component {

	render() {
		return (
			<div className="loginView">
				<TopBar title="Testownik" description="description" />
				<Form />
				<Footer />
			</div>
		);
	}
}
export default LoginView;



