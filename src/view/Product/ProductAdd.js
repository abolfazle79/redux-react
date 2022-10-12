import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { productAdd } from "../../state-management/actions/productAction";


export const ProductAdd = () => {
    const id = useRef();
    const title = useRef();
    const price = useRef();
    const dispatch = useDispatch();


    const save = () => {
        let item = {};
        item.id = id.current.value
        item.title = title.current.value;
        item.price = price.current.value;
        console.log(item);
        dispatch(productAdd(item))
    }

    return (
        <div>
            <h2>Add New Product</h2>
            <div>
                Id : <input ref={id} />
            </div>
            <div>
                title : <input ref={title} />
            </div>
            <div>
                price : <input ref={price} />
            </div>
            <button onClick={() => save()}>Save</button>
        </div>
    )
}
