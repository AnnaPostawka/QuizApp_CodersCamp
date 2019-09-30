import React from "react";
import QuizList from "./QuizList";
import { connect } from "react-redux";

class Quiz extends React.Component {
    componentDidMount() {

    }

    mapStateToProps(state) {

    }

    mapDispatchToProps() {
        return {
            
        }
    }

    render() {
        return <QuizList questionsList={} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)