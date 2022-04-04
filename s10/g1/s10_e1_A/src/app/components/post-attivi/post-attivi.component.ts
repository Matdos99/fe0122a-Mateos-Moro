import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera, aggiorna } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  posts!: Post[];

  constructor() { }

  async ngOnInit() {
    const posts = await recupera();
    this.posts = posts;
  }

  disattiva(id: number, i: number) {
    aggiorna({active: false}, id);
    this.posts.splice(i, 1);
  }

}
