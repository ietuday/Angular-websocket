import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getFoods() {
        return this.http.get('food.json').map((res:Response) => res.json());
        // console.log("Response : food",res.json());
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    getBooksAndMovies() {
        return Observable.forkJoin(
        this.http.get('books.json').map((res:Response) => res.json()),
        this.http.get('movies.json').map((res:Response) => res.json())
        );
    }

    createFood(food) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(food);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('food', body, headers).map((res:Response) => res.json());
    }

    updateFood(food) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(food);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.put('food' + food.id, body, headers).map((res:Response) => res.json());
    }

    deleteFood(food) {
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.delete('/api/food/' + food.id);
    }

}
