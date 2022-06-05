import { ResolveOptions, AliasOptions } from 'vite';
import path from 'path';

const resolve: ResolveOptions & { alias?: AliasOptions } = {
  alias: {
    "@": path.resolve(__dirname, "../src"),
    "#": path.resolve(__dirname, "../src/components"),
  }
};

export default resolve;
