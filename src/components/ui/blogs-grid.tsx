import { cn } from "@/utils/cn";
import {Button} from "@nextui-org/button";

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
        "grid h-fit grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto ",
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
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (<>
    <div
      className={cn(
        "row-span-2 min-h-80 mx-2 my-2 backdrop-blur-2xl bg-gradient-to-r from-yellow-600  to-yellow-300/80 rounded-xl h-fit group/bento  transition duration-200 p-2 border-white/[0.2] border grid",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 px-1 py-4 transition duration-200">
        <div className="font-sans font-bold text-black mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-sans font-semibold text-black text-md h-16">
          {description}
        </div>
      </div>
        <Button radius="full" className="hover:scale-110 transition-all mr-2 mb-2 font-bold bg-gradient-to-r from-black to-gray-700 w-fit justify-self-end">
          Read More
        </Button>
    </div>
  </>
  );
};
