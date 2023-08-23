import { Descendant, Element, Text } from 'slate';

export function isElement(descendant: Descendant): descendant is Element {
  return (descendant as Element) ? true : false;
}

export function isText(descendant: Descendant): descendant is Text {
  return (descendant as Text) ? true : false;
}
