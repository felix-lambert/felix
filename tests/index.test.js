import { virtualDom, virtualDomHelper } from '../js/utils/index';

it('throw an error because no arguments', () => {
  expect(() => {
    virtualDom();
  }).toThrowError('You need to have a dom object');
});

it('throw an error because no arguments', () => {
  expect(() => {
    virtualDom(14);
  }).toThrowError('The dom type should be an object');
});

it('children is array', () => {
  expect(() => {
    virtualDom('hello', {}, 'I should not be a string');
  }).toThrowError('The dom type should be an object');
});

it('props is object but missing one argument', () => {
  expect(virtualDom({})).toBe(true);
});

it('more complex typing', () => {
  expect(
    virtualDom({
      type: 'ul',
      props: { class: 'list' },
      children: [
        { type: 'li', props: {}, children: ['item 1'] },
        { type: 'li', props: {}, children: ['item 2'] },
      ],
    })
  ).toBe(true);
});

it('more complex typing', () => {
  expect(() => {
    virtualDom({
      type: 'ul',
      props: 'list',
      children: [
        { type: 'li', props: {}, children: ['item 1'] },
        { type: 'li', props: {}, children: ['item 2'] },
      ],
    });
  }).toThrowError('The props type should be an object');
});

it('throw an error because no tagname', () => {
  expect(() => {
    virtualDomHelper();
  }).toThrowError('You need to have a tagname');
});

it('throw an error because tagname is not a string', () => {
  expect(() => {
    virtualDomHelper(
      123445,
      { class: 'list' },
      virtualDomHelper('li', {}, 'item 1'),
      virtualDomHelper('li', {}, 'item 2')
    );
  }).toThrowError('You need to have a string tagname');
});
