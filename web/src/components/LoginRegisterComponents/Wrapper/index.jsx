import React from 'react';
import "./Wrapper.css";
import TopBar from "../TopBar";
import Form from "../Form";
import Footer from "../Footer";

const Views = {
    Login: {
        title: "Testownik",
        description: "description",
        formType: "Sign In",
        footerText: "Don't have an account yet?",
        linkText: "Sign Up",
        linkPath: "/register"
    },
    Register: {
        title: "Testownik",
        description: "description",
        formType: "Sign Up",
        footerText: " Do you have an account?",
        linkText: "Sign In",
        linkPath: "/",
        isRegister: true
    }
}

const Wrapper = ({ view }) => {
    const { title, description, formType, footerText, linkText, linkPath, isRegister } = Views[view];
    return (
        <div className="wrapper">
            <TopBar title={title} description={description} />
            <Form formType={formType} isRegister={isRegister} />
            <Footer text={footerText} linkText={linkText} linkPath={linkPath} />
        </div>
    )
}
export default Wrapper;