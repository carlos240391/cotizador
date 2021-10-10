//Aqui van declaradas las variables globales
//----------------------------------------->
//Aqui se importa el src de las fuentes
import regular from '../assets/fonts/Poppins-Regular.ttf'
import medium from '../assets/fonts/Poppins-Medium.ttf'
import bold from '../assets/fonts/Poppins-Bold.ttf'
import black from '../assets/fonts/Poppins-Black.ttf'
//
localStorage.setItem('color', '#262A53')
const getColor = localStorage.getItem('color');


//Array con fuentes para iterar
export const fuentes = [
    {
        fontfamily:'Regular',// <--- este es el valor que se utiliza en todo el css
        src:`${regular}`
    },
    {
        fontfamily:'Black',// <--- este es el valor que se utiliza en todo el css
        src:`${black}`
    },{
        fontfamily:'Medium',// <--- este es el valor que se utiliza en todo el css
        src:`${medium}`
    },{
        fontfamily:'Bold',// <--- este es el valor que se utiliza en todo el css
        src:`${bold}`
    }
]

//Aqui se setean los colores

export const colores = {
    '--light':'#ffffff',
    '--dark':'#000000',
    '--title_color':'#231E23',
    '--font_color': '#565656',
    '--primary_color': getColor ? getColor : '#233E8B',
    '--success_color': '#61B15A',
    '--warning_color':'#FFC069',
    '--error_color': '#F05454',
    '--softgray_color':'#b5b5b5',
    '--input_border':'#cdcdcd',
    
}



export const fontSize = {
    '--title_size':'1.6rem',
    '--subtitle_size':'1.3rem',
    '--p_size':'15px',
    '--btn_size':'18px',
}