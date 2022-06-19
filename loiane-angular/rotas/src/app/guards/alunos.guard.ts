import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if(state.url.includes('editar')) {
    //   alert("Usuário não pode editar formulário!");
    //   return false;
    // }

    return new Observable<boolean>(s => {
      if (state.url.includes('editar')) {
        setTimeout(() => {
          alert("Usuário não pode editar formulário!");
          s.next(false);
        }, 4000);
      }
      else s.next(true);
    });
  }

}
