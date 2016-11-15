import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';
import { Comment } from './comment.model';
import { User } from './user.model';

@Injectable()

export class ApiService {

    private apiUrl = 'http://smktesting.herokuapp.com/api/';
    private headers = new Headers({'Content-Type': 'application/json',
                                   'Accept': 'application/json' });
    
    private options = new RequestOptions({headers: this.headers});
    
    private loggedUser = {
        username: '',
        token: ''
    }

    getLoggedUser(){
        return this.loggedUser;
    }

    constructor(private http: Http) {
    }

    getProducts(): Promise<Product[]> {
    	return this.http.get(this.apiUrl + 'products/', this.options)
            .toPromise()
    		.then(res => res.json())
    		.catch(this.handleError);
    }

    getComments(id): Promise<Comment[]> {
    	return this.http.get(this.apiUrl + 'reviews/' + id, this.options)
            .toPromise()
    		.then(res => res.json())
    		.catch(this.handleError);
    }

    regUser(userData: User): Promise<any> {
        this.loggedUser.username = userData.username;
    	let body = JSON.stringify(userData);
    	return this.http.post(this.apiUrl + 'register/', body, this.options)
            .toPromise()
            .then(res => {
                this.loggedUser.token = res.json().token;
                return res.json();
            })
            .catch(this.handleError); 
    }

    data;

    loginUser(userData: User): Promise<any> {
        this.loggedUser.username = userData.username;
    	let body = JSON.stringify(userData);
    	return this.http.post(this.apiUrl + 'login/', body, this.options)
            .toPromise()
            .then(res => {
                this.loggedUser.token = res.json().token;
                return res.json()
                })
            .catch(this.handleError);
    }

    private handleError(error: Error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    }

}