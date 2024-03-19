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

export interface Comics {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  characters: CharacterList;
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
