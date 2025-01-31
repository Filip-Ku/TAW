import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
 providedIn: 'root'
})
export class DataService {

 private url = 'http://localhost:3100';

 constructor(private http: HttpClient) {
 }

 getAll() {
   const headers = new HttpHeaders({
     'Cache-Control': 'no-cache',
     'Expires': '0',
   });

   return this.http.get(this.url + '/api/posts', { headers });
 }


 addPost(post: { title: string, text: string,image: string }) {
     console.log('addPost() w DataService zostało wywołane z danymi:', post);
     const newPost = {
       title: post.title,
       text: post.text,
       image: post.image
     };
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.post<any>(this.url + '/api/post/', newPost, { headers });
   }

 getById(id: string) {
  return this.http.get<any>(this.url + '/api/post/' + id);
 }

}


