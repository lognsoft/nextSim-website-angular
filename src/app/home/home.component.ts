import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {WPService} from '../core/services/w-p.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  owlCustomOptions:OwlOptions = {
    dots: false,
    loop: true,
    margin: 10,
    nav: false,
    autoHeight: true,
    autoplay: true,
    responsive:{
      0:{
        items:1
      },
      500:{
        items:2
      },
      550:{
        items:3
      },
    }
  }

  lancamentos: any[] = [];
  arrayOfArrays:Array<any[]> = [];
  posts: any[] = [];
  currentPost = 0;

  constructor(private lancamentoService: WPService, private modalService: NgbModal) {
  }

  ngOnInit() {
    try {
      localStorage.removeItem('nextLastSearch');
      localStorage.removeItem('nextQueryParams');
    } catch (e) {
      console.error(e);
    }

    this.lancamentoService.all().subscribe(value => {
      this.lancamentos = value.body;
      if (this.lancamentos.length > 18) {
        this.lancamentos = this.lancamentos.slice(0, 18);
        
        let tempArray:Array<any> = [];
        for(let i = 0; i < this.lancamentos.length; i++){
          if(tempArray.length === 2){
            this.arrayOfArrays.push(tempArray);
            tempArray = [];
          }

          tempArray.push(this.lancamentos[i]);
        }
      }

    });

    this.lancamentoService.posts().subscribe(value => {
      this.posts = value || [];
      if (this.posts.length > 6) {
        this.posts = this.posts.slice(0, 6);
      }
    });
  }

  nextPost() {
    this.currentPost += 1;
    if (this.currentPost === this.posts.length) {
      this.currentPost = 0;
    }
  }

  prevPost() {
    this.currentPost -= 1;
    if (this.currentPost < 0) {
      this.currentPost = this.posts.length - 1;
    }

  }

  anotherPosts(): any[] {
    return this.posts.filter((value, index) => index !== this.currentPost);
  }

  removeHTML(html: string): string {
    if (!html) {
      return '';
    }
    return html.replace(/<[^>]+>/g, '').replace('[&hellip;]', '...');
  }

  openVideo = (content) => {
    const modal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      modalDialogClass: 'modal-video',
      size: 'xl',
      centered: true
    });
    console.log(modal);

    modal.shown.subscribe(() => {
      console.log('modal shown');
    });
    modal.hidden.subscribe(() => {
      console.log('modal shown');
    });
  }

  formatValue(val:string | number):string{
    let valNumber:number = typeof(val) === 'string' ? parseFloat(val) : val;
    return new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL' }).format(valNumber);
  }

}
