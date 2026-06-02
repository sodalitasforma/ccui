"use client";

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cx } from "./utils";

type TabsContextValue = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  return useContext(TabsContext);
}

type TabsProps<T extends ElementType = "div"> = {
  as?: T;
  defaultIndex?: number;
} & ComponentPropsWithoutRef<T>;

export function Tabs<T extends ElementType = "div">({
  as,
  defaultIndex = 0,
  className,
  ...props
}: TabsProps<T>) {
  const Component = as || "div";
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const value = useMemo(
    () => ({ activeIndex, setActiveIndex }),
    [activeIndex]
  );

  return (
    <TabsContext.Provider value={value}>
      <Component className={cx("ccui-tabs", className)} {...props} />
    </TabsContext.Provider>
  );
}

type TabListProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function TabList<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: TabListProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx("ccui-tab-list", className)}
      role="tablist"
      {...props}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child as ReactElement<{ index?: number }>, {
          index,
        });
      })}
    </Component>
  );
}

type TabProps<T extends ElementType = "button"> = {
  as?: T;
  active?: boolean;
  index?: number;
} & ComponentPropsWithoutRef<T>;

export function Tab<T extends ElementType = "button">({
  as,
  active,
  index = 0,
  className,
  type,
  onClick,
  ...props
}: TabProps<T> & { type?: "button" | "submit" | "reset" }) {
  const Component = as || "button";
  const context = useTabsContext();
  const isActive = context ? context.activeIndex === index : Boolean(active);

  return (
    <Component
      className={cx("ccui-tab", isActive && "is-active", className)}
      role="tab"
      aria-selected={isActive}
      type={Component === "button" ? type || "button" : type}
      onClick={(event: never) => {
        context?.setActiveIndex(index);
        onClick?.(event);
      }}
      {...props}
    />
  );
}

type TabPanelProps<T extends ElementType = "div"> = {
  as?: T;
  index?: number;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function TabPanel<T extends ElementType = "div">({
  as,
  index = 0,
  className,
  ...props
}: TabPanelProps<T>) {
  const Component = as || "div";
  const context = useTabsContext();
  const hidden = context ? context.activeIndex !== index : false;

  return (
    <Component
      className={cx("ccui-tab-panel", className)}
      role="tabpanel"
      hidden={hidden}
      {...props}
    />
  );
}
