export interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface Image {
    path: string;
    extension: string;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: Image;
    comics: ComicList;
}

export interface ComicList {
    available: number;
    returner: number;
    collectionURI: string;
    items: ComicSummary[];
}

export interface ComicSummary{
    resurceURI: string;
    name: string;
}
