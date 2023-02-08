import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
faceSnaps!:FaceSnap[]

  constructor(
    private snapFaceService:SnapFaceService
  ){}

  ngOnInit(): void {
    this.faceSnaps= this.snapFaceService.getAllFaceSnap()
  }
}
