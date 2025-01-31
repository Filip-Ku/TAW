import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'comment-section',
  standalone: true,
  imports: [CommonModule],
  providers: [CommentsService],
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent {
  @Input() postId!: string;

  constructor(private commentsService: CommentsService,private authService: AuthService) {}

   get comments(): { comment: string, author: string }[] {
      //this.commentsService.clearAllComments();
      return this.commentsService.getComments(this.postId);
    }

   get currentUser(): string {
      const user = this.authService.currentUser;
      return user ? user.name : 'Anonymous';
    }

  addComment(text: string): void {
      if (text) {
        this.commentsService.addComment(this.postId, text, this.currentUser);
        }
    }
}
