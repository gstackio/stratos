import { RunningInstancesComponent } from '../../../running-instances/running-instances.component';
import { CoreModule } from '../../../../../core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationStateComponent } from '../../../application-state/application-state.component';
import { ApplicationStateIconComponent } from '../../../application-state/application-state-icon/application-state-icon.component';
import { ApplicationStateIconPipe } from '../../../application-state/application-state-icon/application-state-icon.pipe';
import { CardComponent, listCards } from './card.component';
import { EntityInfo } from '../../../../../store/types/api.types';
import {
  TableCellComponent,
  listTableCells
} from '../../list-table/table-cell/table-cell.component';
import { EventTabActorIconPipe } from '../../list-types/app-event/table-cell-event-action/event-tab-actor-icon.pipe';
import { ValuesPipe } from '../../../../pipes/values.pipe';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../../../../store/reducers.module';
import { CardStatusComponent } from '../../../cards/card-status/card-status.component';
import { UsageGaugeComponent } from '../../../usage-gauge/usage-gauge.component';
import { PercentagePipe } from '../../../../pipes/percentage.pipe';
import { MetadataItemComponent } from '../../../metadata-item/metadata-item.component';

describe('CardComponent', () => {
  let component: CardComponent<EntityInfo>;
  let fixture: ComponentFixture<CardComponent<EntityInfo>>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CardComponent,
          CardStatusComponent,
          ...listCards,
          TableCellComponent,
          ...listTableCells,
          EventTabActorIconPipe,
          ValuesPipe,
          ApplicationStateComponent,
          ApplicationStateIconComponent,
          ApplicationStateIconPipe,
          UsageGaugeComponent,
          PercentagePipe,
          RunningInstancesComponent,
          MetadataItemComponent
        ],
        imports: [CoreModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
