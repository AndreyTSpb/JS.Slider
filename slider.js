//idSlider - идентификатор блока слайдера
//sec - задержка перелистывания в сендах
function slider(idSlider, sec){
        let slider  = document.getElementById(idSlider);
        let slideIndex = 1; //первый слайд что будет показан

        //есди блок слайдера найден, начинаем работу
        if(slider != null){
            let imgs = slider.querySelectorAll('.slider-item'),
                prev    = slider.querySelector('.prev'),
                next    = slider.querySelector('.next'),
                dotWrap = slider.querySelector('.slider-dots'),
                dots   = dotWrap.querySelectorAll('.dot');

            showSlide(slideIndex++); // первый показ 

            setInterval(()=>{
                showSlide(slideIndex++);
            }, ыус *1000); // устанавливаем интервал перелистывания в милисекундах
                
            //Отображение слайда только с заданным индексом    
            function showSlide(slideIndex){

                if(slideIndex > imgs.length){
                    slideIndex = 1;
                }
                if(slideIndex < 1){
                    slideIndex = imgs.length;
                }

                imgs.forEach((img)=>img.style.display = "none");
                dots.forEach((dot)=>dot.classList.remove("dot-active"));
                imgs[slideIndex-1].style.display = "block";
                dots[slideIndex-1].classList.add("dot-active");
            }
            
            //перелистывание , увеличиваем индекс на единицу
            function plusSlide(n){
                showSlide(slideIndex += n);
            }
            
            //отображение указанного слайда
            function currentSlider(n){
                showSlide(slideIndex = n);
            }
            
            //кнопка назад , индекс -1
            prev.addEventListener('click', ()=>{
                plusSlide(-1);
            });
            // кнопка вперед, индекс + 1
            next.addEventListener('click', ()=>{
                plusSlide(1);
            });
            
            //переключение точками
            dotWrap.addEventListener('click', (event)=>{
                for(let i=0; i<dots.length + 1; i++){
                    console.log(event);
                    if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                        currentSlider(i);
                    }
                }
            });
        }
    }
