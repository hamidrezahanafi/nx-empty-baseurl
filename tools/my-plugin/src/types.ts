import type { NamedExoticComponent, RefAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type SVGIconComponent<T extends {} = {}> = NamedExoticComponent<
  T & SVGIconProps & RefAttributes<SVGElement>
>;

export interface SVGIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "ref" | "direction"> {
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: React.ElementType;
  /**
   * Provides a human-readable title for the element that contains it.
   * Keep this value empty if the icon is decorative only
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string;
  /**
   * The height of the SVG component element.
   * Override to only allow string values.
   */
  height?: string;
  /**
   * The width of the SVG component element.
   * Override to only allow string values.
   */
  width?: string;
  /**
   * The margin of the SVG component element.
   */
  margin?: string;
}
