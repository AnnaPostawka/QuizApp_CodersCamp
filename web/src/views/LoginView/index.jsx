import React, { Component } from "react";
import Wrapper from "../../components/LoginRegisterComponents/Wrapper";
import forceRedirect from "../../hoc/forceRedirect"

class LoginView extends Component {
	render() {
		return <Wrapper view="Login" />;
	}
}
export default forceRedirect("/config","isLogged", true)(LoginView);
