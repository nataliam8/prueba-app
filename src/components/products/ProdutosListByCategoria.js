import React from 'react';
import { useSelector } from 'react-redux';
import { ProductosTable } from './ProductosTable';

export const ProdutosListByCategoria = () => {

    const { productos } = useSelector( state => state.productos );

    productos.map( (producto,index) => {
    //    console.log(index);
       return producto.inc = index+1;
   });

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Tools</th>
                </tr>
            </thead>
            {
                productos.map( (producto,index) => (
                    
                    <ProductosTable 
                        key={ producto.id }
                        { ...producto}
                        
                    />
                ))
            }    
        </table>
    )
}
