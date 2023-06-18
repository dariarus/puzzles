import React, {FunctionComponent} from 'react';

import {TFragment, TFragmentsArray} from '../../types';

import fragmentsContainerStyles from './fragments-container.module.css';

import {MixedFragmentsListItem} from '../mixed-fragments-list-item/mixed-fragments-list-item';

import {isTypeFragment} from '../../utils/functions';
import {useDrop} from 'react-dnd';

export const FragmentsContainer: FunctionComponent<{
  sourceFragments: TFragmentsArray,
  onDropBackFragmentHandler: (item: TFragment) => void
}> = (props) => {

  const [, dropBackRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment) => {
      props.onDropBackFragmentHandler(item);
    }
  })

  return (
    <div className={fragmentsContainerStyles.container}>
      <ul ref={dropBackRef}
        className={fragmentsContainerStyles.fragmentsList}>
        {
          props.sourceFragments.map((fragment, index) => (
            isTypeFragment(fragment) &&
            <MixedFragmentsListItem key={index} puzzleFragment={fragment}/>
          ))
        }
      </ul>
    </div>
  )
}