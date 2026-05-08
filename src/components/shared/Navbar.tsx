// import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  MailOpen,
  Menu,
  Phone,
  YoutubeIcon,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function GoogleCalendarButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Inject CSS
    const link = document.createElement("link");
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inject script
    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar?.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/AcZssZ03BgaPHAg6Pbd2FccFRycJp_qlaLTROpvG7z4=?gv=true",
          color: "#180080",
          label: "Book an appointment",
          target: buttonRef.current,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={buttonRef}></div>;
}

const socialLinks = [
  {
    href: "https://web.facebook.com/profile.php?id=61579773290546",
    icon: <Facebook className="h-4 w-4 text-white" />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/leyra_nd2025/",
    icon: <Instagram className="h-4 w-4 text-white" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@LeyrandLawFirm",
    icon: <YoutubeIcon className="h-4 w-4 text-white" />,
    label: "YouTube",
  },
  {
    href: "https://twitter.com/",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.085A12.72 12.72 0 0 1 3.11 4.86a4.48 4.48 0 0 0 1.388 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.112A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z" />
      </svg>
    ),
    label: "X",
  },
  {
    //
    href: "https://www.tiktok.com/@leyrandlawfirm?lang=en-GB",

    icon: <FaTiktok className="h-4 w-4 text-white" />,
    label: "TikTok",
  },
  {
    href: "https://www.linkedin.com/",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
    label: "LinkedIn",
  },
];

var headerMenu = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About us",
    link: "/about-us",
  },
  {
    id: 2,
    name: "Our Experties",
    link: "/our-services",
  },
  {
    id: 3,
    name: "Insights",
    link: "/insights",
  },
  {
    id: 4,
    name: "Careers",
    link: "/careers",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change background after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`h-20 md:h-28 fixed left-0 right-0 top-0 transition-all z-50 ${
          isScrolled ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <div className="h-full flex flex-col w-full">
          <div className={cn("h-8 w-full bg-primary hidden md:block")}>
            <div className="h-8 w-full flex justify-between items-center px-4 md:px-8 text-white text-xs md:text-sm">
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+255786701586" className="hover:underline">
                    +255786701586
                  </a>
                </div>
                <div className="hidden md:flex gap-2 items-center">
                  <MailOpen className="h-4 w-4" />
                  <a href="mailto:info@leyrand.org" className="hover:underline">
                    info@leyrand.org
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-grow w-full">
            <div className="flex max-w-7xl m-auto justify-between items-center px-4 md:px- h-full">
              <Link to="/">
                <div className={cn(!isScrolled ? "block" : "hidden")}>
                  <img src="/logo-white.svg" className="h-12" alt="" />
                </div>
                <div className={cn(isScrolled ? "block" : "hidden")}>
                  <img src="/logo.svg" className="h-12" alt="" />
                </div>
              </Link>
              <div className="flex flex-row gap-2 items-center md:hidden">
                <Sheet>
                  <SheetTrigger>
                    <Button variant="outline" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <div className="flex flex-col items-center gap-4 bg-primary p-4">
                        <Link to="/">
                          <img
                            src="/logo-white.svg"
                            className="h-12"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <SheetDescription className="p-4">
                        <div className="flex flex-col gap-4">
                          {headerMenu.map((item) => (
                            <a
                              className="text-primary text-lg font-normal hover:underline"
                              href={item.link}
                              key={item.id}
                            >
                              {item.name}
                            </a>
                          ))}
                          <Button
                            size="lg"
                            asChild
                            className="border-none rounded-none mt-4"
                          >
                            <a
                              href="https://calendly.com/rajabumrisho69/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Contact us
                            </a>
                          </Button>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="gap-8 items-center hidden md:flex">
                <div className="flex flex-row gap-8">
                  {headerMenu.map((item) => (
                    <a
                      className={cn(
                        "hover:underline underline-offset-4 decoration-2 text-primary text-lg font-normal cursor-pointer",
                        !isScrolled && "text-white"
                      )}
                      href={item.link}
                      key={item.id}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex gap-2">
                  {/* <div className="hidden md:block">
                    <Button size="lg" asChild variant={"outline"}>
                      <a href="/account/login/">Login</a>
                    </Button>
                  </div> */}

                  {/* <Button
                    size="lg"
                    asChild
                    className="border-none rounded-none"
                  >
                    <a
                      href="https://calendly.com/rajabumrisho69/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact us
                    </a>
                  </Button> */}
                  <GoogleCalendarButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
