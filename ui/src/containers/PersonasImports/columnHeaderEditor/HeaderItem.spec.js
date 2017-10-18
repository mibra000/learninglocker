import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { fromJS } from 'immutable';
import {
  HeaderItemComponent
} from './HeaderItem';
import {
  COLUMN_MBOX
} from 'lib/constants/personasImport';

describe.only('HeaderItem', () => {
  it('should render', () => {
    const rendered = shallow(<HeaderItemComponent
      columnName="test1"
      columnStructure={fromJS({})}
      model={fromJS({
        _id: '1'
      })} />);

    expect(rendered).toMatchSnapshot();
  });

  it('should render with orderable and related column', () => {
    const rendered = shallow(<HeaderItemComponent
      columnName="test1"
      columnStructure={fromJS({
        1: {
          columnName: 1,
          columnType: COLUMN_MBOX
        }
      })}
      model={fromJS({
        _id: '1'
      })} />);

    expect(rendered).toMatchSnapshot();
  });
});
