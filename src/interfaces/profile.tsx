export interface Profile {
  avatar: string;
  name: string;
  headline?: string;
  bio?: string;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  location?: string;
  company?: string;
}
