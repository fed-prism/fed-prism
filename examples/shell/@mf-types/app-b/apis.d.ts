
    export type RemoteKeys = 'app-b/Widget' | 'app-b/DataService';
    type PackageType<T> = T extends 'app-b/DataService' ? typeof import('app-b/DataService') :T extends 'app-b/Widget' ? typeof import('app-b/Widget') :any;