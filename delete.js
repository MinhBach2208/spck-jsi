const button = productItem.querySelector('.btn')
        button.addEventListener('click', ()=>{
      fetch(`https://658681bd468ef171392e5320.mockapi.io/bachquangminh/product/${product.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // Do something with deleted task
      }).catch(error => {
        // handle error
      })
        })