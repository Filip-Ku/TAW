import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
 providedIn: 'root'
})
export class DataService {

 private url = 'http://localhost:3000';

 constructor(private http: HttpClient) {
 }

 getAll() {
   return this.http.get(this.url + '/api/posts');
 }


 addPost(post: { title: string, text: string }) {
     console.log('addPost() w DataService zostało wywołane z danymi:', post);
     const newPost = {
       title: post.title,
       text: post.text,
       id: this.generateId(),
       image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'
     };
   }

   getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
   }


  private generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}


