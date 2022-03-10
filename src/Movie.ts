export enum MovieId {
  F001 = "F001",
  F002 = "F002",
  F003 = "F003"
}

interface MovieDetails {
  title: string;
  classId: string;
}

export type MovieCollection = {
  [MovieID in MovieId]: MovieDetails;
};
