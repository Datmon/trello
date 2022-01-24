export interface CardInteface {
  header?: string;
  description?: string;
  title: string;
  key: string | number;
  column: number;
  commnets?: [
    {
      author: string;
      content: string;
      key: string | number;
    }
  ];
}

export interface NewBlock {
  title: string;
  cards: CardInteface[];
}
