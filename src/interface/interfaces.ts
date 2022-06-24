export interface ICreator {
  id: number;
  type: string;
  time: string;
  title: string;
  location: ILocation;
  creator: ICreater;
  guests: IGuest[];
  comments: Icomment[];
}

interface ILocation {
  name: string;
  latitude: number;
  longitude: number;
}

interface IGuest {
  name: string;
  avatarUrl: string;
}

interface ICreater {
  name: string;
  avatarUrl: string;
}

interface Icomment {
  user: {
    name: string;
    avatarUrl: string;
  };
  timestamp: string;
  message: string;
}
