import React from 'react';

const TodayIcon = (props) => {
  const day = new Date().getDate();
  return (
    <svg {...props} width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <title>ionicons-v5-q</title>
      <text textAnchor="middle" y="79%" x="50%" fontSize="26rem" style={{ fontWeight: 'bold'}}>{day}</text>
      { /*<g shapeRendering="auto"style={ { strokeWidth: '2.5' } } >
        <path d="m53 68.5c-8.9421 0-16.5 7.5579-16.5 16.5v374c0 8.9421 7.5579 16.5 16.5 16.5h406c8.9421 0 16.5-7.5579 16.5-16.5v-374c0-8.9421-7.5579-16.5-16.5-16.5zm6.5 23h393v361h-393z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" opacity=".99873" solidcolor="#000000" stopColor="#000000" />
        <path d="m399.45 70.109h-283.64c-54.331 0-66.18-2.6917-66.18 54.298v36.199h8.9218c0-12.928 1.4049-25.857 17.405-25.857h358.8c16 0 18.468 12.928 18.468 25.857h12.407v-36.199c0-52.058-9.357-54.298-66.18-54.298z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" solidcolor="#000000" stopColor="#000000" />
        <path d="m97.361 69.648c-16.591 0.102-27.793 0.92247-35.264 5.8633-4.9804 3.2939-8.2263 8.4286-10.203 16.258-1.9768 7.8292-2.7148 18.374-2.7148 32.637v36.648h9.8223v-0.44922c0-6.4477 0.3658-12.857 2.6562-17.58s6.4199-7.8262 14.299-7.8262h358.8c7.8789 0 12.288 3.1166 14.84 7.8438 2.5517 4.7271 3.1797 11.127 3.1797 17.562v0.44922h13.307v-36.648c0-13.028-0.58326-22.954-2.3633-30.549-1.78-7.5944-4.7823-12.875-9.5996-16.48-9.6347-7.2114-26.251-7.7168-54.668-7.7168h-283.64c-6.7895 0-12.919-0.04572-18.449-0.01172zm18.449 0.91016h283.64c28.406 0 44.881 0.61398 54.131 7.5371 4.6248 3.4616 7.5116 8.5018 9.2617 15.969 1.7501 7.4669 2.3379 17.341 2.3379 30.342v35.75h-11.537c-0.0286-6.3414-0.63848-12.689-3.2578-17.541-2.6823-4.9691-7.5098-8.3164-15.631-8.3164h-358.8c-8.1211 0-12.695 3.3604-15.107 8.334-2.3553 4.8566-2.7102 11.195-2.7266 17.523h-8.043v-35.75c0-14.232 0.7428-24.722 2.6855-32.416 1.9428-7.6944 5.0549-12.572 9.8281-15.729 9.5465-6.3138 26.044-5.7031 53.217-5.7031z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" solidcolor="#000000" stopColor="#000000" />
        <path d="m128 36.5a11.5 11.5 0 0 0-11.5 11.5v32a11.5 11.5 0 0 0 11.5 11.5 11.5 11.5 0 0 0 11.5-11.5v-32a11.5 11.5 0 0 0-11.5-11.5z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" solidcolor="#000000" stopColor="#000000" />
        <path d="m384 36.5a11.5 11.5 0 0 0-11.5 11.5v32a11.5 11.5 0 0 0 11.5 11.5 11.5 11.5 0 0 0 11.5-11.5v-32a11.5 11.5 0 0 0-11.5-11.5z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" solidcolor="#000000" stopColor="#000000" />
      </g>
  */ }
 <path d="m53 64c-11.357 0-21 9.6428-21 21v374c0 11.357 9.6428 21 21 21h406c11.357 0 21-9.6428 21-21v-374c0-11.357-9.6428-21-21-21h-406zm11 32h384v352h-384v-352z" />
 <g shapeRendering="auto">
  <path d="m399.45 70.109h-283.64c-54.331 0-66.18-2.6917-66.18 54.298v36.199h8.9218c0-12.928 1.4049-25.857 17.405-25.857h358.8c16 0 18.468 12.928 18.468 25.857h12.407v-36.199c0-52.058-9.357-54.298-66.18-54.298z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" stopColor="#000000" />
  <path d="m97.361 69.648c-16.591 0.102-27.793 0.92247-35.264 5.8633-4.9804 3.2939-8.2263 8.4286-10.203 16.258-1.9768 7.8292-2.7148 18.374-2.7148 32.637v36.648h9.8223v-0.44922c0-6.4477 0.3658-12.857 2.6562-17.58s6.4199-7.8262 14.299-7.8262h358.8c7.8789 0 12.288 3.1166 14.84 7.8438 2.5517 4.7271 3.1797 11.127 3.1797 17.562v0.44922h13.307v-36.648c0-13.028-0.58326-22.954-2.3633-30.549-1.78-7.5944-4.7823-12.875-9.5996-16.48-9.6347-7.2114-26.251-7.7168-54.668-7.7168h-283.64c-6.7895 0-12.919-0.04572-18.449-0.01172zm18.449 0.91016h283.64c28.406 0 44.881 0.61398 54.131 7.5371 4.6248 3.4616 7.5116 8.5018 9.2617 15.969 1.7501 7.4669 2.3379 17.341 2.3379 30.342v35.75h-11.537c-0.0286-6.3414-0.63848-12.689-3.2578-17.541-2.6823-4.9691-7.5098-8.3164-15.631-8.3164h-358.8c-8.1211 0-12.695 3.3604-15.107 8.334-2.3553 4.8566-2.7102 11.195-2.7266 17.523h-8.043v-35.75c0-14.232 0.7428-24.722 2.6855-32.416 1.9428-7.6944 5.0549-12.572 9.8281-15.729 9.5465-6.3138 26.044-5.7031 53.217-5.7031z" />
 </g>
 <path d="m128 32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16 16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
 <path d="m384 32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16 16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
    </svg>
  );
}


export default TodayIcon;
