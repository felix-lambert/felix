// The best place for throwing errors is in utility functions, those functions
// that are a general part of the scripting environment and may be used in any
// number of places.
export function virtualDom(virtualDomObject) {
  if (!virtualDomObject) throw new Error('You need to have a dom object');

  if (typeof virtualDomObject !== 'object')
    throw new TypeError('The dom type should be an object');

  if (virtualDomObject.props && typeof virtualDomObject.props !== 'object')
    throw new TypeError('The props type should be an object');
  return true;
}

export function virtualDomHelper(tagname, props, ...children) {
  if (!tagname) throw new TypeError('You need to have a tagname');

  if (tagname && typeof tagname !== 'string')
    throw new TypeError('You need to have a string tagname');
  if (typeof props !== 'object')
    throw new TypeError('The props type should be an object');
  return { tagname, props, children };
}
