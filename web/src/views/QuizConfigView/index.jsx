import "antd/dist/antd.css";
import React, { Component } from "react";
import QuizOptionWrapper from "./quizOptionWrapper";
import QuizOptionSelect from "./quizOptionSelect";
import QuizOptionRadio from "./quizOptionRadio";

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
		]
	}

	render() {
		return (
		<div>
			<QuizOptionWrapper title="Category">
				<QuizOptionSelect selected={this.categories[0].val} options={this.categories} />
			</QuizOptionWrapper>
			<QuizOptionWrapper title="Difficulty">
				<QuizOptionRadio selected="any" options={[
										{val:"any", desc:"any"},
										{val:"easy", desc:"easy"},
										{val:"medium", desc:"medium"},
										{val:"hard", desc:"hard"}
										]} />
			</QuizOptionWrapper>
			<QuizOptionWrapper title="Choice type">
				<QuizOptionRadio selected="any" options={[
										{val:"any", desc:"any"},
										{val:"multiple", desc:"multiple choice"},
										{val:"boolean", desc:"true/false"}
										]} />
			</QuizOptionWrapper>
		</div>
		);
	}
}