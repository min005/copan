$(function () {
    $(".slide-items").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3.3,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1.7,
                },
            },
        ],
    });
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
    });
    // メニューのリンクをクリックした時
    $("header a").on("click", function () {
        $("header").toggleClass("open");
    });
    // メニューが表示されている時に画面をクリックした場合
    $(".mask").on("click", function () {
        $("header").toggleClass("open");
    });


    /*=================================================
    トップに戻る
    ===================================================*/
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    $("#page-top").hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が900pxを超えた場合
        if ($(window).scrollTop() > 900) {
            // トップに戻るボタンを表示する
            $("#page-top").fadeIn();

            // スクロール位置が900px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            $("#page-top").fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    $("#page-top a").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 300);
        return false;
    });
});

