import { safeUnsubscribe } from './../../../core/utils.service';

import { PaginationEntityState } from '../../types/pagination.types';
import { entityFactory } from '../../helpers/entity-factory';

export function paginationStart(state, action): PaginationEntityState {
  const page = action.apiAction.__forcedPageNumber__ || action.apiAction.pageNumber || state.currentPage;
  const schemaKey = action.apiAction.__forcedPageSchemaKey__;
  const entityKey = schemaKey ? entityFactory(schemaKey).key : action.apiAction.entityKey;
  return {
    ...state,
    pageRequests: {
      ...state.pageRequests,
      [page]: {
        busy: true,
        error: false,
        message: '',
        schemaKey,
        entityKey
      }
    }
  };
}
