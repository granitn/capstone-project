import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-card-bg: hsla(200, 10%, 75%,0.7 );
    --color-button-bg: hsla(200, 10%, 15%,1 );
    --color-button-text: hsla(200, 10%, 95%,0.9 );
    --color-button-text-shadow: hsla(200, 80%, 10%,1);

    
    --shadow-color: 204deg 10% 25%;
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    


  }
  


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }


  #__next {
  height: 100vh;
}

`;
