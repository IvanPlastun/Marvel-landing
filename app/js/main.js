$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:200, //Отступ от элемента справа в 50px
		dots: true,
		nav:false, //Отключение навигации
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:5000, //Время смены слайда
		responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	var $nav = $('.navigation__menu');
	var $navIcon = $('.navigation-hide');
	$navIcon.on('click', function() {
		$navIcon.toggleClass('active');
		if($nav.is(':not(:visible)')) {
			$nav.slideDown();
		} else {
			$nav.slideUp();
		}
	});

	var wow = new WOW({
		boxClass:     'wow', 
		animateClass: 'animated',
		offset:       150,        
		mobile:       false,       
		live:         true
	});
	wow.init();	


	var selectedClass = "";
	$('.filter-panel__item a').on('click', function(e) {
		e.preventDefault();
		selectedClass = $(this).attr('data-filter');
		$('.works__work-box').fadeTo(100, 0.1);
		$('.works__work-box').not('.' + selectedClass).fadeOut().removeClass('scale-anm');

		setTimeout(function() {
			$('.' + selectedClass).fadeIn().addClass('scale-anm');
			$('.works__work-box').fadeTo(300, 1);
		}, 300);
	});

	//функция счетчика, который срабатывает при скроле страницы
	function countup(className) { //className - имя класса, в котором есть число
		var countBlockTop = $("." + className).offset().top; //смещение блока с числом относительно верхнего края	
		var windowHeight = window.innerHeight; //получение высоты окна браузера
		var show = true; // отвечает, что если один раз счетчик сработает, больше не срабатывал
		$(window).scroll(function() {
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
				show = false; //если мы видим число, то больше его не надо показывать
				$('.' + className+':eq(0)').spincrement({ //вызов плагина с параметрами
					from: 1, //начинать с 1
					duration: 4000  //задержка счетчика
				});
				$('.' + className+':eq(1)').spincrement({
					from: 1,
					duration: 4000
				});
				$('.' + className+':eq(2)').spincrement({
					from: 1,
					duration: 3000,
					complete: function (e) {
						e.text( e.text() + "+");
					}
				});
				$('.' + className+':eq(3)').spincrement({
					from: 1,
					duration: 4000,
					complete: function (e) {
						e.text( e.text() + "%");
					}
				});

			}
		});
	}

	countup('info-blocks__quatity');
});

