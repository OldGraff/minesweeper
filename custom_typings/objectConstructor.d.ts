/* eslint-disable @typescript-eslint/ban-types */
declare interface ObjectConstructor {
  keys<T extends object, K extends keyof T>(obj: T): Array<K>,
  values<T extends object, K extends keyof T>(obj: T): Array<T[K]>,
  entries<T extends object, K extends keyof T>(obj: T): Array<[K, T[K]]>,
}
