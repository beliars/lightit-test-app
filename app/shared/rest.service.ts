import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product.model';
import { Comment } from './comment.model';

@Injectable()

export class RestService {

    private apiUrl = 'http://smktesting.herokuapp.com/api/';
    testUser = {
    		"username": "TestUser123",
    		"password": "qwerty123"
    	};

    constructor(private http: Http) {
    }

    getProducts(): Observable<Product[]> {
    	return this.http.get(this.apiUrl + 'products/')
    		.map(res => res.json())
    		.catch(this.handleError);
    }

    getComments(id): Observable<Comment[]> {
    	return this.http.get(this.apiUrl + 'reviews/' + id)
    		.map(res => res.json())
    		.catch(this.handleError);
    }

    regUser() {
    	let body = JSON.stringify(this.testUser);
    	let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
    	return this.http.post(this.apiUrl + 'register/', body, options)
            .map(res => res.json())
            .catch(this.handleError); 
    }

    private handleError(error) {
        console.log('An error has occurred!', error);
        return Observable.throw(error.message || error);
    }

}