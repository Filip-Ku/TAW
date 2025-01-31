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
  private storageKey = 'comments';

  private comments: Comment[] = [

  ];


  constructor() { }

  getComments(postId: string): Comment[] {
      const comments = this.loadCommentsFromStorage();
      return comments.filter(comment => comment.postId === postId);
   }

   addComment(postId: string, newComment: string, newAuthor: string): void {
      const comments = this.loadCommentsFromStorage();
      const newCommentObj: Comment = { postId, comment: newComment, author: newAuthor };
      comments.push(newCommentObj);
      this.saveCommentsToStorage(comments);
    }

    private loadCommentsFromStorage(): Comment[] {
        const storedComments = localStorage.getItem(this.storageKey);
        return storedComments ? JSON.parse(storedComments) : [];
      }

    private saveCommentsToStorage(comments: Comment[]): void {
       localStorage.setItem(this.storageKey, JSON.stringify(comments));
     }

     clearAllComments(): void {
         this.saveCommentsToStorage([]);
         console.log('Wszystkie komentarze zostały usunięte.');
       }
}
