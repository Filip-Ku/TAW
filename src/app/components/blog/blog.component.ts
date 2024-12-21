import { Component, OnInit } from '@angular/core';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service'; // Import serwisu

@Component({
  selector: 'blog',
  standalone: true,
  imports: [BlogItemComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public items: any[] = [];
  public refresh: boolean = true;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.items = this.service.getAll();
    console.log('Posts loaded:', this.items);
  }

  onNewPostAdded() {
    this.refresh = false;
    setTimeout(() => {
      this.refresh = true;
      this.loadPosts();
    });
    console.log('New post added, reloading posts...');
  }
}
