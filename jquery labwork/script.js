

$(document).ready (function (){ // главный метод

    $(document).on( 'click', '.close', function (){ // при нажатии на img с классом close будет выполняться наша функция
        $(this).parents(".card").fadeOut(); // this это наш img close а parents вызывет всех родителей с классом .card
                                    //fadeOut () плавно удаляет нашу парент дивку
    });

    $(document).on( 'click', '.basket', function (){ // так жк при нажатии на img basket будет выполняться функция
        $(this).attr('src', 'dollar-symbol.png'); // с помощью attr метода мы изменяем атрибут src на путь к img который доллар
    });
});

