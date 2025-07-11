import { LocalizedField } from ".";

export interface JoinCommunityStats {
  value: string;
  label: LocalizedField;
}

export interface JoinCommunityData {
  video_section: { 
    title: LocalizedField;
    subtitle: LocalizedField;
    stats: JoinCommunityStats[];
  };
}
