import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDeleteComponent from "./ButtonDeleteComponent";
//import ButtonInfoComponent from "./ButtonInfoComponent";


function CardComponent({ el, onDelete }) {
    //console.log(el.tags)

    return (
        <div className="card" >
            <img src={el.image} alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{el.title}</h3>
                    <ul className="d-flex">
                        {el.tags.map((tag) => {
                            <li className="post-tags" key={tag}>
                                {tag}
                            </li>
                        })}
                    </ul>
                </div>
                <p>{el.content.substring(0, 200)}...</p>
                <Link className='btn btn-warning' to={`/posts/${el.id}`}>Vedi dettaglio</Link>
                <ButtonDeleteComponent onDelete={() => onDelete(el.id)} />
            </div>
        </div>
    )
}

export default CardComponent;