import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class SnapFaceService {

  constructor() { }
  faceSnaps = [
    {
      id: 0,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 100,
      location: 'paris'
    }, {
      id: 1,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'montagne'
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ]

  getAllFaceSnap(): FaceSnap[] {
    return this.faceSnaps
  }

  getSnapFaceById(faceSnapId: number) {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
    if (!faceSnap) {
      throw new Error('FaceSnap not Found')
    } else {
      return faceSnap
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
    const faceSnap=this.getSnapFaceById(faceSnapId)
    snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
