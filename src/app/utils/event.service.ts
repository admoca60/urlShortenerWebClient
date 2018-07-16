// Used to store key value pairs
interface Event {
    key: string;
    value: any;
}

// Start of Event Service code
import { Observable, Subject } from "rxjs";

import { Injectable } from "@angular/core";
import { filter, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class EventService {
    protected _eventsSubject = new Subject<Event>();

    constructor() {
    }

    public broadcastEvent(key: string, value: any) {
        this._eventsSubject.next({ key, value })
    }

    public getEvent(key: string): Observable<Event> {
        return this._eventsSubject.asObservable()
            .pipe(
                filter(e => e.key === key),
                map(e => e)
            );
    }
}
