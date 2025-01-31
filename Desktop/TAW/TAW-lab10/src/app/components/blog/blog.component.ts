import {Component, Input, OnInit, Pipe,Output,EventEmitter} from '@angular/core';
import {DataService} from "../../services/data.service";
import {BlogItemComponent} from "../blog-item/blog-item.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FilterTextPipe} from '../../pipes/filter-text.pipe';
import { ChangeDetectorRef } from '@angular/core';
import { Observable,of } from 'rxjs';
import {AuthService} from "../../services/auth.service";
import { AddPostComponent } from '../add-post/add-post.component';
import {PhotoGalleryComponent} from '../photo-gallery/photo-gallery.component';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PhotoGalleryComponent,AddPostComponent,HttpClientModule, BlogItemComponent, CommonModule,FilterTextPipe],
  providers: [DataService, AuthService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = '';

  public items$: Observable<any>=of(null);
  public refresh: boolean = true;

  constructor(private service: DataService) {
  }

  ngOnInit(){
  this.loadPosts()
  }

   loadPosts() {
      this.items$ = this.service.getAll();
   }


  onNewPostAdded() {
    this.refresh = false;
    setTimeout(() => {
      this.refresh = true;
      this.loadPosts();
    });
    console.log('New post added, reloading posts...');
  }

  refreshPosts() {
      this.getPosts();
  }

   getPosts() {
        setTimeout(() => {
          this.service.getAll().subscribe(items => {
                this.items$ = of(items);
            });
        }, 1000);
    }

}

