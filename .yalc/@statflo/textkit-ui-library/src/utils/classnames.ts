// eslint-disable-next-line functional/functional-parameters
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
