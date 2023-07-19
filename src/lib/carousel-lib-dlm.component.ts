import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-carousel',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class CarouselLibComponent {
   @Input() images: { url: string; title: string }[] = [];
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  currentSlide = 0;
  slideOffset = 0;

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.slideOffset += 100;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++;
      this.slideOffset -= 100;
    }
  }

  closePopup() {
    this.close.emit();
  }
}
