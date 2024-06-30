//lay ra the div
const productList =document.querySelector('.product-list')

fetch('https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(products => {
  console.log(products)
    products.forEach(
        (product)=>
        {
            const productItem =document.createElement('div')
            productItem.classList.add('product-item')
            //innerhtml
            productItem.innerHTML=
               `<img src='${product.image}'/>
               
               <span>Price: ${product.price} $</span>
                <span>${product.headings}</span> 
               
                        
               `
               productList.appendChild(productItem)
        }
    )
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})