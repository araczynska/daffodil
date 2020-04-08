import { createSelector, MemoizedSelector } from '@ngrx/store';

import { daffGeographyFeatureStateSelector } from './geography-feature.selector';
import { DaffCountry } from '../models/country';
import {
  DaffGeographyReducerState,
} from '../reducers/public_api';

export interface DaffGeographySelectors {
  selectGeographyState: MemoizedSelector<object, DaffGeographyReducerState>;
  selectGeographyLoading: MemoizedSelector<object, boolean>;
  selectGeographyErrors: MemoizedSelector<object, string[]>;
}

const createGeographySelectors = <T extends DaffCountry>() => {
  const { selectGeographyFeatureState } = daffGeographyFeatureStateSelector<T>();
  const selectGeographyState = createSelector(
    selectGeographyFeatureState,
    state => state.geography
  );

  const selectGeographyLoading = createSelector(
    selectGeographyState,
    state => state.loading
  );

  const selectGeographyErrors = createSelector(
    selectGeographyState,
    state => state.errors
  );

  return {
    selectGeographyState,
    selectGeographyLoading,
    selectGeographyErrors
  }
}

export const daffGeographySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographySelectors =>
    cache = cache || createGeographySelectors<T>()
})();
