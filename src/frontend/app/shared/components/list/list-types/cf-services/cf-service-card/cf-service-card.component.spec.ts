import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  getBaseTestModulesNoShared,
  getMetadataCardComponents,
} from '../../../../../../test-framework/cloud-foundry-endpoint-service.helper';
import { BooleanIndicatorComponent } from '../../../../boolean-indicator/boolean-indicator.component';
import { AppChipsComponent } from '../../../../chips/chips.component';
import { CfServiceCardComponent } from './cf-service-card.component';

describe('CfServiceCardComponent', () => {
  let component: CfServiceCardComponent;
  let fixture: ComponentFixture<CfServiceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CfServiceCardComponent, getMetadataCardComponents, BooleanIndicatorComponent, AppChipsComponent],
      imports: [...getBaseTestModulesNoShared]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfServiceCardComponent);
    component = fixture.componentInstance;
    component.row = {
      entity: {
        label: '',
        description: '',
        active: 1,
        bindable: 1,
        unique_id: '',
        extra: '',
        tags: [''],
        requires: [''],
        service_broker_guid: '',
        plan_updateable: 1,
        service_plans_url: '',
        service_plans: [],

      },
      metadata: null
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});