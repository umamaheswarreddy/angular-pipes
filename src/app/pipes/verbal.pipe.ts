import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbal'
})
export class VerbalPipe implements PipeTransform {
  digits=[
    'ZERO','ONE','TWO','THREE','FOUR','FIVE'];

  transform(value: number, args?: any): string {
    let str=`${value}`;
    let result='';

    for(let i=0;i<str.length;i++){
      let digits=parseInt(str.charAt(i));
      result=`${result}  ${this.digits[digits]}`;
    }
    return result;
  }

}
