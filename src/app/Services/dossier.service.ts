import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http:HttpClient) { }

  getdossier(): Observable<any>{
    return this.http.get(`http://localhost:8080/api/Dossier/listdossier`)
  }
  getdossierbyid(id:any): Observable<any>{
    return this.http.get(`http://localhost:8080/api/Dossier/getdossiersbyid/${id}`);
  }

  creerdossier(idadmin:any,adossier:any,ddossier:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('adossier',adossier)
    data.append('ddossier',ddossier)
    return this.http.post(`http://localhost:8080/api/Dossier/dossier/add/${idadmin}`,data);
  }
}
