interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = "YouTube video" }: YouTubeEmbedProps) => (
  <div className="overflow-hidden rounded-xl shadow-lg">
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default YouTubeEmbed;
