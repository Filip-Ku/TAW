import {Component, Input} from '@angular/core';
import {SummaryPipe} from '../../pipes/summary.pipe';

@Component({
  selector: 'blog-item-text',
  imports: [SummaryPipe],
  templateUrl: './blog-item-text.component.html',
  standalone: true,
  styleUrl: './blog-item-text.component.css'
})
export class BlogItemTextComponent {
  @Input() text?: string;
}
