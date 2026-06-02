import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "./utils";

type ButtonVariant = "primary" | "secondary" | "subtle" | "ghost" | "gold" | "danger" | "floating";
type ButtonSize = "xs" | "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
};

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

function ButtonContent({
  children,
  iconBefore,
  iconAfter,
}: {
  children: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}) {
  return (
    <>
      {iconBefore ? (
        <span className="forma-button__icon forma-button__icon--before" aria-hidden="true">
          {iconBefore}
        </span>
      ) : null}
      <span className="forma-button__label">{children}</span>
      {iconAfter ? (
        <span className="forma-button__icon forma-button__icon--after" aria-hidden="true">
          {iconAfter}
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    iconBefore,
    iconAfter,
  } = props;

  const classes = cx(
    "forma-button",
    `forma-button--variant-${variant}`,
    `forma-button--size-${size}`,
    className
  );

  if (typeof props.href === "string") {
    const {
      children: _children,
      variant: _variant,
      size: _size,
      className: _className,
      iconBefore: _iconBefore,
      iconAfter: _iconAfter,
      href,
      ...anchorProps
    } = props as ButtonAsAnchorProps;

    return (
      <a href={href} className={classes} {...anchorProps}>
        <ButtonContent iconBefore={iconBefore} iconAfter={iconAfter}>
          {children}
        </ButtonContent>
      </a>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    className: _className,
    iconBefore: _iconBefore,
    iconAfter: _iconAfter,
    href: _href,
    ...buttonProps
  } = props as ButtonAsButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      <ButtonContent iconBefore={iconBefore} iconAfter={iconAfter}>
        {children}
      </ButtonContent>
    </button>
  );
}
