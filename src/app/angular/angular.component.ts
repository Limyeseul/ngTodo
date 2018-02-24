import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],

  /*
    1) 애니메이션(명) 정의, 해당 애니메이션을 어디에 적용할것인가 정한다.
    2) 상태 정의
    3) 상태에 따른 transition 정의
  */
  animations: [trigger('flyInOut', [
                  state('in', style({opacity: 1, transform: 'translate(0, 0)'})),
                  transition('void => in', [ /* void 상태에서 in상태로 */
                    /*A 상태(옵션), 투명하고 x방향으로 -100% 이동 */
                    style({opacity: 0, transform: 'translate(-100%, 0)'}),
                    animate(300/*, style을 정의할 수 있지만 void=>in에서는 state에서(16Line) 정의 되어있기 때문에 생략 가능*/)]),
                  transition('* => void', [
                    animate(300, style({transform: 'translate(0, -100%)', opacity: '0'}))])
                ])
              ]
})
export class AngularComponent implements OnInit {
  newTodo: TodoVO = new TodoVO();      // 할일 추가를 위한 모델 데이터
  todoList: Array<TodoVO>;             // 할일 목록
  tempTodoMap = new Map<number, TodoVO>();    // 수정버튼 누를 때 값을 저장하기 위한 임시 컬렉션

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe((data: Array<TodoVO>) => {
        console.log(data);
        this.todoList = data;
      });
  }

  addTodo() {
    this.userService.addTodo(this.newTodo).subscribe((body: TodoVO) => {
      console.log(body);

      this.todoList.unshift(body);    // 추가버튼 누르면 맨 윗부분에 추가하도록
      this.newTodo = new TodoVO();    // 추가버튼 누르면 텍스트 폼을 초기화

    });
  }

  // 수정 버튼 누를 때 item.isEdited을 true로 바꾸는 프로토 타입
  save(item: TodoVO) {
    item.isEdited = true;

    // Map에 넣은 값을 저장한다.
    /*  shallow copy : 객체 저장된 값을 갖고오는게 아니라 메모리에 있는 값만 갖고오는 것.
        deep copy : 객체에 저장된 값과 메모리 값을 모두 갖고 오는 것.
        js/es5/15_deepcopy.js 참고
     */

    // shallow copy
    // this.tempTodoMap.set(item.todo_id, item);

    // shallow copy => deep copy 해야한다. (객체 저장된 값을 갖고오는게 아니라 메모리에 있는 값을 갖고와야한다.)
    // const temp = Object.assign({}, item);
    this.tempTodoMap.set(item.todo_id, Object.assign({}, item));

  }

  // 취소 버튼 누를 때
  restore(item: TodoVO) {
    item.isEdited = false;

    // Map에 넣었던 내용을 가져온다.
    const tempTodo = this.tempTodoMap.get(item.todo_id);
    item.isFinished = tempTodo.isFinished;    // 완료 유무 체크박스와
    item.todo = tempTodo.todo;                // 내용을 갖고온다.
  }
}
