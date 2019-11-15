import { assert } from 'assertthat';
import { measureTime } from 'measure-time';
import { xprod } from '../../lib/xprod';

suite('xprod', (): void => {
  test('returns the cross product of the given lists.', async (): Promise<void> => {
    const input = [
      [ 'a', 'b', 'c' ],
      [ 1, 2, 3, 4 ]
    ];

    const output = xprod(input);

    assert.that([ ...output ]).is.equalTo([
      [ 'a', 1 ],
      [ 'a', 2 ],
      [ 'a', 3 ],
      [ 'a', 4 ],
      [ 'b', 1 ],
      [ 'b', 2 ],
      [ 'b', 3 ],
      [ 'b', 4 ],
      [ 'c', 1 ],
      [ 'c', 2 ],
      [ 'c', 3 ],
      [ 'c', 4 ]
    ]);
  });

  test('returns the content of the given array if only one is given.', async (): Promise<void> => {
    const input = [
      [ 1, 2, 3 ]
    ];

    const output = xprod(input);

    assert.that([ ...output ]).is.equalTo([
      [ 1 ],
      [ 2 ],
      [ 3 ]
    ]);
  });

  test('returns an empty array if an empty array is given.', async (): Promise<void> => {
    const input = [[]];

    const output = xprod(input);

    assert.that([ ...output ]).is.equalTo([]);
  });

  test('returns an empty array if one of the given arrays is empty.', async (): Promise<void> => {
    const input = [
      [ 'a', 'b', 'c' ],
      []
    ];

    const output = xprod(input);

    assert.that([ ...output ]).is.equalTo([]);
  });

  test('is lazy.', async (): Promise<void> => {
    const getElapsed = measureTime();

    const input = [
      new Array(100_000).fill('foo'),
      new Array(100_000).fill('bar')
    ];

    const output = xprod(input);

    assert.that(output.next().value).is.equalTo([ 'foo', 'bar' ]);

    const elapsed = getElapsed();

    assert.that(elapsed.milliseconds).is.lessThan(10);
  });
});
