// Custom Badge component
const Badge = ({ variant = "default", className, children, ...props }) => {
  const variantClasses = [
    "alumni",
    "research",
    "studentLife",
    "career",
    "facilities",
    "campus",
    "events",
    "science",
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center bg-yellow-600 text-black px-2.5 py-0.5 text-xs font-medium transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
