import { RecipeModuleModule } from './recipe-module.module';

describe('RecipeModuleModule', () => {
  let recipeModuleModule: RecipeModuleModule;

  beforeEach(() => {
    recipeModuleModule = new RecipeModuleModule();
  });

  it('should create an instance', () => {
    expect(recipeModuleModule).toBeTruthy();
  });
});
