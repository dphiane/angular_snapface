import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { SnapFaceService } from 'src/app/core/services/snap-face.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
faceSnaps$!:Observable<FaceSnap[]>

  constructor(
    private faceSnapsService:SnapFaceService
  ){}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}
