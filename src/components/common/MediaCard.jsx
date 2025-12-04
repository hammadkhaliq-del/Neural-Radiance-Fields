const MediaCard = ({ type = "image", src, caption, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 aspect-[4/3] w-full flex items-center justify-center relative">
        {type === "video" ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={src} alt={alt || caption} className="w-full h-full object-cover" />
        )}
        {/* Label overlay */}
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {type === 'video' ? '3D NeRF Output' : '2D Input Slice'}
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-sm text-gray-600 text-center">{caption}</p>
      )}
    </div>
  );
};
export default MediaCard;