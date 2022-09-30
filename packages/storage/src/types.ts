export type ExcludeFunction<T> = T extends Function ? never : T
