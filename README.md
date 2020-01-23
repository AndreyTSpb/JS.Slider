# JS.Slider

Простинький слайдер картинок

Блок HTML кода для разметки самого слайдера
```html
			<div class="slider" id="photo">
				<div class="slider-title">Фото с наших поездок
				</div>
				<div class="wrap">

					<div class="slider-item fade">
						<img src="img/slider_1.jpg" alt="slider">
					</div>
					<div class="slider-item fade">
						<img src="img/slider_2.jpg" alt="slider">
					</div>
					<div class="slider-item fade">
						<img src="img/slider_3.jpg" alt="slider">
					</div>
					<div class="slider-item fade">
						<img src="img/slider_4.jpg" alt="slider">
					</div>

					<div class="prev"><div class="arrow-left"></div></div>
					<div class="next"><div class="arrow-right"></div></div>
				</div>
				<div class="slider-dots">
					<div class="dot dot-active"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
  ```
  
  Стили для слайдера
  ```css
 .slider {
  margin-top: 150px;
  position: relative;
}
.slider-title {
  font-size: 32px;
  color: #c78030;
}
.slider-title:after {
  content: '';
  display: block;
  width: 10%;
  height: 1px;
  background-color: #c78030;
  margin-top: 4px;
}
.slider .wrap {
  width: 100%;
  position: relative;
}
.slider .wrap .slider-item {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
}
.slider .wrap .slider-item img {
  width: 100%;
}
.slider .wrap .prev {
  position: absolute;
  cursor: pointer;
  top: 0;
  width: 90px;
  left: 10%;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.3s;
          transition: 0.3s;
  height: 100%;
}
.slider .wrap .prev:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.slider .wrap .prev:hover .arrow-left {
  opacity: 1;
}
.slider .wrap .prev .arrow-left {
  width: 30px;
  height: 30px;
  background: url(../icons/left-arrow.svg) center no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%);
      -ms-transform: translate(-50%);
          transform: translate(-50%);
  opacity: .4;
  -webkit-transition: 1s;
          transition: 1s;
}
.slider .wrap .next {
  position: absolute;
  cursor: pointer;
  top: 0;
  width: 90px;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.3s;
          transition: 0.3s;
  height: 100%;
  right: 10%;
}
.slider .wrap .next:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.slider .wrap .next:hover .arrow-right {
  opacity: 1;
}
.slider .wrap .next .arrow-right {
  width: 30px;
  height: 30px;
  background: url(../icons/right-arrow.svg) center no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%);
      -ms-transform: translate(-50%);
          transform: translate(-50%);
  opacity: .4;
  -webkit-transition: 1s;
          transition: 1s;
}
.slider-dots {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.slider-dots .dot {
  cursor: pointer;
  height: 16px;
  width: 16px;
  margin: 0 10px;
  background-color: #c78030;
  border-radius: 50%;
  display: inline-block;
  -webkit-transition: background-color 0.6s ease;
          transition: background-color 0.6s ease;
}
.slider-dots .dot-active {
  background-color: #000;
  height: 18px;
  width: 18px;
}
```
  
  
