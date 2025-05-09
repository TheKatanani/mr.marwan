interface VideoPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  src,
  title = "Service Video",
  autoPlay = false,
  controls = true,
}: VideoPlayerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
      <video
        src={src}
        title={title}
        className="w-full h-full object-cover"
        controls={controls}
        autoPlay={autoPlay}
      />
    </div>
  );
}
