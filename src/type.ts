export type LoginType = {
  username: string;
  password: string;
};
export type PositionRequest = {
  description: string;
  location: string;
  fullTime: string
}
export type PositionData = {
  id: string;
  url: string;
  type: string
  createdAt: string
  company: string
  companyUrl: string
  location: string
  title: string
  description: string
  howToApply: string
  companyLogo: string
};
