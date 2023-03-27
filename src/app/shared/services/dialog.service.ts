import { Injectable, InjectionToken, Injector } from '@angular/core';
import { Overlay, ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { take } from 'rxjs';
import { DialogConfig } from 'src/app/core/classes/dialog-config.class';
import { DialogRef } from 'src/app/core/classes/dialog-ref.class';

export const DATA_INJECTION_TOKEN = new InjectionToken<string>('DATA_INJECTION_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private readonly overlay: Overlay) {}

  dialogRef: DialogRef

  open<T>(component: ComponentType<T>, config?: DialogConfig): DialogRef {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
    });

    this.dialogRef = new DialogRef(overlayRef);

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, Injector.create({ providers: [{ provide: DATA_INJECTION_TOKEN, useValue: config }]}));
    this.dialogRef.overlayRef.attach(portal);

    this.dialogRef.overlayRef.backdropClick().pipe(take(1)).subscribe(() => this.dialogRef.close());

    return this.dialogRef;
  }
}
