import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(cards: any[], selectedCategory: string): any[] {
    if (!cards || !selectedCategory || selectedCategory === 'TODOS') {
      return cards;
    }
    return cards.filter(card => card.category === selectedCategory);
  }
}
