"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-6 lg:flex">
      <Link 
        href="/"
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Ana Sayfa
      </Link>
      <Link 
        href="/#hizmetlerimiz" 
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary",
          pathname === "/#hizmetlerimiz" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Hizmetlerimiz  
      </Link>
      <Link 
        href="/#instagram" 
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary",
          pathname === "/#instagram" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Instagram
      </Link>
      <Link 
        href="/#iletisim" 
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary",
          pathname === "/#iletisim" ? "text-primary" : "text-muted-foreground"
        )}
      >
        İletişim
      </Link>
    </nav>
  );
};

export default MainNav;