function Add(){
    let pname = frm.product.value;
    let img = frm.img.value;
    let price = frm.price.value;
    let image = img.slice(11);
    let html =`
        <div class="card">
            <img class="card-img-top" src="../bai2/images/${image}" alt="Card image cap" style="height: 350px;">
            <div class="card-body">
                <h5 class="card-title">${pname}</h5>
                <p class="card-text" id="price">${price}đ</p>
                <button href="#" class="btn btn-success">Đặt mua</button>
            </div>
        </div>
        `;
        let app = document.querySelector('.row');
        app.innerHTML += html;
        console.log(img);
}