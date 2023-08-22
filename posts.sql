-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 22 2023 г., 16:10
-- Версия сервера: 5.7.27-30
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u1210332_default`
--

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `tema` varchar(90) NOT NULL,
  `post` varchar(750) NOT NULL,
  `file` varchar(100) NOT NULL,
  `data` datetime NOT NULL,
  `youtubeurl` varchar(120) NOT NULL,
  `nameposturl` varchar(90) NOT NULL,
  `posturl` varchar(120) NOT NULL,
  `key1` varchar(30) NOT NULL,
  `key2` varchar(30) NOT NULL,
  `key3` varchar(30) NOT NULL,
  `key4` varchar(30) NOT NULL,
  `key5` varchar(30) NOT NULL,
  `poststatus` char(1) NOT NULL,
  `comments` text NOT NULL,
  `col` int(11) NOT NULL,
  `likeid` text NOT NULL,
  `likecol` int(11) NOT NULL,
  `kuda` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `userid`, `username`, `tema`, `post`, `file`, `data`, `youtubeurl`, `nameposturl`, `posturl`, `key1`, `key2`, `key3`, `key4`, `key5`, `poststatus`, `comments`, `col`, `likeid`, `likecol`, `kuda`) VALUES
(1, 1, 'patriki', 'Дворы расстрелянных конструкторов: показываем настоящую изнанку Патриарших прудов', '', 'pics/postspics/2023-02-25-00-00-50clkkxuafni.jpg', '2023-02-25 00:00:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 0),
(2, 1, 'patriki', 'Дворы расстрелянных конструкторов: показываем настоящую изнанку Патриарших прудов', 'В самом большом дворе, вход в который, кстати, оказался открытым, — площадка с мягким, резиновым покрытием и всего одним спортивным снарядом. Рядом разбит сад с интересными растениями, который играет в конце октября осенними красками. Очень уютное место.', 'pics/postspics/2023-02-25-00-01-24poxseoyfcc.jpg', '2023-02-25 00:01:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 0),
(5, 1, 'patriki', 'Видео экскурсия по Патриаршим прудам', '', '', '2023-02-25 23:34:00', 'https://www.youtube.com/watch?v=lZHX8vYkHms', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 0),
(6, 1, 'patriki', 'Павильон - ресторан &quot;Pavilion&quot; на Патриарших прудах.', 'Изначально еще до революции павильон был деревянный и служил лодочной станцией. В 1938 году его снесли и построили точную копию бывшего павильона. А в 1986 снова перестроили на этот раз уже из камня, при этом сохранили рельефы и лепнину старого здания. Какое-то время в нем располагались буфет и раздевалка для зимнего катка. С 2011 работал ресторан русско-советской кухни, с 2017 по 2018 годы итальянский ресторан. С 2018 павильон некоторое время пустовал. То что там в данный момент вы можете посмотреть на карте справа.', 'pics/postspics/2023-02-27-20-44-11woxdrtoxuh.jpg', '2023-02-27 20:44:00', '', 'Взято с сайта', 'https://patriki-life.ru/', '3', '9', '', '', '', '0', '', 0, '1&', 1, 0),
(13, 1, 'patriki', 'Сайт patriki-life.ru посвященный &quot;Патриаршим прудам&quot;.', 'На сайте можно найти, фотографии, видео о Патриарших прудах. Информацию о парковке, как добраться на метро, новости, и другую полезную информацию.', 'pics/postspics/2023-03-08-01-46-54lfufcgcewx.jpg', '2023-03-08 01:46:00', '', '', '', '5', '9', '', '', '', '0', '', 0, '1&', 1, 0),
(16, 1, 'patriki', 'Сквер Булгакова (Москва, Патриаршие пруды)', 'Сквер Булгакова получил свое название в 2015 году, а находится он на пересечении двух переулков, Большого Козихинского и Спиридоньевского недалеко от Патриарших прудов. Предложил это название заместитель мэра Москвы по вопросам социального развития Леонид Печатников. 20-го октября 2015 года на заседании правительства Москвы это предложение было утверждено.', 'pics/postspics/2023-03-16-04-10-46jolapwvjel.jpg', '2023-03-16 04:10:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 0),
(330, 5, 'vsenaru', 'Работоспособность сайта', 'На данный момент сайт полностью функционирует. Но периодически ведутся технические работы по реконструкции сайта. По этому возможный некоторые временные недоработки.', '', '2023-07-14 02:23:00', '', '', '', '1', '0', '', '', '', '0', '', 0, '', 0, 0),
(331, 5, 'vsenaru', 'История сайта', 'Сайт задумывался как гибрид твиттера и телеграмм. Твиттер я вообще не видел, просто знал что это система публикации коротких сообщений, ну а телеграмм это мобильное приложение, примерно такой же направленности публикация текста картинок и видео. Так как 20 лет назад я закончил техникум и получил диплом программиста, решил тряхнуть стариной. Просмотрел в youtube курсы по PHP JavaScript и CSS, купил несколько книжек по этим же языкам и месяца за два не торопясь накидал вот этот сайт дабы закрепить изученное на практике.', 'pics/postspics/2023-07-14-02-58-31hwgxlzniko.jpg', '2023-07-14 02:58:00', '', '', '', '0', '0', '', '', '', '0', '2023.08.01(04:27)patriki>Еще один пробный комментарий.|^&1№~^2023.08.01(04:27)patriki>Второй пробный комментарий. Третий пробный комментарий.й|^&1№~^2023.08.01(04:23)patriki> Пробный комментарий|^&1№~^', 3, '1&', 1, 1),
(332, 4, 'gamesnews', 'Анонсировано переиздание классической стратегии Stronghold: Definitive Edition', 'Stronghold: Definitive Edition предлагает игрокам вновь пережить славу оригинальной игры, номинированной на премию BAFTA, с новыми визуальными эффектами, миссиями и сценариями осады. В этой новой части серии &quot;симуляторов замка&quot; представлены классические военные и экономические кампании оригинальной игры, а также совершенно новая повествовательная кампания из 14 миссий. Наряду с дополнительным однопользовательским контентом в виде 10 миссий, в которых игрокам предстоит защищать или осаждать такие исторические замки, как Уорик, Данноттар и Марксбург.\r\n\r\nПомимо множества технических усовершенствований и улучшений качества жизни по просьбам игроков, Stronghold: Definitive Edition позволит старым и новым поклонникам игры настраивать св', '', '2023-07-14 03:31:00', 'https://www.youtube.com/watch?v=SPA1sFAM1T8', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 0),
(333, 6, 'ples', 'Известные люди посещавшие Плес.', 'Здесь бывали и творили известные художники: Илья Репин, Фёдор Васильев, Алексей Саврасов, Борис Пророков, Николай Жуков, Мануил Аладжалов, Сергей Виноградов, Алексей Корин. Тесно был связан с Плёсом Исаак Левитан, создавший здесь большинство своих произведений живописи. В 1910 году Плёс посетил Фёдор Шаляпин.\r\n\r\nВ 1960 году в Плёсе побывал и создал серию живописных произведений Юрий Межиров. С 1985 года здесь живёт художник Виталий Панченко, организовавший арт-студию, разместивший в ней коллекцию своих работ, и возглавляющий творческий союз «Сообщество плёсских художников». В 1989 году в Плёсе поселился художник Лев Николаев. С 2006 года здесь живёт заслуженный художник России Александр Тимофеев.\r\n\r\nВ Плёсе родились литератор Николай Смирно', 'pics/postspics/2023-07-16-00-59-57rujgbvievr.jpg', '2023-07-16 00:59:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 1),
(334, 6, 'ples', 'География, где находится Плёс.', 'Город Плёс расположен на севере Ивановской области, на правобережных холмах Волги (Горьковское водохранилище), в устье речки Шохонки — правого притока Волги. Наивысшая точка города — 54 м над уровнем Волги. Расстояние (по автотрассе) до районного центра — Приволжска 18 км, до областного центра Иваново 69 км, до Москвы 396 км. Ширина Волги в районе Плёса — 650—700 метров, глубина фарватера — 15 метров. Высота Соборной горы (горы Свободы) — 54,5 метра, высота Петропавловской горы (горы Левитана) — 50 метров над уровнем Волги.', 'pics/postspics/2023-07-16-01-14-49tawkkkrics.jpg', '2023-07-16 01:14:00', '', '', '', '3', '9', '', '', '', '0', '', 0, '1&', 1, 1),
(335, 6, 'ples', 'Этимология, значение слова &quot;Плёс&quot;.', 'Этимологический словарь Александра Преображенского устанавливает предположительное первоначальное родство со значением «место, где плескает», так как в плёсах всегда небольшая волна спешит к берегу. Топонимический словарь Владимира Никонова поясняет: старославянское «плёс» имело значение «озеро», а затем утвердилось вторичное понятие: «отрезок реки от поворота до поворота». Описание герба города, утверждённого в 1779 году Екатериной Великой, сообщает: «Во 2-й части щита въ серебряномъ полѣ рѣка, съ выходящимъ изъ нея плесомъ, означающее имя сего города». Имеется в виду песчаная отмель, намываемая рекой Шохонкой (коса Перебор), скрытая сейчас под водой.', 'pics/postspics/2023-07-16-01-25-58wppzawxkgv.jpg', '2023-07-16 01:25:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&7&', 2, 1),
(336, 6, 'ples', 'История города Плёс.', 'Плёс упоминается в числе разрушенных в 1238 году Батыем поволжских городов. Утратив крепость, город продолжил своё существование. После того, как в 1408 году великий князь московский Василий Дмитриевич бежал от нашествия Едигея в Кострому, он повелел в 1410 году построить здесь новую крепость, ставшую частью плёсской таможенно-оборонительной системы. В 1471 году город посетил Афанасий Никитин, упомянувший его в своих путевых записках «Хожение за три моря».\r\nВ 1778 году Плёс становится уездным городом Костромского наместничества. С 1796 года заштатный город Нерехтского уезда Костромской губернии. В 1812 году становится одним из центров формирования отрядов костромского народного ополчения.', 'pics/postspics/2023-07-16-01-33-43afsedvejew._Заречье._Церковь_Вознесения._1910г_mini_200434.jpg', '2023-07-16 01:33:00', '', '', '', '0', '0', '', '', '', '0', '', 0, '1&', 1, 1),
(337, 6, 'ples', 'Видео экскурсия по городу Плёс.', '', '', '2023-07-16 02:01:00', 'https://www.youtube.com/watch?v=D4NdwD5MXkg', '', '', '0', '0', '', '', '', '0', '', 0, '4&1&', 2, 1),
(339, 7, 'dobrograd', 'Доброград - видео экскурсия', 'Здесь благодаря современным технологиям и передовой̆ урбанистке создаются максимально комфортные условия для жизни, работы и самореализации человека.\r\nГород в полной мере оправдывает свое название, формируя комьюнити, добрые традиции и комфортную среду для жизни нескольких поколений.\r\n\r\nБлагодаря круглосуточной охране, закрытому въезду в город, видеонаблюдению и дружному сообществу жителей, Доброград – одно из самых безопасных мест для жизни и отдыха в России.', '', '2023-07-19 02:54:00', 'https://www.youtube.com/watch?v=x9owtGc41Zw', '', '', '0', '0', '', '', '', '0', '', 0, '4&1&7&', 3, 1),
(340, 7, 'dobrograd', '«Переезжайте, чтобы жить»', 'Город Доброград запустил федеральную рекламную кампанию «Переезжайте, чтобы жить». В рамках работы над кампанией требовалось не только создать рекламное сообщение, но и определить ключевые каналы коммуникации. Коммуникационная стратегия 360 для города Доброграда включает в себя рекламу на ТВ, OLV, DOOH, OOH, большую digital-кампанию и специальные проекты. Креативная концепция призвана обратить внимание потенциальных покупателей на то, что в двух часах от столицы есть уникальный для России город, строящийся по новым принципам и законам, в основе которых человек и его семья. В Доброграде создаются условия для комфортной жизни трех поколений одной семьи в одном месте.', 'pics/postspics/2023-07-22-23-35-46nwavjfajxw.jpg', '2023-07-22 23:35:00', '', '', '', '5', '6', '', '', '', '0', '', 0, '1&', 1, 0),
(341, 7, 'dobrograd', 'Заседание АМСГР в Доброграде', '7 июня в Доброграде состоялось совместное заседание правления и попечительского совета «Ассоциации малых и средних городов России» (АМСГР). Напомним, что в марте этого года Доброград стал членом Ассоциации. Свидетельство об этом президент АМСГР Валерий Гаврилов вручил заместителю главы Доброграда Алексею Изотову.\r\n\r\nУчастники обсудили работу Ассоциации в условиях изменения экономической ситуации в стране.\r\n\r\nОбщественная организация “Ассоциация малых и средних городов России” была создана по инициативе муниципалитетов в 2000 году. Главная цель Ассоциации - содействие развитию местного самоуправления и продвижение интересов малых и средних городов в федеральных органах государственной власти.', 'pics/postspics/2023-07-22-23-38-46gncoakzjee.jpg', '2023-07-22 23:38:00', '', '', '', '9', '9', '', '', '', '0', '', 0, '1&', 1, 0),
(342, 4, 'gamesnews', 'Создатели Rain World анонсировали ретрогонку на ховербайках.', 'Студия Videocult ранее выпустила платформер про слизнекота Rain World. Теперь разработчики вместе с издательством Akupara Games представили Airframe Ultra — гонку на ховербайках, навеянную Twisted Metal, Vigilante и Carmageddon.\r\n\r\nВы будете участвовать в заездах с оружием в воздушном городе:\r\n\r\nОт потрескавшегося асфальта Сан-Хуаро и окраин Исидро до громадных мегаполисов зоны Texicali ZEGO гонщики на аэрофреймах со всех концов Южных земель соревнуются за славу, богатство и шанс остаться на три фута выше… или на шесть футов ниже.\r\nЕсть одиночный режим и кооператив на разделённом экране.\r\n\r\nAirframe Ultra стартует в Steam, но когда — неизвестно. Пока указана поддержка только английского языка.', '', '2023-07-22 23:44:00', 'https://www.youtube.com/watch?v=dD5Tgi0gSUw', '', '', '3', '1', '', '', '', '0', '', 0, '7&1&', 2, 0),
(343, 7, 'dobrograd', 'Большой театр в Доброграде', '1 июля в Доброграде состоялось традиционное ежегодное выступление солистов оперы и оркестра Большого театра России. Сцена Летнего театра на озере уже стала «домашней» для Большого Театра – ежегодные выступления с 2018 года собирают тысячи зрителей на уникальной для России площадке. Увидеть выступление такого масштаба на фоне красот русской природы с особенной акустикой леса и воды – настоящий подарок для меломанов.', 'pics/postspics/2023-07-24-23-04-58qizpetlvuk.jpg', '2023-07-24 23:04:00', '', '', '', '6', '9', '', '', '', '0', '', 0, '8&4&7&1&', 4, 0),
(344, 8, 'innopolis', 'Университет Иннополис IT-образование', 'Образование ведется на английском языке. Здесь преподают 263 профессора и научных сотрудника из 24 стран с опытом работы в ведущих мировых ИТ-компаниях. А 40% программы — практика и командные проекты.\r\nДля поступления нужно пройти вступительные испытания по математике, программированию и интервью с преподавателем. \r\n\r\nОбразование стоит 400 000 рублей за семестр. Можно получить грант, покрывающий до 100% обучения\r\n', 'pics/postspics/2023-07-30-03-53-26oltsagioxu.jpg', '2023-07-30 03:53:00', '', '', '', '7', '9', '', '', '', '0', '', 0, '8&4&7&1&', 4, 1),
(346, 9, 'kastaneda', 'Все книги Карлоса Кастанеды', '&quot;Учения Дона Хуана&quot; 1968.\r\n&quot;Отдельная реальность&quot; 1971.\r\n&quot;Путешествие в Икстлан&quot; 1972. \r\n&quot;Рассказы о силе&quot; 1974. \r\n&quot;Второе кольцо силы&quot; 1977.\r\n&quot;Дар орла&quot; 1981. \r\n&quot;Огонь изнутри&quot; 1984. \r\n&quot;Сила безмолвия&quot; 1987. \r\n&quot;Искусство сновидения&quot; 1993. \r\n&quot;Магические пассы&quot; практическая мудрость шаманов Древней Мексики 1998. \r\n&quot;Колесо времени&quot; шаманы Древней Мексики, их мысли о жизни, смерти и Вселенной 1998. \r\n&quot;Активная сторона бесконечности&quot; 1999.', 'pics/postspics/2023-07-31-03-50-22okijqbabvo.jpg', '2023-07-31 03:50:00', '', '', '', '8', '8', '', '', '', '0', '2023.08.22(15:50)gamesnews>Тест комментарий 23423 234523 xcvb dfghbs dfgh sdfgh sdfg sdfg dsf|^&4№~^2023.08.22(15:50)gamesnews>Тест комментарий 23423 234523 xcvzb cvxbxcvcxvb xcvb xcv cxvb cvb cv bcvb cv|^&4№~^2023.08.22(15:48)kastaneda>Тест комментарий 23423 234523 dsfg dwfg dfg d|^&9№~^2023.08.22(15:46)patriki>Тест комментарий 23423 234523 34534534 345 345 345 35345 34|^&1№~^2023.08.22(15:46)patriki>Тест комментарий 23423 234523|^&1№~^', 5, '1&', 1, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;