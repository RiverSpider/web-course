export interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
  baseLink: "/characters";
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
    baseLink: "/characters";
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

export interface Comics {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  baseLink: "/comics";
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  characters: CharacterList;
  baseLink: "/comics";
}

export interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterSummary[];
}

export interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
}
