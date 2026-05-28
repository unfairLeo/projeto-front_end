import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisagismoService {
  recomendar(rosto: string, cabelo: string): string[] {
    const chave = `${rosto}-${cabelo}`;
    const mapa: Record<string, string[]> = {
      'Oval-Liso': ['Side Part clássico', 'Pompadour baixo'],
      'Oval-Cacheado': ['Crop texturizado', 'Top cacheado com degradê'],
      'Redondo-Liso': ['Undercut com volume no topo', 'Quiff médio'],
      'Redondo-Cacheado': ['Degradê alto com topo cacheado', 'Curly crop'],
      'Quadrado-Liso': ['Buzz cut com barba marcada', 'Crew cut'],
      'Quadrado-Cacheado': ['Fade com topo natural', 'Corte médio com textura']
    };

    return mapa[chave] ?? ['Degradê clássico', 'Corte social com acabamento na navalha'];
  }
}
