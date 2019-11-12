import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import { fromString } from 'gml-parser/node'

export default function (this: loader.LoaderContext, source: string) {
  const options = getOptions(this);
  console.log(options);
  let r = fromString(source);
  return `const r = ${JSON.stringify(r)}; export default r`;
}
