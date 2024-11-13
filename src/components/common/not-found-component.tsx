import { cn } from "../../utils/cn";

type NotFoundComponentProps = {
  message: string;
  className?: string;
};
export default function NotFoundComponent({
  message,
  className,
}: NotFoundComponentProps) {
  return (
    <div
      className={cn(
        "bg-white font-[600] shadow-lg flex justify-center items-center text-xl text-center md:text-2xl xl:text-4xl text-main-800 min-h-[60vh]  w-[85%] z-[2] relative",
        className
      )}
    >
      {message}
    </div>
  );
}
