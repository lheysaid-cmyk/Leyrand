import { MovingLogoCards } from "@/components/ui/moving-logo-cards";

export function CustomerLogo() {
  return (
    <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <MovingLogoCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    logo: "/logo.svg",
  },
  {
    logo: "/logo.svg",
  },
  {
    logo: "/logo.svg",
  },
  {
    logo: "/logo.svg",
  },
  {
    logo: "/logo.svg",
  },
];
