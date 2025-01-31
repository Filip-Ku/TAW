import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Importuj ReactiveFormsModule i FormsModule
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comment.service';

interface Post {
  id: string;
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'add-post',
  standalone: true,
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class AddPostComponent {
  postForm: FormGroup;

  @Output() newPostAdded = new EventEmitter<void>();



  constructor(private fb: FormBuilder, private dataService: DataService, private commentService: CommentsService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = {
        title: this.postForm.value.title,
        text: this.postForm.value.content,
        image: this.postForm.value.image
      };
     this.dataService.addPost(newPost).subscribe({
           next: (response: Post) => {
             console.log('Post dodany pomyślnie:', response);
             this.postForm.reset();
             this.newPostAdded.emit();
           },
           error: (error) => {
             console.error('Błąd podczas dodawania posta:', error);
           }
         });
    }
  }

}
