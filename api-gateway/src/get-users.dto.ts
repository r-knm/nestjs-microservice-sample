export class GetUsersRequestDto {
  users: {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }[];
}
