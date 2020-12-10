import styled from 'styled-components'
import React from 'react';
import { useState } from 'react';

const Icon = styled.svg.attrs({
    version: '1.1',
    xmlns: "http://www.w3.org/2000/svg",
})``

const Svg = styled(Icon)`

    width: 27px;
    height: 30px;

`


export default function Avatar(props) {
    const [color, setColor ]= useState("#B8B8B8")
    const changeColor = (color)=>{
        setColor(color)
    }
  return (
   <Svg
        onMouseOver={()=>changeColor("#5CB646")} 
        onMouseOut={()=>changeColor("#B8B8B8")}
        viewBox="0 0 27 30">
    <g fill={color} fill-rule="nonzero">
        <path d="M13.441 16.452h.208c1.904-.032 3.443-.683 4.58-1.929 2.502-2.744 2.086-7.448 2.04-7.897-.162-3.37-1.8-4.982-3.15-5.735C16.11.33 14.934.025 13.622 0H13.512c-.72 0-2.137.114-3.495.866-1.364.753-3.027 2.365-3.19 5.76-.045.45-.46 5.153 2.04 7.897 1.13 1.246 2.67 1.897 4.574 1.929zM8.562 6.784c0-.019.007-.038.007-.05.214-4.534 3.52-5.02 4.937-5.02h.078c1.754.037 4.736.733 4.938 5.02 0 .019 0 .038.006.05.007.044.462 4.344-1.604 6.607-.82.898-1.91 1.34-3.346 1.353h-.065c-1.43-.012-2.528-.455-3.34-1.353-2.06-2.25-1.617-6.569-1.611-6.607z"/>
        <path d="M26.127 23.985v-.018c0-.049-.006-.097-.006-.152-.038-1.2-.121-4.004-2.882-4.9-.019-.007-.044-.013-.063-.019-2.87-.696-5.255-2.271-5.28-2.29a.885.885 0 0 0-1.196.2.792.792 0 0 0 .21 1.14c.108.072 2.64 1.75 5.808 2.525 1.482.503 1.647 2.011 1.692 3.393 0 .054 0 .103.006.151.006.545-.032 1.387-.134 1.872-1.03.557-5.07 2.483-11.214 2.483-6.12 0-10.185-1.932-11.222-2.49-.101-.484-.146-1.326-.133-1.871 0-.049.006-.097.006-.152.045-1.38.21-2.889 1.692-3.392 3.168-.775 5.7-2.46 5.808-2.526a.792.792 0 0 0 .21-1.139.885.885 0 0 0-1.196-.2c-.025.019-2.398 1.594-5.28 2.29-.025.006-.044.012-.063.018C.129 19.811.046 22.616.008 23.81c0 .055 0 .103-.006.151v.019c-.007.315-.013 1.932.324 2.744.064.157.178.29.33.381C.849 27.226 5.422 30 13.075 30s12.226-2.78 12.417-2.896a.821.821 0 0 0 .33-.381c.319-.806.313-2.423.306-2.738z"/>
    </g>
   </Svg>
  );
}

    




