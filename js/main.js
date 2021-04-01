
$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.toggle_btn').on('click', function() {//toggle_btnをクリックしたときの関数定義（onはscrollやhoverとも一緒に使える）
      if ($('#header').hasClass('open')) {   //もし#headerがopenクラスを持っているなら
        $('#header').removeClass('open');    //openクラスを外す
      } else {                               //openクラス持ってないなら
        $('#header').addClass('open');       //openクラスつける
      }
    });
  
    $('#mask').on('click', function() {      //#maskがクリックされたときの関数
      $('#header').removeClass('open');      //#headerはopenクラスを外す
    });


    $('.bg-slider').bgSwitcher({
       images: ['img/20180824_113200.jpg','img/20180824_113207.jpg','img/20180924_221409.jpg'], // 切替背景画像を指定
    　 interval: 3000,  // 背景画像を切り替える間隔を指定 3000=3秒
    　 loop: true,      // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    　 shuffle: false,   // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    　 effect: "clip",  // fade,blind,clip,slide,drop,hide
    　 duration: 500,   // エフェクトの時間を指定します。
    　 easing: "swing"  // linear,swing
    });



    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    /*=================================================
    背景回転しながらフェードとスライドショー
    ===================================================*/
      $('.main').vegas({
        slides: [
          { src: 'img/20180824_113200.jpg' },
          { src: 'img/20200408_154232.jpg' },
          { src: 'img/20200612_082415.jpg' },
          { src: 'img/20181017_114148.jpg' },
          { src: 'img/20200212_105700.jpg' },
          { src: 'img/20190614_162021.jpg' },
          { src: 'img/20190314_195827.jpg' },
          { src: 'img/20200104_134240.jpg' }
        ],
         transition: 'swirlLeft2'
      });



    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    $(window).scroll(function(){            //画面をスクロールしたときの関数
      $('.fadein').each(function(){         //fadeinクラスに対して繰り返し処理する
        var targetElement = $(this).offset().top;   //fadeinからtopまでの高さを代入
        var scroll = $(window).scrollTop();         //スクロールの座標代入
        var windowHeight = $(window).height();      //画面のサイズ代入
        if(window.matchMedia("(max-width: 768px)").matches){
        if (scroll > targetElement - windowHeight){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
          $(this).css('opacity','1');               //透明度MAXにして表示
          $(this).css('transform','translateY(0)'); //Y座標0にする
        }
      }else{ 
        if (scroll > targetElement - windowHeight + 200){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
          $(this).css('opacity','1');               //透明度MAXにして表示
          $(this).css('transform','translateY(0)'); //Y座標0にする
        }
      }
      });
    });

    $(window).scroll(function(){            //画面をスクロールしたときの関数
      $('.text-fadein').each(function(){         //fadeinクラスに対して繰り返し処理する
        var targetElement = $(this).offset().top;   //fadeinからtopまでの高さを代入
        var scroll = $(window).scrollTop();         //スクロールの座標代入
        var windowHeight = $(window).height();      //画面のサイズ代入
        if(window.matchMedia("(max-width: 768px)").matches){
          if (scroll > targetElement - windowHeight){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
            $(this).css('opacity','1');               //透明度MAXにして表示
            $(this).css('transform','translateY(0)'); //Y座標0にする
          }
        }else{ 
          if (scroll > targetElement - windowHeight + 200){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
            $(this).css('opacity','1');               //透明度MAXにして表示
            $(this).css('transform','translateY(0)'); //Y座標0にする
          }
        }
      });
    });
    $(window).scroll(function(){            //画面をスクロールしたときの関数
      $('.text-fadein2').each(function(){         //fadeinクラスに対して繰り返し処理する
        var targetElement = $(this).offset().top;   //fadeinからtopまでの高さを代入
        var scroll = $(window).scrollTop();         //スクロールの座標代入
        var windowHeight = $(window).height();      //画面のサイズ代入
        if(window.matchMedia("(max-width: 768px)").matches){
          if (scroll > targetElement - windowHeight){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
            $(this).css('opacity','1');               //透明度MAXにして表示
            $(this).css('transform','translateY(0)'); //Y座標0にする
          }
        }else{ 
          if (scroll > targetElement - windowHeight + 200){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
            $(this).css('opacity','1');               //透明度MAXにして表示
            $(this).css('transform','translateY(0)'); //Y座標0にする
          }
        }
      });
    });
      /*=================================================
    下スクロールでヘッダー消えて上スクロールで戻る
    ===================================================*/
        var winScrollTop = 0;
      $(window).scroll(function(){
        winScrollTop = $(this).scrollTop();
          if(winScrollTop >= 200){
            $('.header-nav').addClass('fadeout');  
            $('.header-sns').addClass('fadeout');
            $('header p').addClass('fadeout');
        } else {
            $('.header-nav').removeClass('fadeout');
            $('.header-sns').removeClass('fadeout');
            $('header p').removeClass('fadeout');
        }
    });

    /*=================================================
    スライダー
    ===================================================*/
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false, //矢印ボタン無し
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '100px',
      focusOnSelect: true,
      responsive: [
        {
         breakpoint: 768, //767px以下のサイズに適用
         settings: {
          centerPadding: '30px',
         }
        }
      ]

    });

    
	//マウスカーソルの変更
	//=================================
	//カーソル要素
	var cursor=$("#cursor");
	//mousemoveイベントでカーソル要素を移動
	$(document).on("mousemove",function(e){
		//マウス位置を取得するプロパティ
		var x=e.clientX;
		var y=e.clientY;
		//カーソル要素のcssを書き換え。重複しなければtransformを使うのがおすすめ
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
	});
	
	//aタグホバー
	$("a").on({
		"mouseenter": function() {
			//activeクラス付与
			cursor.addClass("active");
		},
		"mouseleave": function() {
			cursor.removeClass("active");
		}
	});

});