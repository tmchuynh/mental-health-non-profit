export interface ServiceCategory {
  name: string;
  description: string;
  features: string[];
}

export interface ServiceMeeting {
  name: string;
  hostedBy: string;
  time: string;
  location: string;
  description: string;
  introduction: string;
  fee: number;
}
