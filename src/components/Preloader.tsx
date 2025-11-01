import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative text-center">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width="400"
          height="400"
          viewBox="0 0 400 400"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animate-draw-circle"
          />
        </svg>
        <div className="relative z-10">
          <h1 className="mb-4 text-6xl font-bold text-foreground">
            GOOD THINGS
          </h1>
          <p className="text-xl text-muted-foreground uppercase tracking-wide">
            Are Worth Waiting For
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
