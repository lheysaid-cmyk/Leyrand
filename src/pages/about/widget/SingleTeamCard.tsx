import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function SingleTeamCard({
  image,
  title,
  subtitle,
  description,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <div className="aspect-square">
              <img
                className={cn(
                  "h-full w-full transition duration-300 hover:opacity-80"
                )}
                //   onLoad={() => setLoading(false)}
                src={image}
                loading="lazy"
                decoding="async"
                alt={"Background of a beautiful view"}
              />
            </div>
            <div className="font-semibold text-xl text-primary hover:underline text-center">
              {title
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}
            </div>
            <p className="text-lg text-center">{subtitle}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="h-[90vh] min-w-[80vw] p-0 m-0">
          <ScrollArea className="w-full h-[90vh] p-4 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="flex justify-center items-center md:col-span-2">
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full max-w-xs object-cover"
                />
              </div>
              <div className="flex flex-col justify-center md:col-span-5">
                <DialogTitle className="mb-2 md:text-3xl">{title}</DialogTitle>
                <DialogDescription className="mb-2 md:text-lg">
                  {subtitle}
                </DialogDescription>
                {description}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SingleTeamCard;
