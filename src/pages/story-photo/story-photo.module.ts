import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryPhotoPage } from './story-photo';

@NgModule({
  declarations: [
    StoryPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(StoryPhotoPage),
  ],
})
export class StoryPhotoPageModule {}
