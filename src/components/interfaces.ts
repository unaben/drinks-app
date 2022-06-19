export interface ICreator {
  id: number;
  type: string;
  time: string;
  title: string;
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
  creator: {
    name: string;
    avatarUrl: string;
  };
  guests: {
    name: string;
    avatarUrl: string;
  }[];
  comments: {
    user: {
      name: string;
      avatarUrl: string;
    };
    timestamp: string;
    message: string;
  }[];
}
