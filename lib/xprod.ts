const xprodInternal = function * ([ head, ...rest ]: any[][]): Generator<any> {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (head === undefined) {
    yield [];

    return;
  }

  for (const subElement of xprodInternal(rest)) {
    for (const element of head) {
      yield [ subElement, element ].flat();
    }
  }
};

const xprod = function (lists: any[][]): Generator<any> {
  return xprodInternal([ ...lists ].reverse());
};

export { xprod };
