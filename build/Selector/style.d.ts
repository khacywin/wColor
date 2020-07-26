interface PropsTheme {
    light?: boolean;
    dark?: boolean;
}
declare const WColor: import("styled-components").StyledComponent<"div", any, PropsTheme, never>;
declare const WColorHeading: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const WColorContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
interface PropsStyled {
    color: string;
    active?: boolean;
}
declare const WColorItemWrap: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const WColorItem: import("styled-components").StyledComponent<"div", any, PropsStyled, never>;
declare const WColorAdd: import("styled-components").StyledComponent<"label", any, {}, never>;
export { WColor, WColorContainer, WColorHeading, WColorItemWrap, WColorItem, WColorAdd };
