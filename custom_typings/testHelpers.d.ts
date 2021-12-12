/* eslint-disable @typescript-eslint/no-explicit-any */
declare function testAxiosHaveBeenCalledWith(
  axiosMethod: <T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) => Promise<R>,
  functionMethod: () => Promise<AxiosResponse>,
  args: unknown[],
): void;

declare function testCallEventFromComponent(
  component: import('react-test-renderer').ReactTestRenderer,
  findElement: import('react').ElementType,
  event: import('../src/components/testHelpers/callEventFromComponent').EventType = 'onClick',
  indexElement = 0,
): void;

declare function testCallEventWithArguments(
  component: import('react-test-renderer').ReactTestRenderer,
  findElement: import('react').ElementType,
  listArguments: unknown[],
  event: import('../src/components/testHelpers/callEventFromComponent').EventType = 'onClick',
  indexElement = 0,
);

declare function testMatchSnapshot(
  component: import('react').ReactElement
): void;


declare function testGetById<T extends { id: number }>(
  getByIdAction: (id: number) => T | null,
  collection: import('../src/store/testHelpers/types.ts').CollectionType,
  context: unknown
): void;

declare function testGetByIdNull<T extends { id: number }>(
  getByIdAction: (id: number) => T | null,
  collection: import('../src/store/testHelpers/types').CollectionType,
  context: unknown
): void;

declare function testFetchCatch(generator: Generator, methodService: jest.Mock): void;

declare function testConstructor(Store: { new(): void }): void;
declare function testConstructorAutoBind(Store: { new (): void }): void;
declare function testGetterIsLoading<T extends {
  new(): {
    status: Status,
    readonly isLoading: boolean,
  } }>(Store: T
): void;

declare function testFetchModelsCatch<CollectionName extends string>(
  {
    store,
    generator,
    collectionName,
    methodService,
    defaultValue,
  }: import('../src/store/testHelpers/generatorTest').GeneratorTestParams<CollectionName>
): void;

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] & string;
interface InstanceStore { status: Status, }

declare function testGeneratorApiSetterStatus<T extends InstanceStore>(
  Store: { new(): T },
  generator: (params?: any) => Generator,
  setter: FunctionPropertyNames<Required<T>>,
  service: jest.Mock,
  paramsGenerator: any[] = [],
  returnValue: any = {},
): void;
