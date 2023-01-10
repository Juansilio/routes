import React, {useState} from 'react'
import ProyectosCard from './ProyectosCard'
const ProyectosContenedor = () => {
    const [proyectos, setProyectos] = useState ([
        {id: 1, titulo: 'Proyecto 1', texto: "Primer proyecto", link: ""},
        {id: 2, titulo: 'Proyecto 2', texto: "Segundo proyecto", link: ""},
        {id: 3, titulo: 'Proyecto 3', texto: "Tercer proyecto", link: ""},

    ])
    return (
        <main>
            <h1>Proyectos Personales</h1>
            <div className='container d-flex justify-content-center align-items-center'>
             {proyectos && proyectos.map(proyecto =>(
                <ProyectosCard props={proyecto}  />
             ))}
            </div>
        </main>
    )
}
export default ProyectosContenedor