import { Component, OnInit } from '@angular/core';

import  {datafake}  from "src/app/data/datafake";

interface Article {
	id: number;
	title: string;
	photo: string;
	description: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	question: Article[] = [];
	cardDescription: string = '';

	constructor() {}

	ngOnInit(): void {
		this.question = datafake;
		const result = datafake.filter((article) => article.id === 1)[0];
		this.cardDescription = result.description;
	}

	filteredQuestions(): Article[] {
		return this.question.filter((q: Article) => q.id >= 2);
	}
}
