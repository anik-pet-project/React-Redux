import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'anik-dutta', firstName: 'Anik', lastName: 'Dutta'},
        {id: 'john-resig',firstName: 'John',lastName: 'Resig'}
      ];

      const expected = [
        {value: 'anik-dutta', text: 'Anik Dutta'},
        {value: 'john-resig', text: 'John Resig'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
