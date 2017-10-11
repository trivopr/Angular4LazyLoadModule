import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArticleService
  ],
  declarations: [ArticleListComponent, ArticleDetailComponent]
})
export class ArticlesModule { }
