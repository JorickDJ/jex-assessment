import { OverlayRef } from "@angular/cdk/overlay";
import { Subject } from "rxjs";

export class DialogRef {
    afterClosed$: Subject<void> = new Subject();

    constructor(public overlayRef: OverlayRef) {}

    close(): void {
        if(this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.afterClosed$.next();
        }
    }
}