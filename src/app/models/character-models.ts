export interface CharacterUI {
    rank: number;
    name: string;
    description: string;
}

export interface CharacterMetaInfo {
    quantity: number;
    character: CharacterUI;
}