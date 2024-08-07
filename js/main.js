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


    $('a[href^="#"]').click(function () {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href = $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({ scrollTop: position }, speed, 'linear');
        return false;
    });
});

