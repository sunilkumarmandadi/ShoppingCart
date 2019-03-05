import { ShoppingModuleModule } from './shopping-module.module';

describe('ShoppingModuleModule', () => {
  let shoppingModuleModule: ShoppingModuleModule;

  beforeEach(() => {
    shoppingModuleModule = new ShoppingModuleModule();
  });

  it('should create an instance', () => {
    expect(shoppingModuleModule).toBeTruthy();
  });
});
