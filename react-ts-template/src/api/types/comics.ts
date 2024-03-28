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

export interface Image {
    path: string;
    extension: string;
}
