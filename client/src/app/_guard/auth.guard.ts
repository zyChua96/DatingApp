import { Injectable, inject } from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })


// export class authGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     return true;
//   }
// }


export const authGuard = () => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
      map(user => {
          if (user) return true;
          else {
              toastr.error('You shall not pass !');
              return false;
          }
      })
  )
};
