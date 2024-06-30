// lay thong tin tu form 
const productid= document.getElementById('productid')
console.log(productid)
const image = document.getElementById('image')

const headings = document.getElementById('headings')
const price = document.getElementById('price')
const form = document.getElementById('updateTaskForm')
const button=document.getElementById('btn')
// form.addEventListener('submit', function(e){
//     e.preventDefault();// xoa loading lai 1 lan nua
//     const productValue= productid.value
//     const updateProduct ={
       
//         headings: headings.value,
//         price: price.value,
//     }
//     console.log(updateProduct)
    
// fetch(`https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product/${productValue}`, {
//     method: 'PUT', // or PATCH
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify(updateProduct)
//   }).then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     // handle error
//   }).then(product => {
//     // Do something with updated task
//     console.log(product)
//     window.location= "./price.html"
    
//   }).catch(error => {
//     // handle error
//   })
    
//} )
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const productValue = productid.value;
    const updateProduct = {
        headings: headings.value,
        price: price.value,
        image:image.value,
    };
    console.log(updateProduct);

    fetch(`https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product/${productValue}`, {
        method: 'PUT', // or PATCH
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(updateProduct)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(product => {
        // Do something with updated product
        console.log(product);
        window.location = "./price.html"; // Redirect to price.html
    }).catch(error => {
        // handle error
    });
});
