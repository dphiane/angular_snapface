import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  buttonText!: string
  constructor(
    private snapFaceService:SnapFaceService,
    private Router:Router
  ) { }

  ngOnInit() {
    this.buttonText = 'oh Snaps'
  }

  onSnap() {
    if (this.buttonText === 'oh Snaps') {
      this.snapFaceService.snapFaceSnapById(this.faceSnap.id, "snap")
      this.buttonText = 'UnSnaps'
    } else {
      this.snapFaceService.snapFaceSnapById(this.faceSnap.id, "unsnap")
      this.buttonText = 'oh Snaps'
    }
  }
  showSingleFace(){
    this.Router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
