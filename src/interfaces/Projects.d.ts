export interface IProject{
  appUrl: string;
  description: string;
  gitUrl: string;
  imageUrl: string;
  subTitle: string;
  title: string;
  locale: string;
}

export interface IProjects{
  _id?: string;
  versions: IProject[];
}