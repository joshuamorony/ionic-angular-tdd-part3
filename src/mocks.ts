export class ProductsMock {
  public products: any = [{ title: "Cool shoes", description: "Isnt it obvious?", price: "39.99" }];
  public load: Function = () => {};
}

export class NavMock {
  public navigateBack: Function = (url: string | any[], options: any) => {};
  public navigateForward: Function = (url: string | any[], options: any) => {};
  public navigateRoot: Function = (url: string | any[], options: any) => {};
}
