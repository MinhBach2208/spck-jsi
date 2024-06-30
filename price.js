//lay ra the div
const productList =document.querySelector('.product-list')
console.log(productList)
fetch('https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(products => {
    products.forEach(
        (product)=>
        {
            const productItem =document.createElement('div')
            productItem.classList.add('product-item')
            //innerhtml
            productItem.innerHTML=
               `<img src='${product.image}'/>
               <h3>${product.headings}</h3>
               <span>${product.price}</span>
                     
               `
               productList.appendChild(productItem)
        }
    )
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
// // tao moi mot the 
// const productItem =document.createElement('div')
// //classlist de them class vao 1 the tao ra boi
// // productItem.classList.add('product-item')
// // console.log(productItem)

// products.forEach(
//     (product)=>
//     {
//         const productItem =document.createElement('div')
//         productItem.classList.add('product-item')
//         //innerhtml
//         productItem.innerHTML=
//            `<img src='${product.image}'/>
//            <h3>${product.title}</h3>
//            <span>${product.price}</span>
//             <span>${product.category}</span>  
//             <button>${product.buy}</button>         
//            `
//            productList.appendChild(productItem)
//     }
// )