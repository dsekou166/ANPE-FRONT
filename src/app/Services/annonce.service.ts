import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
env=environment
  constructor(private http:HttpClient) { }
  creerannonce(nomposte:any,idrecruteur:any,annonce:any,file:any,dossier:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',file)
    data.append('dossier',dossier)

    data.append('annonce', JSON.stringify(annonce).slice(1,JSON.stringify(annonce).lastIndexOf(']')));
    return this.http.post(`http://localhost:8080/api/Annonce/add/${nomposte}/${idrecruteur}`,data);
  }

  getannonce(): Observable<any>{
    return this.http.get(`${this.env.api}/Annonce/list`)
  }
  getannoncebyid(id:any): Observable<any>{
    return this.http.get(`${this.env.api}/Annonce/getannoncebyid/${id}`);
  }

  getannoncebyrecruteur(id:any): Observable<any>{
    return this.http.get(`http://localhost:8080/api/Annonce/getannoncebyidrecruteur/${id}`);
  }

  getdemandeurbyannonce(id:any): Observable<any>{
    return this.http.get(`http://localhost:8080/api/postuler/${id}`);
  }


    postuler(iddemandeur:any, idannonce:any): Observable<any>{
    const data: FormData = new FormData();
    
    return this.http.post(`http://localhost:8080/api/postuler/${iddemandeur}/${idannonce}`,null);
  }

}
