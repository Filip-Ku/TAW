import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DataService } from './services/data.service';
import {PhotoGalleryComponent} from './components/photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent,AddPostComponent,PhotoGalleryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [DataService]
})
export class AppComponent {
@ViewChild(BlogComponent) blog!: BlogComponent;
  public counter: number = 0;
  showForm = true;

  constructor(private dataService: DataService) {}

 addPost(post: { title: string; text: string }) {
    this.dataService.addPost(post);
    if (this.blog) {
      this.blog.onNewPostAdded();
    }
    this.showForm = false;
  }

  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }

  title = 'blog_FK';

}
