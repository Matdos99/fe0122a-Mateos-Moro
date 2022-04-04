import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera, aggiorna } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {
  posts!: Post[];

  constructor() { }

  async ngOnInit() {
    const posts = await recupera();
    this.posts = posts;
  }

  attiva(id: number, i: number) {
    aggiorna({active: true}, id);
    this.posts.splice(i, 1);
  }

}
