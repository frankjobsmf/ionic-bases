import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', columna: string = ''): any[] {

    if ( texto === '' ) {

      return arreglo;

    }

    if ( !arreglo ){

      return arreglo;

    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter( obj => obj[columna].toLowerCase().includes(texto));

  }

}
