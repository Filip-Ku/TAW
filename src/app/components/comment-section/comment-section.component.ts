import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comment.service';

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

  constructor(private commentsService: CommentsService) {}

   get comments(): { comment: string, author: string }[] {
      return this.commentsService.getComments(this.postId);
    }

  addComment(newComment: string,newAuthor: string): void {
    if (newComment) {
      this.commentsService.addComment(this.postId, newComment,newAuthor);
    }
  }
}
