
    export type RemoteKeys = 'app-c/Chart' | 'app-c/Utils';
    type PackageType<T> = T extends 'app-c/Utils' ? typeof import('app-c/Utils') :T extends 'app-c/Chart' ? typeof import('app-c/Chart') :any;