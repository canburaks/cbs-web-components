/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CbsHero {
        "cover": string;
        "description": string;
        "header": string;
        "overlay": number;
    }
}
declare global {
    interface HTMLCbsHeroElement extends Components.CbsHero, HTMLStencilElement {
    }
    var HTMLCbsHeroElement: {
        prototype: HTMLCbsHeroElement;
        new (): HTMLCbsHeroElement;
    };
    interface HTMLElementTagNameMap {
        "cbs-hero": HTMLCbsHeroElement;
    }
}
declare namespace LocalJSX {
    interface CbsHero {
        "cover"?: string;
        "description"?: string;
        "header"?: string;
        "overlay"?: number;
    }
    interface IntrinsicElements {
        "cbs-hero": CbsHero;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cbs-hero": LocalJSX.CbsHero & JSXBase.HTMLAttributes<HTMLCbsHeroElement>;
        }
    }
}