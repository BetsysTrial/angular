import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getUsersList(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}
