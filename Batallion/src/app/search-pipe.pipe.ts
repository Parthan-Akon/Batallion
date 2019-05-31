import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'search'
})


export class SearchPipePipe implements PipeTransform {
  
  public transform(value,keys: string, term: string): any {

    if(!term) {return value;}
    return (value || [])
        .filter(prod => keys.split(',')
          .some(key => prod.hasOwnProperty(key) && new RegExp(term,'gi')
            .test(prod[key])));
  }

}
