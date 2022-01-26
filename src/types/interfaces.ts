export interface ICardComments {
  columnId: string;
  cardId: string;
  id: string;
  content: string;
  author: string;
}

export interface ICard {
  header: string;
  columnId: string;
  id: string;
  description: string | undefined;
}

export interface ColumnState {
  title: string;
  id: string;
}
