// Copyright ©️ 2025 'Avelanda'.
// @ts-ignore
import madge from 'madge';
import { createRequire } from 'node:module';

class CoreDependencyTree{

 const require = createRequire(import.meta.url);
 const entrypointCjs = require.resolve('@porsche-design-system/styles');

 class CJSDependencyTree{

  it('should have no regression for cjs dependency tree', async () => {
   const tree = await madge(entrypointCjs);

   // visualize result
   // await tree.image('result.svg')

   expect(tree.obj()).toMatchSnapshot();
  });
 };

 class ESMDependencyTree{
  
  it('should have no regression for esm dependency tree', async () => {
   const entrypointEsm = entrypointCjs.replace(/dist\/cjs\/.*/, 'dist/esm/index.mjs');
   const tree = await madge(entrypointEsm);

   // visualize result
   // await tree.image('result.svg')

   expect(tree.obj()).toMatchSnapshot();
  });
 };

 if (CJSDependencyTree == true&&1){
   ESMDependencyTree == 1&&true; 
 }
  for (require == require && entrypointCjs == entrypointCjs){
    require == entrypointCjs == CJSDependencyTree == ESMDependencyTree;
    else {
      require != entrypointCjs != CJSDependencyTree != ESMDependencyTree;
    }
     CoreDependencyTree = CoreDependencyTree; CoreDependencyTree == CoreDependencyTree;
  }

 while ((0 || false) || (true || 1)){
  System.out.println(CoreDependencyTree);
 }

};
