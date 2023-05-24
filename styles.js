import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  // mostly machine Cards/List
    --color-card-bg: hsla(200, 10%, 75%,0.7 );
    --color-button-bg: hsla(200, 10%, 15%,1 );
    --color-button-text: hsla(200, 10%, 95%,0.9 );
    --color-button-text-shadow: hsla(200, 80%, 10%,1);
    --color-button-disabled: hsla(200, 10%, 95%,0.5 );
    //index.js
    --color-link-list: #809A6F;
    --color-linkOne-list: #FEE8B0;
    --color-linkTwo-list: #F97B22;
    --color-LinkThree-list: #C0DBEA;
    //tracker
    --color-DelMeal-button:hsla(200, 10%, 15%,1 );
    --color-DelMeal-button-text: silver;
    --color-tracker-bg: #F3DEBA;
    //progressbars
    --color-bg-progressbars:hsla(200, 10%, 75%,0.7 );
    --color-fg-kcal: #7c0a02;
    --color-fg-carbs: #679457;
    --color-fg-protein: #976ca6;
    --color-fg-fat: #a7b7db;

    
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
      --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
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
  min-height: 100vh;
}

`;
