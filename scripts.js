'use strict';
$( document ).ready(function() {

    const theme_btn = document.querySelector('.theme')

    document.body.classList.add("light");

    theme_btn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    })

    document.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    let loader = $('.loader');
    let orderText = $('.order__text');
    let orderSuccess = $('.order__success');

    $('#order__action').click(function () {
        let product = $('#product');
        let name = $('#name');
        let phone = $('#phone');

        let hasError = false; //с самого начала ошибок нет
        $('.error-input').hide(); //для того чтобы ошибка пряталась
        // каждый раз, когда код читается заново

        if (!product.val()) {
            product.next().show();
            hasError = true;
        }
        if (!name.val()) {
            name.next().show();
            hasError = true; //если есть ошибка, то показываем ее
        }

        if (!phone.val()) {
            phone.next().show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: product.val(), name: name.val(), phone: phone.val()}
            })

                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        orderText.css('display', 'none');
                        orderSuccess.css('display', 'flex');
                        console.log(msg)
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }
    })
})
