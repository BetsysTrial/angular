import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getUsersList(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
            map(users => users.map((user, index) => {
                    const splitted = user.name.split(' ');

                    return {
                        ...user,
                        name: splitted[0],
                        surname: splitted[1],
                        isBlocked: index % 3 === 0,
                    };
                }),
            )
        );
    }
}
