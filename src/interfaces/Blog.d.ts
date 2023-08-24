export interface IBlog {
  _id?: string;
  versions: [IPostVersions];
}
export interface IPostVersions {
  title: string;
  post: string;
  locale: string;
  date: Date;
}
