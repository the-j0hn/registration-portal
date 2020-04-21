import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rp-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent {

  @Output() public onPhotoUpload: EventEmitter<any> = new EventEmitter<any>();
  @Output() public editProfile: EventEmitter<any> = new EventEmitter<any>();
  @Input() public enableEditProfile: boolean;

  public imagePath;
  public imgURL: any;
  public message: string;
  public isPhotoUploaded: boolean = false;
  // public showEditProfile: boolean = false;
 
  public preview(files) {
    if (files.length === 0) {
      this.onPhotoUpload.emit(this.isPhotoUploaded);
      return;
    }
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      this.onPhotoUpload.emit(this.isPhotoUploaded);
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.isPhotoUploaded = true;
      this.onPhotoUpload.emit(this.isPhotoUploaded);
    }
  }

  public editRegistrationProfile(): void {
    this.editProfile.emit(true);
  }
}
