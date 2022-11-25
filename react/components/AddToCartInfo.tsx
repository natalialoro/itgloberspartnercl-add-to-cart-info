import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import style from './style.css'

//import ProductGroup from './ProductGroup' //Listado de productos
//import Totalizers from './Totalizers'  //valor total
import ButtonGroup from './ButtonGroup'  //Acciones

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
const container = generateBlockClass(style.container, blockClass)
const container__item = generateBlockClass(style.container__item, blockClass)

  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("Este producto tiene esta informacion:", productInfo)
  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={container__item} >
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price}</p>
              <p>Cant: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <hr />
      <div>
        <p>Tienes {items.length} productos en el carrito</p>
        <p>Total ${totalizers[0]?.value}</p>
      </div>
      <ButtonGroup blockClass={blockClass} />
    </div>
  )
}

export default AddToCartInfo
