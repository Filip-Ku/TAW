import {Component, Input, OnInit, Pipe} from '@angular/core';
import {DataService} from "../../services/data.service";
import {BlogItemComponent} from "../blog-item/blog-item.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FilterTextPipe} from '../../pipes/filter-text.pipe';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, BlogItemComponent, CommonModule,FilterTextPipe],
  providers: [DataService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = '';

  public items$: any;
  public refresh: boolean = true;
  public emptyList: boolean = false;

  constructor(private service: DataService) {
  }
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
  onNewPostAdded() {
    this.refresh = false;
    setTimeout(() => {
      this.refresh = true;
      this.loadPosts();
    });
    console.log('New post added, reloading posts...');
  }

 loadPosts() {
   this.service.getAll().subscribe(response => {
     this.items$ = response;
     this.emptyList = this.items$.length === 0;
     console.log('Posts loaded:', this.items$);
   });
 }
}

