
    export type RemoteKeys = 'app-a/Button' | 'app-a/Header';
    type PackageType<T> = T extends 'app-a/Header' ? typeof import('app-a/Header') :T extends 'app-a/Button' ? typeof import('app-a/Button') :any;