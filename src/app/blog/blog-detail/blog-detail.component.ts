import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WPService} from "../../core/services/w-p.service";
import {ActivatedRoute} from "@angular/router";
import { take } from 'rxjs/operators';
import * as moment from "moment";
import { Lancamento } from 'src/app/imoveis/models/lancamento.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, AfterViewInit {

  post: any;
  similarPosts:Lancamento[] = [];

  constructor(private lancamentoService: WPService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((value) => {
      if (value.has('post')) {
        this.lancamentoService.post(value.get('post')).subscribe(post => {
          if (post && post instanceof Array && (post as []).length > 0) {
            this.post = post[0];
            this.getSimilarPosts(this.post.categories , this.post.id);
          }
        });
      }
    })
  }

  getSimilarPosts(categories:Array<any>, postId:number){
    if(categories.length > 0){
      const randomId = Math.floor(Math.random() * categories.length);
      this.lancamentoService.similarPosts(categories[randomId], postId)
      .pipe(take(1))
      .subscribe((similar:Lancamento[]) => {
        console.log(similar);
        this.similarPosts = similar;
      })
    }
  }

  ngAfterViewInit() {
    try {
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }

  date(d: string): string {
    return moment(d).format('L');
  }

  removeHTML(html = ''): string {
    return html.replace(/<[^>]+>/g, '').replace('[&hellip;]', '...');
  }

}
