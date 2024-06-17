import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/button";
import "@/app/fonts.css";

export const BlogGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid h-fit grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BlogGridItem = ({
  className,
  title,
  link,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  link?: string;
  header?: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={cn(
          "row-span-2 min-h-80 mx-2 my-2 rounded-xl h-fit group/bento transition duration-200 p-2 border-white/[0.2] border grid",
          className
        )}
        style={{
          background:
            "linear-gradient(73.32deg, rgba(255, 199, 0, 0.08) 2.81%, rgba(252, 252, 253, 0.0632) 93.81%)",
        }}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 px-1 py-4 transition duration-200">
          <div className="font-sans font-bold text-white mb-2 mt-2 text-lg h-auto min-h-16">
            {title}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            radius="full"
            className="hover:scale-110 transition-all mr-2 mb-2 font-semibold font-primary text-white bg-gradient-to-br from-[#FFC700]/80 to-[#FF5107]/80 w-fit justify-self-end bg-opacity-60"
          >
            <a href={link}>Read More</a>
          </Button>
        </div>
      </div>
    </>
  );
};
