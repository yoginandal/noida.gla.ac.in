import { cn } from "@/lib/utils";

function Heading({
  children,
  level = 2,
  align = "left",
  className,
  subtext,
  subtextClassName,
}) {
  const Tag = `h${level}`;

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const defaultHeadingClasses =
    "font-bold tracking-tight font-family-heading font-serif";
  const defaultSubtextClasses = "text-muted-foreground mt-2";

  const headingSizes = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-5xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };

  return (
    <div className={cn(alignmentClasses[align])}>
      <Tag
        className={cn(defaultHeadingClasses, headingSizes[level], className)}
      >
        {children}
      </Tag>
      {subtext && (
        <p className={cn(defaultSubtextClasses, subtextClassName)}>{subtext}</p>
      )}
    </div>
  );
}

export { Heading };
