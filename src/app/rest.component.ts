import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

export class Article {
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
}
@Component({
    selector: 'rest-data',
    templateUrl: './rest.component.html',
    styles: ['p { word-wrap: break-word; }']
})

export class RestComponent {
    apiUrl = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=55606cda3461465eace27bd1ee9f86ae';
    articleArray: Article[];
    constructor(private http: Http) {
        this.getArticles();
        this.getData();
    }

    getData(): Observable<Article[]>{
        return this.http.get(this.apiUrl)
        .map((response: Response) => {
            return <Article[]>response.json();
        })
    }

    getArticles(): void {
        this.getData().subscribe(
            resultArray => {
                this.articleArray = resultArray['articles']
            });
    }
}