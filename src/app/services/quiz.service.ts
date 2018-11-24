import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy';

  public getQuizQuestions() {
    return this.http.get(this.URL);
  }
}
