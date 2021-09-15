---
title: Edytuj Informator
icon: pencil
order: 99999
stub: false
description: Jak edytować Informator Studenta UJ?
---
Informator Studenta UJ pozwala każdemu wprowadzać zmiany, które po zatwierdzeniu przez moderatora natychmiast zostaną opublikowane w aplikacji. Aby tego dokonać wystarczy tylko posiadać konto w serwisie GitHub i kilka chwil wolnego czasu 😉

## Krok 0: Załóż konto na GitHub jeśli jeszcze go nie posiadasz

GitHub to platforma ułatwiająca proces budowania aplikacji. Informator Studenta UJ wykorzystuje ją do wersjonowania zmian, współpracy nad zarówno treścią Informatora jak i kodem, budowania aplikacji a nawet samego hostingu. Jako ciekawostkę dodam, że ponieważ Informator jest udostępniony na otwartej licencji GitHub nie pobiera od nas opłat za korzystanie z ich usług.

Aby założyć konto przejdź do <https://github.com/> i postępuj zgodnie z instrukcjami. Założenie konta zajmie tylko kilka chwil. Nie zapomnij go aktywować potwierdzając swój adres email.

![Strona główna GitHub](/images/uploads/github.png "Jeśli nie posiadasz konta GitHub utwórz je aby edytować Informator.")

![Ekran rejestracji GitHub](/images/uploads/github_register.png "Zarejestruj konto zgodnie z instrukcjami na ekranie. Nie zapomnij zweryfikować adresu email aby aktywować konto.")

Po założeniu i aktywowaniu konta możesz zamknąć kartę przeglądarki - nie będziesz więcej potrzebować bezpośrednio używać GitHub - następne kroki wykonasz już w panelu edycji Informatora logując się przez GitHub.

<v-alert type='info' outlined border='left'>GitHub jest usługą skierowaną dla twórców aplikacji i pod tym względem może wyglądać nieco nieprzyjaźnie dla osób, które nigdy ich nie tworzyły. Nie przejmuj się tym - potrzebujesz jedynie założyć tam konto aby móc zalogować się do panelu edycji Informatora (który wykona za Ciebie resztę pracy).</v-alert>

## Krok 1: Zaloguj się do panelu edycji Informatora

Przejdź do <https://infossuj.pardyl.com/edit/> i zaloguj się swoim kontem GitHub. Po zalogowaniu autoryzuj panel edycji Informatora ze swoim kontem. Pozwoli to panelowi edycji zapisywać wprowadzane przez Ciebie zmiany na GitHub oraz informować w Twoim imieniu moderatorów Informatora o oczekujących na nich zmianach. Ostatnim krokiem potrzebnym do rozpoczęcia edycji jest utworzenia tak zwanego "forka" - kopi roboczej całego repozytorium Informatora, na której możesz swobodnie wprowadzać zmiany - wystarczy zezwolić na to panelowi edycji a on zrobi to za Ciebie.

![Ekran logowania do panelu edycyjnego Informatora](/images/uploads/login_with_github.png "Zaloguj się do panelu edycyjnego Informatora poprzez GitHub.")

![Ekran autoryzacji Informatora z GitHub](/images/uploads/authorize_netlify.png "Zezwól Informatorowi na dostęp do publicznych repozytoriów GitHub dla Twojego konta.")

![Ekran tworzenia forka](/images/uploads/netlify_fork.png "Po zalogowaniu utwórz \\"fork\\" - kopię roboczą Informatora na której możesz swobodnie dokonywać zmian.")

## Krok 2: Wprowadź zmiany

![Ekran wyboru strony do edycji](/images/uploads/netlify_menu.png "Wybierz podstronę, którą chcesz edytować. Zauważ, że kategorie w menu informatora również są podstronami.")

![Ekran edycji](/images/uploads/netlify_edit.png "Wprowadź zmiany w artykule.")

![Ekran po edycji](/images/uploads/netlify_save.png "Po wprowadzeniu zmian zapisz artykuł. Możesz to robić za każdym razem gdy na przykład chcesz powrócić do edycji później. Zmiany są zapisane tylko dla Twojej kopii roboczej.")

Krok 3: Wyślij zmiany do zatwierdzenia przez moderatora

![Ekran wysyłania zmian do recenzji](/images/uploads/netlify_review.png "Kiedy skończysz swoją pracę i zapiszesz zmiany wyślij je do zatwierdzenia zmieniając ich status z \\"draft\\" na \\"in review\\". Zespół informatora zostanie automatycznie poinformowany o oczekujących na zatwierdzenie zmianach.")

![Ekran "workflow"](/images/uploads/netlify_flow.png "W zakładce \\"Workflow\\" możesz śledzić status zaproponowanych przez siebie zmian. Możesz je także edytować dalej lub wycofać.")