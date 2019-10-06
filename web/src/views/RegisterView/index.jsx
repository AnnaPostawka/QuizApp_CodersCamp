import React, { Component } from "react";
import Wrapper from "../../components/LoginRegisterComponents/Wrapper";

import forceRedirect from "../../hoc/forceRedirect";

class RegisterView extends Component {
	render() {
		return <Wrapper view="Register" />;
	}
}

export default forceRedirect("/config", "isLogged", true)(RegisterView);
