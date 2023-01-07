export type Replece<T, R> = Omit<T, keyof R> & R;
