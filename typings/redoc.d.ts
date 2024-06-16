declare module 'redoc/bundles/redoc.standalone.js' {
  function init(
    specOrSpecUrl: string | any,
    options: any = {},
    element: Element | null = querySelector('redoc'),
    callback?: (e?: Error) => void
  ): void
}
