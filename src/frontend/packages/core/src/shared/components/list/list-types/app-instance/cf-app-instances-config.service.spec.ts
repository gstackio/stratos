import { CommonModule } from '@angular/common';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { applicationEntityType, cfEntityFactory } from '../../../../../../../cloud-foundry/src/cf-entity-factory';
import { GetApplication } from '../../../../../../../cloud-foundry/src/actions/application.actions';
import { endpointStoreNames } from '../../../../../../../store/src/types/endpoint.types';
import { generateTestApplicationServiceProvider } from '../../../../../../test-framework/application-service-helper';
import { generateTestEntityServiceProvider } from '../../../../../../test-framework/entity-service.helper';
import { createBasicStoreModule, getInitialTestStoreState } from '../../../../../../test-framework/store-test-helper';
import { CoreModule } from '../../../../../core/core.module';
import { CustomImportModule } from '../../../../../custom-import.module';
import { ApplicationsModule } from '../../../../../features/applications/applications.module';
import { SharedModule } from '../../../../shared.module';
import { CfAppInstancesConfigService } from './cf-app-instances-config.service';

describe('CfAppInstancesConfigService', () => {

  const initialState = getInitialTestStoreState();
  const cfGuid = Object.keys(initialState.requestData[endpointStoreNames.type])[0];
  const appGuid = Object.keys(initialState.requestData.application)[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CfAppInstancesConfigService,
        generateTestEntityServiceProvider(
          appGuid,
          cfEntityFactory(applicationEntityType),
          new GetApplication(appGuid, cfGuid)
        ),
        generateTestApplicationServiceProvider(appGuid, cfGuid)
      ],
      imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        ApplicationsModule,
        createBasicStoreModule(),
        RouterTestingModule,
      ]
    }).overrideModule(ApplicationsModule, {
      remove: {
        imports: [CustomImportModule]
      }
    });
  });

  it('should be created', inject([CfAppInstancesConfigService], (service: CfAppInstancesConfigService) => {
    expect(service).toBeTruthy();
  }));
});