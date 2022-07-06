import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import '../assets/fonts/font.css'


// 모바일 100vh가 필요한곳에서
// height: calc(var(--vh, 1vh) * 100); 이렇게 사용하기

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    :root {
        --vh: 100%;
    }
    *, *::before, *::after {
        box-sizing: border-box;
      }
      
    html, body {
      overscroll-behavior-y: contain;
    }

    body {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        min-height: 100vh;
        height: -webkit-fill-available;
        min-height: -webkit-fill-available;
        word-break: break-all;
    }
    body {
    font-family: "Noto Sans Korean", sans-serif;
    }
`;

export default GlobalStyle;