import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import {
    concatMap,
    debounceTime, delay,
    distinctUntilChanged,
    exhaustMap,
    filter,
    map,
    mergeMap,
    switchMap,
    tap
} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private http: HttpClient,
    ) {}

    ngOnInit() {
        // this.doJobCallbacks();
        // this.doJobPromises();
        // this.doJobAsyncAwait();
        // this.doJobAsyncAwaitNonIIFE();
        // this.doJobAsyncAwaitIIFE();
        // this.doJobObservable();
        // this.subscribeToSSE();
    }

    ngAfterViewInit() {
        // this.liveSearch();
    }

    asyncFn = (counter: number, callback: (counter: number) => void): void => {
        setTimeout(() => {
            callback(++counter);
        }, 1000);
    }

    promiseFn = (counter: number): Promise<number> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(++counter);
            }, 1000);
        });
    }

    observableFn = (counter: number): Observable<number> => {
        // return new Observable(obs => {
        //     setTimeout(() => {
        //         obs.next(++counter);
        //         obs.complete();
        //     }, 1000);
        // });
        return of(++counter).pipe(
            delay(1000),
        );
    }

    doJobCallbacks = (): void => {
        this.asyncFn(0, (counter: number) => {
            console.log(`${counter}. callback executed`);
            this.asyncFn(counter, (counter: number) => {
                console.log(`${counter}. callback executed`);
                this.asyncFn(counter, (counter: number) => {
                    console.log(`${counter}. callback executed`);
                });
            });
        });
    }

    doJobPromises = (): void => {
        this.promiseFn(0)
            .then(counter => {
                console.log(`${counter}. promise resolved`);
                return this.promiseFn(counter);
            })
            .then(counter => {
                console.log(`${counter}. promise resolved`);
                return this.promiseFn(counter);
            })
            .then(counter => {
                console.log(`${counter}. promise resolved`);
            });
    }

    doJobAsyncAwait = async (): Promise<void> => {
        let counter = 0;
        counter = await this.promiseFn(counter);
        console.log(`${counter}. promise resolved`);

        counter = await this.promiseFn(counter);
        console.log(`${counter}. promise resolved`);

        counter = await this.promiseFn(counter);
        console.log(`${counter}. promise resolved`);
    }

    // Immediately Invoked Function Expression
    doJobAsyncAwaitIIFE = async (): Promise<void> => {
        const start = performance.now();

        const first = this.promiseFn(1);
        const second = this.promiseFn(2);
        const third = await first + await second;

        console.log(`IIFE counter = ${third}, time elapsed = ${Math.round((performance.now() - start) / 1000)}s`);
    }

    doJobAsyncAwaitNonIIFE = async (): Promise<void> => {
        const start = performance.now();

        const first = await this.promiseFn(1);
        const second = await this.promiseFn(2);
        const third = first + second;

        console.log(`non IIFE counter = ${third}, time elapsed = ${Math.round((performance.now() - start) / 1000)}s`);
    }

    doJobObservable = (): void => {
        this.observableFn(0)
            .pipe(
                mergeMap(counter => {
                    console.log(`${counter}. observable completed`);
                    return this.observableFn(counter);
                }),
                mergeMap(counter => {
                    console.log(`${counter}. observable completed`);
                    return this.observableFn(counter);
                }),
                mergeMap(counter => {
                    console.log(`${counter}. observable completed`);
                    return this.observableFn(counter);
                }),
            ).subscribe();
    }

    // switchMap
    // mergeMap
    // concatMap
    // exhaustMap
    private liveSearch(): void {
        const el: HTMLInputElement = this.document.querySelector('#my-input') as HTMLInputElement;
        if(el) {
            fromEvent(el, 'input').pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                filter(str => str.length >= 3),
                debounceTime(500),
                distinctUntilChanged(),
                tap(() => console.log('side effect')),
                switchMap(str => this.http.get('api/search', {
                        params: new HttpParams().append('str', str),
                    }),
                ),
            ).subscribe(result => {
                console.log(result);
            });
        }
    }

    private subscribeToSSE(): void {
        const source = new EventSource('api/sse');
        source.onmessage = (event: MessageEvent) => {
            console.log('sse: ' + event.data);
        };
    }

}
