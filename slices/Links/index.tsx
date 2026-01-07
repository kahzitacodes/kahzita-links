import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Links`.
 */
export type LinksProps = SliceComponentProps<Content.LinksSlice>;

/**
 * Component for "Links" Slices.
 */
const Links: FC<LinksProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-4 items-center max-w-135 w-full"
    >
      {slice.primary.links.map((link) => (
        <PrismicNextLink
          field={link}
          key={link.key}
          className="w-full text-center py-4 px-6 border rounded-lg border-stroke hover:border-text transition-colors backdrop-blur hover:bg-surface-muted bg-surface"
        />
      ))}
    </section>
  );
};

export default Links;
