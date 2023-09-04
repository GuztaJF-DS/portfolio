export interface IBlog {
  _id?: string;
  versions: IPostVersions[];
}
export interface IPostVersions {
  _id: string;
  title: string;
  post: string;
  locale: string;
  date: string;
}
