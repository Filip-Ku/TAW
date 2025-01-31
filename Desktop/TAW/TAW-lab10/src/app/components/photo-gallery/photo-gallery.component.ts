import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  public images: string[] = [];
  public selectedImage: string | null = null;

  constructor(private dataService: DataService) {}

   ngOnInit() {
      this.dataService.getAll()
        .pipe(
          map((posts: any) => posts.map((post: any) => post.image))
        )
        .subscribe((images: string[]) => {
          this.images = images;
        });
    }

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
