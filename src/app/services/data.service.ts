import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private posts: { title: string, text: string, image: string, id: string }[] = [
   {
      "title": "Post 1",
      "text": "Baza danych przechowuje informacje w strukturalny sposób.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b5362f53f833c89f6ab"
    },
    {
      "title": "Post 2",
      "text": "Baza danych przechowuje informacje w strukturalny sposób.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b6062f53f833c89f6ac"
    },
    {
      "title": "Post 3",
      "text": "Sieć komputerowa umożliwia przesyłanie danych między urządzeniami.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b6362f53f833c89f6ad"
    },
    {
      "title": "Post 4",
      "text": "Cyberbezpieczeństwo jest ważne w dzisiejszej erze cyfrowej.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b6662f53f833c89f6ae"
    },
    {
      "title": "Post 5",
      "text": "Algorytmy są podstawą rozwiązywania problemów informatycznych.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b6962f53f833c89f6af"
    },
    {
      "title": "Post 6",
      "text": "Chmura obliczeniowa umożliwia przechowywanie danych online.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b6d62f53f833c89f6b0"
    },
    {
      "title": "Post 7",
      "text": "Aplikacja mobilna ułatwia korzystanie z usług na smartfonie.",
      "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      "id": "64549b7062f53f833c89f6b1"
    },
    {
      "title": "Post 8",
    "text": "Sztuczna inteligencja rewolucjonizuje wiele dziedzin, w tym medycynę i transport.",
    "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    "id": "64549b7362f53f833c89f6b2"
  },
  {
    "title": "Post 9",
    "text": "Programowanie to sztuka tworzenia oprogramowania.",
    "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    "id": "64549b7762f53f833c89f6b3"
  },
  {
    "title": "Post 10",
    "text": "Kryptografia zajmuje się zabezpieczaniem danych przed nieautoryzowanym dostępem.",
    "image": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    "id": "645e329db1979e2e900a94d5"
  }];

 getAll() {
     return [...this.posts];
   }

 addPost(post: { title: string, text: string }) {
     console.log('addPost() w DataService zostało wywołane z danymi:', post);
     const newPost = {
       title: post.title,
       text: post.text,
       id: this.generateId(),
       image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'
     };
     this.posts.push(newPost);
     this.posts = [...this.posts];
     console.log('Lista postów po dodaniu:', this.posts);
   }

  private generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}


