import type { ComponentPropsWithoutRef } from "react";
import { Badge, Cluster } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { LiturgicalColorDot } from "./liturgical-color-dot";
import type { LiturgicalColor, LiturgicalSeason } from "./types";

type LiturgicalSeasonBadgeProps = {
  season: LiturgicalSeason | string;
  color: LiturgicalColor;
} & ComponentPropsWithoutRef<"span">;

const badgeVariantByColor: Record<LiturgicalColor, "liturgicalWhite" | "liturgicalGreen" | "liturgicalViolet" | "liturgicalRed" | "liturgicalRose" | "liturgicalBlack" | "liturgicalGold"> = {
  white: "liturgicalWhite",
  green: "liturgicalGreen",
  violet: "liturgicalViolet",
  red: "liturgicalRed",
  rose: "liturgicalRose",
  black: "liturgicalBlack",
  gold: "liturgicalGold",
};

export function LiturgicalSeasonBadge({
  season,
  color,
  className,
  ...props
}: LiturgicalSeasonBadgeProps) {
  return (
    <Badge
      variant={badgeVariantByColor[color]}
      className={cx("ccui-liturgical-season-badge", className)}
      {...props}
    >
      <Cluster gap="xs" align="center">
        <LiturgicalColorDot color={color} aria-hidden="true" />
        {season}
      </Cluster>
    </Badge>
  );
}
