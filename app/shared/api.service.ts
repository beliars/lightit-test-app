import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';
import { Comment } from './comment.model';
import { User } from './user.model';

@Injectable()

export class ApiService {

    private apiUrl = 'http://smktesting.herokuapp.com/api/';
 
    constructor(private http: Http) {
    }

    getProducts(): Promise<Product[]> {
    	return this.http.get(this.apiUrl + 'products/')
            .toPromise()
    		.then(res => res.json())
    		.catch(this.handleError);
    }

    getComments(id): Promise<Comment[]> {
    	return this.http.get(this.apiUrl + 'reviews/' + id)
            .toPromise()
    		.then(res => res.json())
    		.catch(this.handleError);
    }

    regUser(userData: any): Promise<any> {
    	let body = JSON.stringify(userData);
    	let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
    	return this.http.post(this.apiUrl + 'register/', body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError); 
    }

    loginUser(userData: any): Promise<any> {
    	let body = JSON.stringify(userData);
    	let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
    	return this.http.post(this.apiUrl + 'login/', body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError); 
    }

    private handleError(error: Error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    }

}