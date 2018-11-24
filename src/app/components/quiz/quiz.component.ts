import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public userName : string;

  public questions : any;

  public options : any = {};
 
  public showAnswers : boolean = false;

  public correctAnswerCount : number = 0;

  public loading : boolean;

  constructor(private quizService: QuizService, private router : Router) { }

  ngOnInit() {
    this.loading = true;
    this.fetchQuestions();
    this.userName = window.localStorage.getItem('userName');
  }

  public fetchQuestions() : void {
    this.quizService.getQuizQuestions().subscribe((data) => {
      this.questions = data['results'];
      this.createAnswerOptions();
      this.loading = false;
    });
  }

  public createAnswerOptions() : void {
    this.questions.map((question) => {
      question.id = uuidv4();
      question.options = this.shuffleOptions([question.correct_answer, ...question.incorrect_answers]);
    });
  }

  public shuffleOptions(array) : void {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  public showIncorrectError(question : any) : boolean {
    return this.showAnswers && (this.options[question.id] !== question.correct_answer)
  }

  public showCorrectMessage(question : any) : boolean {
    return this.showAnswers && (this.options[question.id] === question.correct_answer);
  }

  public onChange($event, question) {
    this.showAnswers = false;
    const id = question.id;
    this.options[id] = $event.value;
    if (this.options[id] === question.correct_answer) {
      this.correctAnswerCount += 1;
    }
  }

  public onSubmit() : void {
    this.showAnswers = true;
    this.scrollToTop();
    console.log(this.correctAnswerCount);
  }

  public onRetry() : void {
    window.location.reload();
  }

  public onLogout() : void {
    localStorage.setItem('userName', '');
    this.router.navigate(['/login']);
  }

  public scrollToTop() : void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
  }

}
