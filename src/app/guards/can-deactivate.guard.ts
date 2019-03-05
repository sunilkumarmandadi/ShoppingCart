import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
canDeactivate: () => Observable<Boolean> | Promise<Boolean> | Boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
canDeactivate() {
if (confirm('Are you sure you want to navigate out of this page?')) {
return true;
} else {
  return false;
}
}
}
