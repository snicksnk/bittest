# Readme

##### 1) надо выделить 2 модуля - news и content, каждый из которых будет иметь все необходимые настройки, шаблоны, контроллеры etc

- Выделенно 2 модуля, между которыми разделен весь функционал  
    
   https://github.com/snicksnk/bittest/tree/master/app/modules/content
    https://github.com/snicksnk/bittest/tree/master/app/modules/news

- Эти модули подключаются к основному модуля веб приложения, который сам по себе пуст
    https://github.com/snicksnk/bittest/blob/master/app/app.js#L1
    
###### Структура модулей (на примере news)
    
https://github.com/snicksnk/bittest/tree/master/app/modules/news
- news.js -обьявление модуля
- scripts/ - Файлы с логикой (контроллеры, сервисы) 
- views/ - Шаблоны
- config/ - конфигурации 
    
- https://github.com/snicksnk/bittest/blob/master/app/modules/news/config/states.js
    ui route states 

##### 2) в модуле content есть шаблон faq - ожидается, что соискатель это через директивы https://angular-ui.github.io/bootstrap/
    
- Реализованно: 
    https://github.com/snicksnk/bittest/blob/master/app/modules/content/views/_contentFaq.html#L3-L7

##### 3) Модуль news должен открывать в модальном окне детализацию новости со сменой урла
    
- https://github.com/snicksnk/bittest/blob/master/app/modules/news/config/states.js#L17-L27
    
#####  4) есть там глобальная функция getNewsData - ее необходимо завернуть в фабрику и замокать
- Сервис, в который вынесенно getNewsData 
https://github.com/snicksnk/bittest/blob/master/app/modules/news/scripts/NewsSvc.js

- Замокано
https://github.com/snicksnk/bittest/blob/master/app/modules/news/tests/E2E.js
    
    
