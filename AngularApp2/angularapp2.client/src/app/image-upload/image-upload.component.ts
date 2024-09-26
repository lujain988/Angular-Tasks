import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  uploadedImage: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result !== undefined) {
        this.uploadedImage = reader.result as string | ArrayBuffer;
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
