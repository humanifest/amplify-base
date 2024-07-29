import { CSSProperties } from "react";

export enum CssVariables {
  imageUrl = "--image-url",
  color = "--color",
}
export const styleHide: (v: boolean) => CSSProperties | undefined = (
  value
) => ({
  visibility: value ? "visible" : "hidden",
});

export const styleDisplay: (v: boolean) => CSSProperties | undefined = (
  value
) =>
  value === false
    ? {
        display: "none",
      }
    : {};

export const styleTransparently: (v: boolean) => CSSProperties | undefined = (
  value
) => ({
  background: value ? "inherit" : "transparent",
});

export const styleBackgroundImage = (imageUrl: string) =>
  ({
    backgroundImage: `url(${imageUrl})`,
  } as CSSProperties);
