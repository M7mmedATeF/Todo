import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.substr(0,19) +  this.check(value);
  }

    check(val){
      if(val.length>=19){
        return " ...";
      }else{
        return "";
      }
    }

}
