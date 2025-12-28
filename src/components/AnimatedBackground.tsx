export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Blob 1 - Purple */}
      <div
        className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Blob 2 - Blue */}
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full animate-blob animation-delay-2"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Blob 3 - Cyan */}
      <div
        className="absolute bottom-0 left-1/4 w-[650px] h-[650px] rounded-full animate-blob animation-delay-4"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}
