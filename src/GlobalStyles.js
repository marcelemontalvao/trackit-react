import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: 'Lexend Deca';
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /*
    * react-circular-progressbar styles
    * All of the styles in this file are configurable!
    */

    .CircularProgressbar {
        /*
        * This fixes an issue where the CircularProgressbar svg has
        * 0 width inside a "display: flex" container, and thus not visible.
        */
        width: 100%;
        /*
        * This fixes a centering issue with CircularProgressbarWithChildren:
        * https://github.com/kevinsqi/react-circular-progressbar/issues/94
        */
        vertical-align: middle;
    }

    .CircularProgressbar .CircularProgressbar-path {
        stroke: #3e98c7;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease 0s;
    }

    .CircularProgressbar .CircularProgressbar-trail {
        stroke: #d6d6d6;
        /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
        stroke-linecap: round;
    }

    .CircularProgressbar .CircularProgressbar-text {
        fill: #3e98c7;
        font-size: 20px;
        dominant-baseline: middle;
        text-anchor: middle;
    }

    .CircularProgressbar .CircularProgressbar-background {
        fill: #d6d6d6;
    }

    /*
    * Sample background styles. Use these with e.g.:
    *
    *   <CircularProgressbar
    *     className="CircularProgressbar-inverted"
    *     background
    *     percentage={50}
    *   />
    */
    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
        fill: #3e98c7;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
        fill: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
        stroke: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
        stroke: transparent;
    }
`