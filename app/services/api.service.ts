import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../shared/product.model';
import { Comment } from '../shared/comment.model';
import { User } from '../shared/user.model';

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

    regUser(regData): Promise<any> {
        regData.username = regData.username.trim(); 
        this.loggedUser.username = regData.username;
    	let body = JSON.stringify(regData);
    	return this.http.post(this.apiUrl + 'register/', body, this.options)
            .toPromise()
            .then(res => {
                this.loggedUser.token = res.json().token;
                return res.json();
            })
            .catch(this.handleError); 
    }

    loginUser(loginData): Promise<any> {
        loginData.username = loginData.username.trim(); 
        this.loggedUser.username = loginData.username;
    	let body = JSON.stringify(loginData);
    	return this.http.post(this.apiUrl + 'login/', body, this.options)
            .toPromise()
            .then(res => {
                this.loggedUser.token = res.json().token;
                return res.json()
                })
            .catch(this.handleError);
    }

    postComment(id: number, commentData: any, user: any): Promise<any> {
        commentData.text = commentData.text.trim();
        let body = JSON.stringify(commentData);
        let headers = new Headers({'Content-Type': 'application/json',
                                   'Accept': 'application/json',
                                    'Authorization': 'Token ' + user.token});
        let options = new RequestOptions({headers: headers});                         
        return this.http.post(this.apiUrl + 'reviews/' + id, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError); 
    }

    private handleError(error: Error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    }

}