import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  buttonText!: string
  faceSnap!: FaceSnap
  faceSnapId!: number

  constructor(
    private snapFaceService: SnapFaceService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.buttonText = 'oh Snaps'
    this.faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap = this.snapFaceService.getSnapFaceById(this.faceSnapId)
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

}
