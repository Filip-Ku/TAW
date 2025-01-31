import { Component, Input,Output } from '@angular/core';
import { CommentsService } from "../../services/comment.service";
import { BlogItemImageComponent } from "../blog-item-image/blog-item-image.component";
import { BlogItemTextComponent } from "../blog-item-text/blog-item-text.component";
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [CommonModule, CommentSectionComponent, BlogItemImageComponent, BlogItemTextComponent],
  providers: [CommentsService],
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() image?: string;
  @Input() title!: string;
  @Input() text?: string;
  @Input() postId!:  string;
  @Input() post?: any;

  constructor(private commentsService: CommentsService) {}

  get itemComments(): { comment: string, author: string }[] {
    return this.commentsService.getComments(this.postId);
  }

  addComment(newComment: string,newAuthor: string): void {
    this.commentsService.addComment(this.postId, newComment,newAuthor);
  }
}
