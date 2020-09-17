import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
    }
    :root {
    --main-bg-color: #f7f9fc;
    --main-head-color: #0c3769;
    --main-hl-color: #e2e3e5;
    --income-tab: #2997e0;
    --expense-tab: #ee553a;
    --transfer-tab: #929292;
    --exchange-tab: #2d9e53;
    --border: #767676;
    }
`;

export default globalStyles;