import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `SocialLinks`.
 */
export type SocialLinksProps = SliceComponentProps<Content.SocialLinksSlice>;

/**
 * Component for "SocialLinks" Slices.
 */
const SocialLinks: FC<SocialLinksProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center gap-4"
    >
      {slice.primary.sociallinks.map((socialLink, index) => (
        <PrismicNextLink
          field={socialLink.url}
          key={index}
          className="p-4 rounded-full hover:bg-highlight transition-colors"
        >
          <PrismicNextImage
            field={socialLink.icon}
            className="size-6 invert dark:invert-0"
          />
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default SocialLinks;
