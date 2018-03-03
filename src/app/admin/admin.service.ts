import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NewsVO} from '../domain/news.vo';

@Injectable()
export class AdminService {
  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  findNews(params: any) {
    return this.http.post(this.SERVER + '/api/newsList', JSON.stringify(params), {headers: this.headers});
  }

  findDetailNews(news_id: number) {
    return this.http.get(this.SERVER + `/api/news?news_id=${news_id}`);
  }

  addNews(news: NewsVO) {
    return this.http.post(this.SERVER + '/api/news', news, {headers: this.headers});
  }

  imageUpload(formData: FormData) {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data'); //브라우저가 자동 생성함.
    headers.append('Accept', 'application/json');

    // this.headers가 아니다. 위에 있는 헤더가 아닌 넘어온 헤더가 fome-data 형식이다.
    return this.http.post(this.SERVER + '/api/imageUpload', formData, {headers: headers});
  }

  removeNews(news_id: number) {
    return this.http.delete(this.SERVER + `/api/news?news_id=${news_id}`);
  }
}
