import { HttpInterceptorFn } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';
export const authorizeInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const dataService:DataService=inject(DataService);
  const query=dataService.getToken()||"";
  const modifiedReq = req.clone({
    params:req.params.set('auth',query)
  });
  return next(modifiedReq);
};
