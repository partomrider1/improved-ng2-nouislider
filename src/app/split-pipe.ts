import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(val:number[]):string {
    if(val){
      let splitText = val.toString();
      let splitTextArray: string[] = splitText.split(',');;
      return splitTextArray[0] + '-' + splitTextArray[1]
    }
  }
}
