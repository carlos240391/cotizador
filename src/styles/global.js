import { createGlobalStyle, css } from "styled-components";
import { colores, fontSize, fuentes } from "./values";

//Esta funcion itera un arreglo con fuentes
const fonts = (fuentes) => {
  const mapFonts = fuentes.map((fuente) => {
    return `  @font-face{
                            font-family:${fuente.fontfamily};
                            src:url(${fuente.src});
                        }`;
  });
  return mapFonts;
};

const variables = css`
  :root {
    ${colores}
    ${fontSize}
  }
`;

//InitStyles va declarado en index.js

export const InitStyles = createGlobalStyle`
            
    ${fonts(fuentes)}
    ${variables}

    *{
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        font-family:"Regular";
        scrollbar-width:none!important;  
        color:var(--font_color);
        ::-webkit-scrollbar{
            display:none;
        }
    }
    h1,h2,h3{
        font-size:var(--title_size);
        font-family:'Bold';
        color:var(--title_color);
    }   
    h4,h5,h6{
        font-size:var(--subtitle_size);
        font-family:'Medium';
    }
    p{
        font-size:var(--p_size);
    } 
    button,a{
        background:none;
        border:none;
        text-decoration:none;
        font-size:var(--btn_size);
        cursor:pointer;
    }
    input, textarea,select{
        width:100%;
        outline:none;
        padding:10px;
        outline:none;
        height:48px;
        border:1px solid var(--input_border);
        border-radius:3px;
        :focus{
            border:1px solid var(--primary_color);
        }
        ::placeholder{
            color:var(--input_border);
        }
    }
    select{
        cursor:pointer;
    }
    textarea{
        width:100%;
        height:150px;
        resize: none;
        padding:10px;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    mark{
        background:var(--success_color);
        padding:0px 5px;
        color:var(--light);
        border-radius:3px;
    }
    
   
`;