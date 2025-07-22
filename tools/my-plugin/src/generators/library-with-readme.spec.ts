import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { libraryWithReadmeGenerator } from './library-with-readme';
import { LibraryWithReadmeGeneratorSchema } from './schema';

describe('library-with-readme generator', () => {
  let tree: Tree;
  const options: LibraryWithReadmeGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await libraryWithReadmeGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
