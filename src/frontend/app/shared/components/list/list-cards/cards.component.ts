import { Component, Input } from '@angular/core';

import { IListDataSource } from '../data-sources-controllers/list-data-source-types';
import { CardCell } from '../list.types';
import { IMultiActionListEntity } from '../../../monitors/pagination-monitor';
import { CardMultiActionComponents } from './card/card.component.types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent<T> {
  public columns = CardCell.columns;
  @Input() dataSource: IListDataSource<T>;
  private _component: CardCell<T> | CardMultiActionComponents;
  @Input()
  get component() { return this._component; }
  set component(cardCell: CardCell<T> | CardMultiActionComponents) {
    this._component = cardCell;
    this.columns = cardCell.columns;
  }

  public multiActionTrackBy(index: number, item: IMultiActionListEntity) {
    return this.dataSource ? this.dataSource.trackBy(index, item.entity) : null;
  }

}
