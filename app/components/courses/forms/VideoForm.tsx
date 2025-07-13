"use client";

import { Course } from "@/types/course";
import Video from "../../VideoHandler";
import LocalizedList from "../../LocalizedList";

interface Props {
  form: Course;
  handleChange: (path: string, value: any) => void;
}

export default function VideoSectionForm({ form, handleChange }: Props) {
  return (
    <div className="space-y-4">
      {/* Video Upload */}
      <Video
        videoUrl={form.video_section.video_url}
        field="video_section.video_url"
        handleChange={handleChange}
      />

      <LocalizedList
        label="Course Content List"
        value={form.video_section.content_list}
        onChange={(val) => handleChange("video_section.content_list", val)}
      />
    </div>
  );
}
