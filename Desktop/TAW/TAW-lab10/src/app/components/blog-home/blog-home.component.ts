import { Component, Input, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [SearchBarComponent, BlogComponent],
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  @Input() filterText: string = '';

  ngOnInit(): void {}

  getName($event: string): void {
    this.filterText = $event;
  }

}
