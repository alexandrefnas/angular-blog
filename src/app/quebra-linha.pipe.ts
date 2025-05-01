import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quebraLinha'
})
export class QuebraLinhaPipe implements PipeTransform {

  transform(value: string): string {
     // Substitui os pontos finais por um ponto final seguido de uma quebra de linha
     if (!value) return value; // Se o valor for vazio ou nulo, não faz nada

    //  return value.replace(/(\.)(?=\s|$)/g, '$1</p><p style="text-indent: 20px;">');
    //  return value.replace(/(\.)(?=\s|$)/g, '$1<br style="text-indent: 20px;">');  // Substitui o ponto final por <br>
    // return value.replace(/(\.)(?=\s|$)/g, '$1</p><p>');

    // Divide o texto em frases terminadas por ponto final, interrogação ou exclamação
    const frases = value
    .split(/(?<=[.?!])\s+/)
    .map(frase => `&nbsp;&nbsp;&nbsp;${frase.trim()}`); // adiciona espaços no início

    return frases.join('<br><br>');
  }

}
