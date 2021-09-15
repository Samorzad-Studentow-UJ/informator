---
title: Edytuj Informator
icon: pencil
order: 99999
stub: false
description: Jak edytować Informator Studenta UJ?
---
Informator Studenta UJ pozwala każdemu wprowadzać zmiany, które po zatwierdzeniu przez moderatora natychmiast zostaną opublikowane w aplikacji. Aby tego dokonać wystarczy tylko posiadać konto w serwisie GitHub i kilka chwil wolnego czasu 😉

## Jak edytować treść informatora?

### Krok 0: Załóż konto na GitHub jeśli jeszcze go nie posiadasz

GitHub to platforma ułatwiająca proces budowania aplikacji. Informator Studenta UJ wykorzystuje ją do wersjonowania zmian, współpracy nad zarówno treścią Informatora jak i kodem, budowania aplikacji a nawet samego hostingu. Jako ciekawostkę dodamy, że ponieważ Informator jest udostępniony na otwartej licencji GitHub nie pobiera od nas opłat za korzystanie z ich usług.

Aby założyć konto przejdź do <https://github.com/> i postępuj zgodnie z instrukcjami. Założenie konta zajmie tylko kilka chwil. Nie zapomnij go aktywować potwierdzając swój adres email.

![Strona główna GitHub](/images/uploads/github.png "Jeśli nie posiadasz konta GitHub utwórz je aby edytować Informator.")

![Ekran rejestracji GitHub](/images/uploads/github_register.png "Zarejestruj konto zgodnie z instrukcjami na ekranie. Nie zapomnij zweryfikować adresu email aby aktywować konto.")

Po założeniu i aktywowaniu konta możesz zamknąć kartę przeglądarki - nie będziesz więcej potrzebować bezpośrednio używać GitHub - następne kroki wykonasz już w panelu edycji Informatora logując się przez GitHub.

<alert type='info' outlined border='left'>GitHub jest usługą skierowaną dla twórców aplikacji i pod tym względem może wyglądać nieco nieprzyjaźnie dla osób, które nigdy ich nie tworzyły. Nie przejmuj się tym - potrzebujesz jedynie założyć tam konto aby móc zalogować się do panelu edycji Informatora (który wykona za Ciebie resztę pracy).</alert>

### Krok 1: Zaloguj się do panelu edycji Informatora

Przejdź do <https://info.samorzad.uj.edu.pl/edit/> i zaloguj się swoim kontem GitHub. Po zalogowaniu autoryzuj panel edycji Informatora ze swoim kontem. Pozwoli to panelowi edycji zapisywać wprowadzane przez Ciebie zmiany na GitHub oraz informować w Twoim imieniu moderatorów Informatora o oczekujących na nich zmianach. Ostatnim krokiem potrzebnym do rozpoczęcia edycji jest utworzenia tak zwanego "forka" - kopi roboczej całego repozytorium Informatora, na której możesz swobodnie wprowadzać zmiany - wystarczy zezwolić na to panelowi edycji a on zrobi to za Ciebie.

![Ekran logowania do panelu edycyjnego Informatora](/images/uploads/login_with_github.png "Zaloguj się do panelu edycyjnego Informatora poprzez GitHub.")

![Ekran autoryzacji Informatora z GitHub](/images/uploads/authorize_netlify.png "Zezwól Informatorowi na dostęp do publicznych repozytoriów GitHub dla Twojego konta.")

![Ekran tworzenia forka](/images/uploads/netlify_fork.png "Po zalogowaniu utwórz fork - kopię roboczą Informatora na której możesz swobodnie dokonywać zmian.")

### Krok 2: Wprowadź zmiany

Po zalogowaniu i utworzeniu forka powita Cię główne menu panelu edycji. Od teraz możesz już edytować Informator. Jeśli w przyszłości będziesz chcieć powrócić do tego miejsca wejdź jak poprzednio na <https://info.samorzad.uj.edu.pl/edit/>. 

Wybierz podstronę którą chcesz edytować z menu. Po lewej możesz wybrać kategorię/folder w którym mieści się podstrona, na środku ekranu widzisz zawartość wybranego folderu. Zauważ, że same kategorie również można edytować, więcej o tym później. Kliknij na tytuł strony, którą chcesz edytować. Możesz też stworzyć nową wybierając przycisk "New Page".

Alternatywnie zamiast szukać strony w menu możesz również kliknąć przycisk "Zaproponuj zmiany" na dole dowolnej podstrony informatora - zostaniesz przekierowany bezpośrednio do ekranu edycji tejże strony.

![Ekran wyboru strony do edycji](/images/uploads/netlify_menu.png "Wybierz podstronę, którą chcesz edytować. Zauważ, że kategorie w menu informatora również są podstronami.")

<alert type='warning' outlined border='left'>W menu Informatora istnieje podział na kategorie. Kategoriami nazywamy rozwijane podmenu, zawierające podobne tematem podstrony. Od strony panelu edycyjnego kategorie te są również reprezentowane jako podstrony - nie zawierają one treści, jedynie opisane poniżej metadane określające ich wygląd w menu. Podstrony kategorii mają zaznaczony przełącznik "is category only".</alert>

Po wybraniu podstrony lub utworzeniu nowej ukaże się ekran wyglądający podobnie do tego na zdjęciu poniżej.

Po lewej stronie ekranu znajduje się formularz pozwalający edytować stronę. Zawiera on kilka pól metadanych oraz edytor tekstu, w którym wpisujemy treść artykułu. Zacznijmy od metadanych:

* PATH - pole określa pod jaką ścieżką znajduję się podstrona. Inaczej jest to adres pod strony po https://info.samorzad.uj.edu.pl/ oraz kodzie wersji językowej. Na przykład jeśli pole zawiera wartość "uczelnia/biblioteka" i strona jest w języku polskim to będzie ona dostępna pod adresem https://info.samorzad.uj.edu.pl/pl/uczelnia/biblioteka/. W samym informatorze w menu podstron będzie zaś ona dostępna pod zakładkę "Uczelnia" jako "Biblioteka".
* TITLE - nic innego jak tytuł strony. Jest widoczny w nagłówku strony oraz w menu podstron. Powinien być na tyle krótki aby zmieścił się w menu podstron (w przeciwnym przypadku będzie wyświetlać się w menu przycięty). W ogólności 20-kilka znaków powinno zmieścić się bez problemu.
* ORDER IN MENU - opcjonalna wartość określająca kolejność wyświetlania podstrony w menu. Można wpisać dowolną liczbę. Strony z wyższą wartością ORDER wyświetlają się niżej w menu niż te z niższą wartością. Wiemy, że rozwiązanie to nie jest tak wygodne jak znane np. z Wordpress "przeciągnij i upuść", jednakże jest to jedyny sposób aby każda strona była niezależnym plikiem, bo pozwala na niezależną edycję. Jeśli pozostawimy pole pustym jest traktowane tak, jakby było tam zero.
* MATERIAL DESIGN ICON - Ikona wyświetlana w menu podstron. Lista dostępnych ikon jest tu <https://materialdesignicons.com/>. Wystarczy podać jej nazwę. Puste = brak ikony.
* IS CATEGORY ONLY - strona nie zawiera treści, jest tylko kategorią/plakietką w menu. Należy zaznaczyć jeśli edytowany dokument opisuje kategorię a nie podstronę.
* DESCRIPTION - opis strony dla wyszukiwarek. Opis ten pokaże się np. w wyszukiwarce Google. Zaleca się podanie jednozdaniowego opisu o czym jest podstrona.

Zaraz poniżej formularza znajduje się pole BODY - tu wreszcie możemy wpisać/edytować treść artykułu. Dostępny jest edytor typu "Rich Text" pozwalający w wygodny sposób edytować artykuły oraz edytor "Markdown" jeśli chcemy wprowadzić coś bardziej zaawansowanego edytując kod strony. W praktycznie każdym przypadku wystarczy nam ten pierwszy - pozwala on na wszystkie podstawowe formatowania tekstu, tworzenie list, oznaczania cytatów, wstawianie obrazków czy ramek (alertów). Na dole artykułu znajdują się przykłady tego, co można osiągnąć korzystając z edytora.

Po prawej stronie ekranu znajduje się szybki podgląd artykułu. Nie jest on dokładnym odwzorowaniem tego, jak wpis będzie wyglądać finalnie w informatorze (w szczególności obrazki czy ramki nie wyświetlają się w ten sam sposób), jednak pozwala na szybkie znalezienie najczęstszych błędów jak źle podzielone akapity itp.

![Ekran edycji](/images/uploads/netlify_edit.png "Wprowadź zmiany w artykule.")

Po zakończeniu edycji lub gdy tylko chcemy zapisać wersję roboczą klikamy przycisk "Save".

<alert type='warning' outlined border='left'>Uwaga! Wszystkie tworzone zmiany, w tym kopie robocze są zapisywane w publicznie dostępnym repozytorium na GitHub i przypisane do Waszego konta. Jakkolwiek nie są one publikowane w widoczny sposób i ich znalezienie wymaga odrobiny wysiłku nie zaleca się zapisywania treści, które naruszają czyjąś prywatność lub w inny sposób nie chcielibyście aby kiedyś ujrzały one światło dzienne.</alert>

![Ekran po edycji](/images/uploads/netlify_save.png "Po wprowadzeniu zmian zapisz artykuł. Możesz to robić za każdym razem gdy na przykład chcesz powrócić do edycji później. Zmiany są zapisane tylko dla Twojej kopii roboczej.")

### Krok 3: Wyślij zmiany do zatwierdzenia przez moderatora

Gdy zakończysz pracę nad zmianami i chcesz aby zostały opublikowane możesz od razu wysłać je do recenzji moderatora. Wystarczy że (jeśli nie stało się to wcześniej) zapiszesz zmiany a potem zmienisz ich status z "Draft" na "In review". Nie musisz robić nic więcej - moderatorzy zostaną powiadomieni automatycznie przez GitHub.

<alert type='error' outlined border='left'>Uwaga: celem informatora jest stworzenie miejsca w którym każdy student znajdzie najważniejsze informacje. Kategorycznie zabrania się używania go do promocji przedsięwzięć komercyjnych, nie związanych z UJ czy nie związanych z tematyką Informatora. Zastrzegamy sobie prawo do odrzucania zmian niezgodnych z powyższym oraz blokowania możliwości proponowania zmian kontom naruszającym reguły w sposób rażący (w szczególności poprzez tak zwany spam).</alert>

![Ekran wysyłania zmian do recenzji](/images/uploads/netlify_review.png "Kiedy skończysz swoją pracę i zapiszesz zmiany wyślij je do zatwierdzenia zmieniając ich status z draft na in review. Zespół informatora zostanie automatycznie poinformowany o oczekujących na zatwierdzenie zmianach.")

Status swoich zmian możesz śledzić w zakładce "Workflow" lub na GitHub tutaj: <https://github.com/Samorzad-Studentow-UJ/informator/pulls>.

![Ekran workflow](/images/uploads/netlify_flow.png "W zakładce Workflow możesz śledzić status zaproponowanych przez siebie zmian. Możesz je także edytować dalej lub wycofać.")

Po przesłaniu zmian może zdarzyć się jedno z poniższych:

* moderator zaakceptuje Twoje zmiany - dostaniesz maila od GitHub, że Twoje zmiany zostały przyłączone (ang. merged) do głównego repozytorium Informatora. Od momentu akceptacji proces publikacji jest automatyczny i zajmuje kilka minut (tyle zajmuje wydanie nowej wersji aplikacji). 
* moderator poprosi Cię o wprowadzenie zmian - moderator może skontaktować się z Tobą przez GitHub, dostaniesz powiadomienie przez email. Razem z moderatorem ustalicie co konkretnie wymaga zmiany (np. możesz otrzymać prośbę o podanie źródeł informacji na stronie).
* moderator odrzuci Twoją zmianę w całości - powód odrzucenia otrzymasz w wiadomości z GitHub (z wyjątkiem sytuacji gdy Twoja zmiana została uznana za spam). Ta opcja zdarza się niezwykle rzadko, podajemy ją tylko dla kompletności instrukcji obsługi 😉.

To już koniec instrukcji obsługi wprowadzania zmian w treści Informatora Studenta UJ. Czekamy na Twoje propozycje zmian, w razie problemów nie czekaj tylko skontaktuj się z nami przez Facebooka 😀.

PS Tak, tą stronę też możesz edytować 😆.

## Jak edytować kod informatora?

Informator Studenta UJ jest w całości Open Source, z chęcią przyjmiemy każdą pomoc w uczynieniu aplikacji lepszą 😀. Kod aplikacji (oraz treść) znajduje się tu <https://github.com/Samorzad-Studentow-UJ/informator>, akceptujemy Pull requesty.

Od strony technicznej Informator bazuje na NuxtJS (wraz z pluginami NuxtJS Content i NuxtJS PWA). Frontend bazuje na Vuetify, zaś do budowania aplikacji wykorzystujemy GitHub Actions. Jeśli powyższe brzmi interesująco zapraszamy do współpracy 😉.

## Przykłady tego, co można wstawić w Informator
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

### H3 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

![Hovercat to base requesting purrmision to land](/images/uploads/hover_cat_some_lols_and_some_cats_587a94_3315910.jpg "Hover cat")

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

<alert type="warning" outlined border="left">Test 1234</alert>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

#### h4 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

##### h5 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

###### h6 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

### Horizontal Rules

- - -

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

- - -

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada quam risus, in convallis ante laoreet et. In blandit porttitor consequat. Ut in purus in arcu faucibus lobortis. Nam eu nulla lacus. Vestibulum tincidunt ex sit amet maximus vulputate. Nunc eget maximus ipsum. Vivamus sapien nisl, fermentum vel enim et, tincidunt facilisis nulla. Nam imperdiet sed lectus eget semper. Fusce eu quam est. Aenean vestibulum diam eget urna egestas rhoncus. Nunc mattis neque lectus, ac commodo lacus dapibus in. Quisque at viverra tortor. Fusce congue pretium orci, ac faucibus ipsum sagittis et. Integer aliquet urna ac rutrum lobortis. Pellentesque aliquet placerat tincidunt.

- - -

### Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

### Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

### Lists

Unordered

* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:

  * Marker character change forces new list start:

    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

### Alerts

<alert type="error" outlined border="left">Lorem ipsum dolor sit amet!</alert>

### Tables

| Tables   |      Are      |  Cool |
|----------|---------------|-------|
| col 1    | test          | $1600 |
| col 2    | test          |   $12 |
| col 3    | test          |    $1 |