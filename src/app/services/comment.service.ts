import { Injectable } from '@angular/core';

interface Comment {
  postId: string;
  comment: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: Comment[] = [
      { postId: '64549b5362f53f833c89f6ab', comment: 'Świetny post!', author: 'Jan Kowalski' },
      { postId: '64549b6062f53f833c89f6ac', comment: 'Bardzo ciekawy temat!', author: 'Anna Nowak' },
      { postId: '64549b6362f53f833c89f6ad', comment: 'Zgadzam się, sieć komputerowa jest niezwykle ważna.', author: 'Piotr Wiśniewski' },
      { postId: '64549b6662f53f833c89f6ae', comment: 'Cyberbezpieczeństwo to kluczowy temat!', author: 'Maria Lewandowska' },
      { postId: '64549b6962f53f833c89f6af', comment: 'Algorytmy są wszędzie!', author: 'Tomasz Kaczmarek' },
      { postId: '64549b6d62f53f833c89f6b0', comment: 'Chmura obliczeniowa to przyszłość.', author: 'Karolina Nowakowska' },
      { postId: '64549b7062f53f833c89f6b1', comment: 'Aplikacje mobilne naprawdę ułatwiają życie.', author: 'Krzysztof Mazur' },
      { postId: '64549b7362f53f833c89f6b2', comment: 'Sztuczna inteligencja ma ogromny potencjał.', author: 'Magdalena Wiśniewska' },
      { postId: '64549b7762f53f833c89f6b3', comment: 'Programowanie to naprawdę pasjonująca dziedzina!', author: 'Jakub Kwiatkowski' },
      { postId: '645e329db1979e2e900a94d5', comment: 'Kryptografia to klucz do bezpieczeństwa w sieci.', author: 'Paweł Zieliński' }
  ];

  constructor() { }

 getComments(postId: string): { comment: string, author: string }[] {
     return this.comments
       .filter(comment => comment.postId === postId)
       .map(comment => ({ comment: comment.comment, author: comment.author }));
   }

  addComment(postId: string, newComment: string,newAuthor:string): void {
    this.comments.push({ postId, comment: newComment,author: newAuthor });
  }
}
