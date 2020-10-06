import React from 'react';
import { useSelector } from 'react-redux';
import { CategoriaCard } from './CategoriaCard';

export const CategoriaList = () => {

    const { categorias } = useSelector( state => state.categorias );
    // console.log(categorias);

    return (
        <div className="card-columns mt-3">
        {
            categorias.map( (categoria) => (
                <CategoriaCard
                    key={ categoria.id }
                    { ...categoria }
                />
            ))
        }
        </div>
    )
}
