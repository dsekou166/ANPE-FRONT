import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
 apiUrl = 'http://localhost:8080/postuler';
  env=environment
  information = []
  constructor(private http:HttpClient,private toast:ToastController) { }
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

  postuler1(iddemandeur: any, idannonce: any){
    // Vérifier si une postulation pour cette annonce et ce demandeur existe déjà
    const url = `${this.apiUrl}?idannonce=${idannonce}&iddemandeur=${iddemandeur}`;
    this.http.get(url).subscribe(data => {
      this.information = data as []
      if (this.information.length > 0) {
        // Afficher un message d'erreur si une postulation existe déjà
        this.retourmessage1()
      } else {
        // Ajouter une nouvelle postulation dans la base de données
        const postulation = {
          idannonce: idannonce,
          iddemandeur: iddemandeur,
          
        };
        this.http.post(this.apiUrl, postulation).subscribe(() => {
         this.retourmessage2()
        });
      }
    });
  }

  async retourmessage1() {
    let toast = this.toast.create({
      message: 'Vous avez dejà postuler pour cette annonce.',
      duration: 3000,
      color:'danger',
      position: 'bottom'
    });
    (await toast).present();
  } 

  async retourmessage2() {
    let toast = this.toast.create({
      message: 'Votre demande a été prise en compte',
      duration: 3000,
      color:'success',
      position: 'bottom'
    });
    (await toast).present();
  } 
}

