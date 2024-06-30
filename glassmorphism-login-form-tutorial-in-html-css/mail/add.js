//xac dinh the input co id la image, category
const imageInput=document.querySelector('#image')
const priceInput=document.querySelector('#price')
const headingsInput=document.querySelector('#headings')
const buttonInput=document.querySelector('#btn')
//lay gia tri- value
buttonInput.addEventListener('click',
//ham co mui ten
(e)=>{
    //lay value cua image
    e.preventDefault();
    const imageValue =imageInput.value
    const headingsValue=headingsInput.value
    const priceValue=priceInput.value



//dong goi du lieu
const product={
    image: imageValue,
    headings :headingsValue,
    price :priceValue,
};
//xuat product

  
  fetch('https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(product)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
  }).catch(error => {
    // handle error
  })
}
)


