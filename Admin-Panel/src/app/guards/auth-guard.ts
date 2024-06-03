import { inject } from "@angular/core"
import { AuthenticationService } from "../services/authentication.service"
import { Router } from "@angular/router";

export const CanAccess=()=>{
    const authService=inject(AuthenticationService)
    const route=inject(Router);

    if(authService.isAuthenticated()){
        return true
    }else{
        route.navigateByUrl("")
        return false
    }

}