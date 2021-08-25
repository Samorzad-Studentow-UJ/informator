<template>
  <v-container>
    <div class='article pa-4 pa-sm-6 pa-md-8'>
      <article>
        <h1 class='text-h2 mb-5'>Jak administrować stroną?</h1>
        Wersja dla osób uprawnionych do bezpośredniego edytowania (bez potrzeby zatwierdzenia zmian przez kogoś innego).

        <h2>TLDR</h2>
        <ol>
          <li>Założyć konto na <a href='https://github.com/'>https://github.com/</a>,</li>
          <li>Napisać do v-ce ssuj o dodanie do zespołu informatora (podać nick na github),</li>
          <li>Wejść na <a href='https://infossuj.pardyl.com/admin/'>https://infossuj.pardyl.com/admin/</a>,</li>
          <li>Wybrać stronę do edycji,</li>
          <li>Wprowadzić zmiany,</li>
          <li>Kliknąć publish, zmiany będą widoczne na stronie po kilku minutach.</li>
        </ol>

        <h2>Co muszę zrobić, żeby dostać uprawnienia do edycji</h2>
        <h3>Konto GitHub</h3>
        <p>Github (<a href='https://github.com/'>https://github.com/</a>) to serwis pozwalający zarządzać wersjami
          plików, budować aplikacje i klika innych rzeczy. Używamy go do obsługi i hostiwania informatora.
          Ma dużo funkcji i jest dość skomplikowany, ale nie ma potrzeby zaznajamiać się z jego działaniem jeśli chcemy
          tylko edytować treść informatora.
          Potrzebne jest jednak konto w nim aby móc publikować nowe wersje aplikacji informatora (co dzieje się
          automatycznie po zapisaniu zmian).</p>

        <h3>Uprawnienia</h3>
        <p>Po założeniu konta należy napisać do osoby opiekującej się informatorem (aktualnie V-ce przewo SSUJ)
          o dodanie do zespołu. Po dodaniu zyskuje się pełen dostęp i można wprowadzać dowolne zmiany.</p>

        <h2>Jak edytować</h2>
        <p>Informator można edytować na kilka sposobów zależnie od preferencji.</p>

        <h3>Opcja 1: Netlify CMS (zalecane)</h3>
        <p>Wchodzimy na <a href='https://infossuj.pardyl.com/admin/'>https://infossuj.pardyl.com/admin/</a>
          i logujemy się przez GitHub. Powinien powitać nas ekran jak poniżej.</p>

        <ContentImage src='/images/docs/netlify_ui.png' alt='Ekran menu netlify'
                      title='Menu Netlify CMS'></ContentImage>

        <p>W menu "Collections" znajdziemy oddzielny zestaw folderów dla każdego języka.</p>

        <p>Każdy z folderów zawiera podstrony. Lista ich wyświetla się w środkowej części ekranu
          po wybraniu folderu. Aby edytować jedną z nich wystarczy kliknąć jej nazwę.
          Na liście tej wyświetlają się również podfoldery zawarte w wybranym katalogu. Po ich kliknięciu
          można edytować ich nazwę w menu oraz przypisaną ikonę.</p>

        <p>Nowe strony i foldery tworzy się przyciskiem New Page (język).</p>

        <p>Po wybraniu strony do edycji lub utworzeniu nowej przywita nas ekran podobny do poniższego.</p>

        <ContentImage src='/images/docs/netlify_edit.png' alt='Ekran edycji netlify'
                      title='Ekran edycji'></ContentImage>

        <p>Po lewej widzimy ekran edycji.</p>
        <ul>
          <li>Pole "path" określa ścieżkę naszej strony/folderu (w jakim folderze ma się znaleźć).</li>
          <li>Pole "title" definiuje tytuł strony/folderu (widzoczny w nagłówku oraz w menu, powinien być krótki).</li>
          <li>Pole "material design icon" pozwala ustawić ikonę w menu aplikacji dla danej strony/folderu. Lista
            dostępnych ikon znajduje się tu: <a
              href='https://materialdesignicons.com/'>https://materialdesignicons.com/</a> (należy podać samą nazwę
            ikony).
          </li>
          <li>Pole "order in menu" pozwala wymusić kolejność podstrony w menu aplikacji. Można wpisać w nie dowolną
            liczbę. Strony z wyższą wartością będą niżej na liście niż te z mniejszą.
          </li>
          <li>Przełącznik "is category only" pozwala określić czy tworzony element jest storną (z treścią) czy tylko
            folderem. Należy go zaznaczyć jeśli tworzony element ma zawierać inne podstrony i być tylko kategorią w menu
            aplikacji.
          </li>
          <li>Pole "description" okresla abstrakt strony (to, co wyświetla się w wyszukiwarce lub social media jako
            krótki
            opis linku), jest ignorowane dla folderów.
          </li>
          <li>
            Pole "body" to wreszcie sama zawartość strony. Tu wpisujemy treść naszego artykułu.
            Powinno się zostawić je puste dla folderów. Treść można edytować jako Rich Text używając edytora lub
            bezpośrednio jako Markdown.
          </li>
        </ul>
        <p>Po prawej stronie widzimy podgląd edytowanej przez nas strony. Należy pamiętać, że nie jest on dokładnym
          odwzorowaniem
          aplikacji i strona może nieco się różnić pod względem stylu (np. obrazki są wypośrodkowane i z podpisem na
          stronie).</p>

        <p>Po zakończeniu edycji klikamy przycisk publish na górze ekranu. Nasze zmiany zostaną natychmiast zapisane.
          Po kilku minutach nowa wersja aplikacji zostanie automatycznie opublikowana. Status procesu publikowania można
          śledzić na Githubie <a href='https://github.com/Samorzad-Studentow-UJ/informator/actions'>https://github.com/Samorzad-Studentow-UJ/informator/actions</a>
        </p>

        <p>Za pomoca Netlify CMS można edytować praktycznie całą zawartość poza stronami specjalnymi (w tej chwili tylko
          strona główna).</p>

        <h3>Opcja 2: bezpośrednio przez Github</h3>
        <p>Github posiada wbudowany edytor tekstu. Nie jest on tak zintegrowany jak Netlify CMS, ale w niektórych
          przypadkach może być pomocny.</p>
        <p>Aby go użyć wystarczy wejść w repozytorium aplikacji (<a
          href='https://github.com/Samorzad-Studentow-UJ/informator'>https://github.com/Samorzad-Studentow-UJ/informator</a>
          i przejść do folderu "content". Znajdziemy w nim wszystkie standardowe podstrony podzielone na foldery. Każdy
          z
          folderów zawiera plik "index.md" opisujący treść podstrony/tytuł folderu.
          Można je edytować klikając ikonę ołówka. Niestety Github nie dostarcza edytora typu Rich-text, konieczna jest
          więc podstawowa znajomość Markdown. Szybki kurs można znaleźć tu
          <a href='https://guides.github.com/features/mastering-markdown/'>https://guides.github.com/features/mastering-markdown/</a>.
          Każdy plik MUSI zaczynać się od tak zwanego "front matter" określającego wszystko, co normalnie wpisywało się
          w
          formularz w netlify, czyli:
        </p>
        <pre><code>---
title: Tytuł strony
description: Abstrakt
icon: Ikona metrial design (jak wyżej)
order: kolejność (jak wyżej)
stub: true/false (odpowiednik Is category only jak wyżej)
---
</code></pre>
        <p>Pod front matter wpisujemy treść samego artykułu. W razie wątpliwości warto podpatrzeć jak wygląda to w już
          istniejących podstronach i stworzyć coś podobnego :)</p>
        <p>Z uwagi na to, że pisanie front matter ręcznie jest dość mało intuicyjne zaleca się używanie Metody 1.</p>
        <h3>Opcja 3: Za pomocą klienta Git</h3>
        <p>Ponieważ Github używa standardowego systemu Git do zarządzania trescią informator można go w całości ściągnąć
          i edytować
          dowolną aplikacją wspierającą Git, na przykład:</p>
        <ul>
          <li><a href='https://desktop.github.com/'>Github Desktop</a> - oficjalna aplikacja Github dla Windows i MacOS.
            Prawdopodobnie najbardziej
            wygodna dla nie-informatykóœ aplikacja do obsługi Git.
          </li>
          <li><a href='https://www.jetbrains.com/webstorm/'>Webstorm</a> - program do tworzenia aplikacji internetowych,
            używany do pisania
            kodu aplikacji informatora. Darmowy dla studentów.
          </li>
        </ul>
        <p>Niezaleznie od używanej aplikacji efektem jest folder na dysku z kopią całego informatora, w którym możemy
          dokonywać zmian (dowolnym edytorem tekstu).
          Po dokonaniu zmian należy je zatwierdzić (commit) oraz przesłać (push). Nowe wersje można pobrać za pomocą
          pull/update.</p>
        <p>Używanie aplikacji jest najbardziej wygodną opcją do wprowadzania dużych zmian, ale tak, jak z edytowaniem
          przez Github wymaga ręcznego pisania front matter.
          Pod tym względem również zalecam Metodę 1 - Netlify na początek. </p>
        <h2>Co robić gdy coś nie jest jasne lub coś nie działa?</h2>
        <p>W sytuacjach tych należy prześladować v-ce przewodniczącego ssuj (ale nie przed 10 rano bo śpi ;P).</p>
      </article>
    </div>
  </v-container>
</template>

<script>
import ContentImage from '~/components/ContentImage'

export default {
  components: { ContentImage }
}
</script>
