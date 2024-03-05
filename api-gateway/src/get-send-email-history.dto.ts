export class GetSendEmailHistoryRequestDto {
  history: {
    toUser: {
      id: number;
      email: string;
      name: string;
    };
    status: 'success' | 'error';
    ts: number;
  }[];
}
