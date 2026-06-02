import type { ComponentPropsWithoutRef } from "react";
import { Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type SacredMediaFrameVariant =
  | "rose-window"
  | "stained-glass"
  | "cross-field"
  | "plain";

export type SacredMediaFrameProps = {
  src?: string;
  alt?: string;
  variant?: SacredMediaFrameVariant;
  label?: string;
  caption?: string;
} & ComponentPropsWithoutRef<"figure">;

export function SacredMediaFrame({
  src,
  alt = "",
  variant = "rose-window",
  label = "Sacred media",
  caption,
  className,
  ...props
}: SacredMediaFrameProps) {
  return (
    <figure
      className={cx(
        "ccui-sacred-media-frame",
        `ccui-sacred-media-frame--${src ? "image" : variant}`,
        className
      )}
      {...props}
    >
      {src ? (
        <img className="ccui-sacred-media-frame__image" src={src} alt={alt} />
      ) : (
        <div className="ccui-sacred-media-frame__pattern" aria-hidden="true">
          <span className="ccui-sacred-media-frame__ring ccui-sacred-media-frame__ring--outer" />
          <span className="ccui-sacred-media-frame__ring ccui-sacred-media-frame__ring--middle" />
          <span className="ccui-sacred-media-frame__ring ccui-sacred-media-frame__ring--inner" />
          <span className="ccui-sacred-media-frame__cross" />
        </div>
      )}

      <Stack gap="xs" className="ccui-sacred-media-frame__content">
        {label ? (
          <Text as="p" size="xs" className="ccui-sacred-media-frame__label">
            {label}
          </Text>
        ) : null}

        {caption ? (
          <Text as="figcaption" size="sm" tone="secondary">
            {caption}
          </Text>
        ) : null}
      </Stack>
    </figure>
  );
}
