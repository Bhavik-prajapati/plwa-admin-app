import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }

  getallblogs(){
    return this.http.get("http://localhost:5000/blogs/");
  }
  getallusers(){
    return this.http.get("http://localhost:5000/users/");
  }

}
