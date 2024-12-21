import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Importuj ReactiveFormsModule i FormsModule
import { CommonModule } from '@angular/common';  // Importuj CommonModule

@Component({
  selector: 'add-post',
  standalone: true,
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule]  // Dodaj CommonModule
})
export class AddPostComponent {
  postForm: FormGroup;

  @Output() newPostAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = {
        title: this.postForm.value.title,
        text: this.postForm.value.content
      };
      console.log('New post:', newPost);
      this.dataService.addPost(newPost);
      this.postForm.reset();
      this.newPostAdded.emit();
    }
  }
}
