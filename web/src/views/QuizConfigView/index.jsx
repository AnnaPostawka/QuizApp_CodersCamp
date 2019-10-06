import "antd/dist/antd.css";
import "./quizconfig.css";
import React, { Component } from "react";
import {Button, PageHeader} from "antd";
import QuizOptionWrapper from "./quizOptionWrapper";
import QuizOptionSelect from "./quizOptionSelect";
import QuizOptionRadio from "./quizOptionRadio";
import QuizOptionNumberPicker from "./quizOptionNumberPicker";
import QuizConfigWrapper from "./quizConfigWrapper";

export default class QuizConfigView extends Component {
	constructor(props){
		super(props);
		this.categories=[
			{val:"any", desc:"Any Category"},
			{val:"9", desc:"General Knowledge"},
			{val:"10", desc:"Entertainment: Books"},
			{val:"11", desc:"Entertainment: Film"},
			{val:"12", desc:"Entertainment: Music"},
			{val:"13", desc:"Entertainment: Musicals & Theatres"},
			{val:"14", desc:"Entertainment: Television"},
			{val:"15", desc:"Entertainment: Video Games"},
			{val:"16", desc:"Entertainment: Board Games"},
			{val:"17", desc:"Science & Nature"},
			{val:"18", desc:"Science: Computers"},
			{val:"19", desc:"Science: Mathematics"},
			{val:"20", desc:"Mythology"},
			{val:"21", desc:"Sports"},
			{val:"22", desc:"Geography"},
			{val:"23", desc:"History"},
			{val:"24", desc:"Politics"},
			{val:"25", desc:"Art"},
			{val:"26", desc:"Celebrities"},
			{val:"27", desc:"Animals"},
			{val:"28", desc:"Vehicles"},
			{val:"29", desc:"Entertainment: Comics"},
			{val:"30", desc:"Science: Gadgets"},
			{val:"31", desc:"Entertainment: Japanese Anime & Manga"},
			{val:"32", desc:"Entertainment: Cartoon & Animations"}		
		];

		this.difficulties=[
			{val:"any", desc:"any"},
			{val:"easy", desc:"easy"},
			{val:"medium", desc:"medium"},
			{val:"hard", desc:"hard"}
		]

		this.questionTypes=[
			{val:"any", desc:"any"},
			{val:"multiple", desc:"multiple choice"},
			{val:"boolean", desc:"true/false"}
		]

		this.state = {
			questionsNumber: 10,
			category: "any",
			difficulty: "any",
			type: "any"
		};
		this.baseUrl = "https://opentdb.com/api.php?";
	}

	/*onFromSubmit(e) {
		e.preventDefault();
	}*/

	onConfirmButtonClick(){
		console.log(this.state);
		console.log(this.buildApiUrlFromState());
	}

	onConfigOptionChange(key,value){
		if(typeof key !== "string"){
			throw new TypeError("config option key must be a string");
		}
		this.setState({[key]: value});
	}

	buildApiUrlFromState(){
		let url = this.baseUrl;
		url+="amount="+(this.state.questionsNumber);
		if (this.state.category && this.state.category!=="any"){
			url+="&category="+encodeURIComponent(this.state.category);
		}
		if (this.state.difficulty && this.state.difficulty!=="any"){
			url+="&difficulty="+encodeURIComponent(this.state.difficulty);
		}
		if (this.state.type && this.state.type!=="any"){
			url+="&type="+encodeURIComponent(this.state.type);
		}
		return url;
	}

	render() {
		return (
		<div className="layout">
			<PageHeader title="Back" className="back" onBack />
			<QuizConfigWrapper title="Quiz Configuration">
				<QuizOptionWrapper title="Number of questions">
					<QuizOptionNumberPicker
									min={1}
									max={50}
									default={10}
									optionKey="questionsNumber"
									onOptionChange={this.onConfigOptionChange.bind(this)}
					/>
				</QuizOptionWrapper>

				<QuizOptionWrapper title="Category">
					<QuizOptionSelect 
									optionKey="category"
									selected={this.state.category}
									options={this.categories}
									onOptionChange={this.onConfigOptionChange.bind(this)}
					/>
				</QuizOptionWrapper>

				<QuizOptionWrapper title="Difficulty">
					<QuizOptionRadio 
									optionKey="difficulty"
									selected={this.state.difficulty}
									options={this.difficulties}
									onOptionChange={this.onConfigOptionChange.bind(this)} 
					/>
				</QuizOptionWrapper>

				<QuizOptionWrapper title="Question type">
					<QuizOptionRadio
									optionKey="type"
									selected={this.state.type}
									options={this.questionTypes}
									onOptionChange={this.onConfigOptionChange.bind(this)} 
					/>
				</QuizOptionWrapper>

				<QuizOptionWrapper>
					<Button type="primary" block="true" onClick={this.onConfirmButtonClick.bind(this)}>
						Create quiz!
					</Button>
				</QuizOptionWrapper>
			</QuizConfigWrapper>
		</div>
		);
	}
}