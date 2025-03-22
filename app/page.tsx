import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import TypewriterAnimation from "@/components/type-writer-animation";
import { InstagramIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Reach your destinations&nbsp;</span>
        <span className={title({ color: "violet" })}>smarter,&nbsp;</span>
        <br />
        <span className={title()}>powered by AI. Your journey, redefined.</span>
        <div className={subtitle({ class: "mt-4" })}>
          AI-driven routes, real-time updates, and community-powered
          insights—all designed to help you{" "}
          <span className="font-bold text-violet-500">GetThere</span>{" "}
          effortlessly.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.navItems[0].href}
        >
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.instagram}
        >
          <InstagramIcon size={20} />
          Estepano
        </Link>
      </div>

      <div className="mt-8">
        <Snippet
          hideCopyButton
          hideSymbol
          variant="bordered"
          className="relative"
        >
          <span className="flex items-center">
            <span className="text-violet-500 font-medium">
              <TypewriterAnimation />
            </span>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
