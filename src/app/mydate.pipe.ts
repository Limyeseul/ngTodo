import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  // value(mandatory), args(optional)
  transform(value: any, args?: any): any {
    // mydate 파이프 기호 앞에 값이 첫번째 파라미터로 넘어온다.
    console.log(value);
    // : 다음의 값이 파라미터가 두번째 파라미터
    console.log(args);

    // 0 <= x < 16
    return value.substring(0, 16);
  }

}
