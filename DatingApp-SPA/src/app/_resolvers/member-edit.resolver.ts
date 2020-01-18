import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor( private userServicce: UserService, private authService: AuthService,
                 private router: Router, private alertifly: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userServicce.getUser(this.authService.decodedToken.nameid).pipe(
            catchError( error => {
                this.alertifly.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }

}
