import React from 'react'

const ProyectosCard = ({props}) => {
    return (
        <div className="card m-5" style={{width: "12rem"}}>
            <img src="https://picsum.photos/200"
            className='card-img-top' alt="..."/>
            <div className="card-body">
                <h5 className='card-tittle'>{props.titulo}</h5>
                <p className="card-text"> {props.texto}</p>
                <a href={props.url} className="btn-primary"> Visitar proyecto</a>
            </div>
        </div>
    )
}
export default ProyectosCard