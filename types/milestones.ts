import { LocalizedField } from ".";

 
export interface MilestoneItem {
  date: string; // ISO string like "2025-12-19T00:00:00Z" or "2025-12-19"
  label: LocalizedField;
  countdown?: boolean; // Only one should be true ideally
}

export interface MilestonesData {
  title: LocalizedField;
  subtitle: LocalizedField;
  milestones: MilestoneItem[];
  backgroundImage: string; // Image URL
}
