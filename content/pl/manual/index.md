---
title: Edytuj Informator
icon: pencil
order: 99999
stub: false
description: Jak edytować Informator Studenta UJ?
---
Informator Studenta UJ pozwala każdemu wprowadzać zmiany, które po zatwierdzeniu przez moderatora natychmiast zostaną opublikowane w aplikacji. Aby tego dokonać wystarczy tylko posiadać konto w serwisie GitHub i kilka chwil wolnego czasu 😉

## Krok 0: Załóż konto na GitHub jeśli jeszcze go nie posiadasz

GitHub to platforma ułatwiająca proces budowania aplikacji. Informator Studenta UJ wykorzystuje ją do wersjonowania zmian, współpracy nad zarówno treścią Informatora jak i kodem, budowania aplikacji a nawet samego hostingu. Jako ciekawostkę dodamy, że ponieważ Informator jest udostępniony na otwartej licencji GitHub nie pobiera od nas opłat za korzystanie z ich usług.

Aby założyć konto przejdź do <https://github.com/> i postępuj zgodnie z instrukcjami. Założenie konta zajmie tylko kilka chwil. Nie zapomnij go aktywować potwierdzając swój adres email.

![Strona główna GitHub](/images/uploads/github.png "Jeśli nie posiadasz konta GitHub utwórz je aby edytować Informator.")

![Ekran rejestracji GitHub](/images/uploads/github_register.png "Zarejestruj konto zgodnie z instrukcjami na ekranie. Nie zapomnij zweryfikować adresu email aby aktywować konto.")

Po założeniu i aktywowaniu konta możesz zamknąć kartę przeglądarki - nie będziesz więcej potrzebować bezpośrednio używać GitHub - następne kroki wykonasz już w panelu edycji Informatora logując się przez GitHub.

<alert type='info' outlined border='left'>GitHub jest usługą skierowaną dla twórców aplikacji i pod tym względem może wyglądać nieco nieprzyjaźnie dla osób, które nigdy ich nie tworzyły. Nie przejmuj się tym - potrzebujesz jedynie założyć tam konto aby móc zalogować się do panelu edycji Informatora (który wykona za Ciebie resztę pracy).</alert>

## Krok 1: Zaloguj się do panelu edycji Informatora

Przejdź do <https://info.samorzad.uj.edu.pl/edit/> i zaloguj się swoim kontem GitHub. Po zalogowaniu autoryzuj panel edycji Informatora ze swoim kontem. Pozwoli to panelowi edycji zapisywać wprowadzane przez Ciebie zmiany na GitHub oraz informować w Twoim imieniu moderatorów Informatora o oczekujących na nich zmianach. Ostatnim krokiem potrzebnym do rozpoczęcia edycji jest utworzenia tak zwanego "forka" - kopi roboczej całego repozytorium Informatora, na której możesz swobodnie wprowadzać zmiany - wystarczy zezwolić na to panelowi edycji a on zrobi to za Ciebie.

![Ekran logowania do panelu edycyjnego Informatora](/images/uploads/login_with_github.png "Zaloguj się do panelu edycyjnego Informatora poprzez GitHub.")

![Ekran autoryzacji Informatora z GitHub](/images/uploads/authorize_netlify.png "Zezwól Informatorowi na dostęp do publicznych repozytoriów GitHub dla Twojego konta.")

![Ekran tworzenia forka](/images/uploads/netlify_fork.png "Po zalogowaniu utwórz fork - kopię roboczą Informatora na której możesz swobodnie dokonywać zmian.")

## Krok 2: Wprowadź zmiany

Po zalogowaniu i utworzeniu forka powita Cię główne menu panelu edycji. Od teraz możesz już edytować Informator. Jeśli w przyszłości będziesz chcieć powrócić do tego miejsca wejdź jak poprzednio na <https://info.samorzad.uj.edu.pl/edit/>. 

Wybierz podstronę którą chcesz edytować z menu. Po lewej możesz wybrać kategorię/folder w którym mieści się podstrona, na środku ekranu widzisz zawartość wybranego folderu. Zauważ, że same kategorie również można edytować, więcej o tym później. Kliknij na tytuł strony, którą chcesz edytować. Możesz też stworzyć nową wybierając przycisk "New Page".

Alternatywnie zamiast szukać strony w menu możesz również kliknąć przycisk "Zaproponuj zmiany" na dole dowolnej podstrony informatora - zostaniesz przekierowany bezpośrednio do ekranu edycji tejże strony.

![Ekran wyboru strony do edycji](/images/uploads/netlify_menu.png "Wybierz podstronę, którą chcesz edytować. Zauważ, że kategorie w menu informatora również są podstronami.")

<alert type='warning' outlined border='left'>W menu Informatora istnieje podział na kategorie. Kategoriami nazywamy rozwijane podmenu, zawierające podobne tematem podstrony. Od strony panelu edycyjnego kategorie te są również reprezentowane jako podstrony - nie zawierają one treści, jedynie opisane poniżej metadane określające ich wygląd w menu. Podstrony kategorii mają zaznaczony przełącznik "is category only".</alert>

Po wybraniu podstrony lub utworzeniu nowej ukaże się ekran wyglądający podobnie do tego na zdjęciu poniżej.

Po prawej stronie ekranu znajduje się formularz pozwalający edytować stronę. Zawiera on kilka pól metadanych oraz edytor tekstu, w którym wpisujemy treść artykułu. Zacznijmy od metadanych:

* PATH - pole określa pod jaką ścieżką znajduję się podstrona. Inaczej jest to adres pod strony po https://info.samorzad.uj.edu.pl/ oraz kodzie wersji językowej. Na przykład jeśli pole zawiera wartość "uczelnia/biblioteka" i strona jest w języku polskim to będzie ona dostępna pod adresem https://info.samorzad.uj.edu.pl/pl/uczelnia/biblioteka/. W samym informatorze w menu podstron będzie zaś ona dostępna pod zakładkę "Uczelnia" jako "Biblioteka".
* TITLE - nic innego jak tytuł strony. Jest widoczny w nagłówku strony oraz w menu podstron. Powinien być na tyle krótki aby zmieścił się w menu podstron (w przeciwnym przypadku będzie wyświetlać się w menu przycięty). W ogólności 20-kilka znaków powinno zmieścić się bez problemu.
* ORDER IN MENU - opcjonalna wartość określająca kolejność wyświetlania podstrony w menu. Można wpisać dowolną liczbę. Strony z wyższą wartością ORDER wyświetlają się niżej w menu niż te z niższą wartością. Wiemy, że rozwiązanie to nie jest tak wygodne jak znane np. z Wordpress "przeciągnij i upuść", jednakże jest to jedyny sposób aby każda strona była niezależnym plikiem, bo pozwala na niezależną edycję. Jeśli pozostawimy pole pustym jest traktowane tak, jakby było tam zero.
* MATERIAL DESIGN ICON - Ikona wyświetlana w menu podstron. Lista dostępnych ikon jest tu <https://materialdesignicons.com/>. Wystarczy podać jej nazwę. Puste = brak ikony.
* IS CATEGORY ONLY - strona nie zawiera treści, jest tylko kategorią/plakietką w menu. Należy zaznaczyć jeśli edytowany dokument opisuje kategorię a nie podstronę.
* DESCRIPTION - opis strony dla wyszukiwarek. Opis ten pokaże się np. w wyszukiwarce Google. Zaleca się podanie jednozdaniowego opisu o czym jest podstrona.

Zaraz poniżej formularza znajduje się pole BODY - tu wreszcie możemy wpisać/edytować treść artykułu. Dostępny jest edytor typu "Rich Text" pozwalający w wygodny sposób edytować artykuły oraz edytor "Markdown" jeśli chcemy wprowadzić coś bardziej zaawansowanego edytując kod strony. W praktycznie każdym przypadku wystarczy nam ten pierwszy - pozwala on na wszystkie podstawowe formatowania tekstu, tworzenie list, oznaczania cytatów, wstawianie obrazków czy ramek (alertów). Na dole artykułu znajdują się przykłady tego, co można osiągnąć korzystając z edytora.



![Ekran edycji](/images/uploads/netlify_edit.png "Wprowadź zmiany w artykule.")

![Ekran po edycji](/images/uploads/netlify_save.png "Po wprowadzeniu zmian zapisz artykuł. Możesz to robić za każdym razem gdy na przykład chcesz powrócić do edycji później. Zmiany są zapisane tylko dla Twojej kopii roboczej.")

## Krok 3: Wyślij zmiany do zatwierdzenia przez moderatora

![Ekran wysyłania zmian do recenzji](/images/uploads/netlify_review.png "Kiedy skończysz swoją pracę i zapiszesz zmiany wyślij je do zatwierdzenia zmieniając ich status z draft na in review. Zespół informatora zostanie automatycznie poinformowany o oczekujących na zatwierdzenie zmianach.")

![Ekran workflow](/images/uploads/netlify_flow.png "W zakładce Workflow możesz śledzić status zaproponowanych przez siebie zmian. Możesz je także edytować dalej lub wycofać.")