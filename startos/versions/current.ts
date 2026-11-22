import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.11.2:0',
  releaseNotes: {
    en_US: `Updated Memos to 26.11.2.

**Features**

- Show comments beside memos in every memo list: turn on Include comments in Settings › Preferences › This device
- Reorder saved Views with Move up and Move down, and a Full width option for the timeline
- The audience picker says who can read a memo, and the calendar month picker marks months that hold memos

**Fixes**

- Thumbnails of externally linked attachments no longer render blank
- Tag rules written as patterns show their memo counts
- Long memos load and save faster

**Before updating**

- Update integrations and third-party clients that read or create comments: the comment-specific API calls and MCP tools are removed in favor of regular memos with a parent.
- API and MCP memo lists, and API user statistics, now include comments by default. Integrations that expect top-level memos only must add \`parent == null\` to their filter.

**After updating**

- Compact mode moves to Settings › Preferences › This device and applies to every memo list; an existing choice carries over.

[Full release notes](https://github.com/usememos/memos/releases/tag/26.11.2)`,
    es_ES: `Memos actualizado a 26.11.2.

**Novedades**

- Muestra los comentarios junto a las notas en todas las listas: activa Incluir comentarios en Ajustes › Preferencias › Este dispositivo
- Reordena las Vistas guardadas con Subir y Bajar, y una opción de Ancho completo para la línea de tiempo
- El selector de audiencia indica quién puede leer una nota, y el selector de mes del calendario marca los meses que tienen notas

**Correcciones**

- Las miniaturas de adjuntos enlazados externamente ya no aparecen en blanco
- Las reglas de etiquetas escritas como patrones muestran su número de notas
- Las notas largas se cargan y guardan más rápido

**Antes de actualizar**

- Actualiza las integraciones y los clientes de terceros que leen o crean comentarios: se eliminan las llamadas de API y herramientas MCP específicas de comentarios en favor de notas normales con una nota principal.
- Las listas de notas de API y MCP, y las estadísticas de usuario de la API, ahora incluyen comentarios por defecto. Las integraciones que esperan solo notas principales deben añadir \`parent == null\` a su filtro.

**Después de actualizar**

- El modo compacto pasa a Ajustes › Preferencias › Este dispositivo y se aplica a todas las listas de notas; la opción elegida se conserva.

[Notas de versión completas](https://github.com/usememos/memos/releases/tag/26.11.2)`,
    de_DE: `Memos auf 26.11.2 aktualisiert.

**Neuerungen**

- Kommentare neben Notizen in jeder Notizliste anzeigen: Kommentare einbeziehen unter Einstellungen › Präferenzen › Dieses Gerät aktivieren
- Gespeicherte Ansichten mit Nach oben und Nach unten umsortieren, dazu eine Option Volle Breite für die Zeitleiste
- Die Zielgruppenauswahl zeigt, wer eine Notiz lesen kann, und die Monatsauswahl des Kalenders markiert Monate mit Notizen

**Fehlerbehebungen**

- Vorschaubilder extern verlinkter Anhänge bleiben nicht mehr leer
- Als Muster geschriebene Tag-Regeln zeigen ihre Notizanzahl
- Lange Notizen laden und speichern schneller

**Vor dem Update**

- Aktualisiere Integrationen und Drittanbieter-Clients, die Kommentare lesen oder erstellen: Die kommentarspezifischen API-Aufrufe und MCP-Werkzeuge entfallen zugunsten normaler Notizen mit einer übergeordneten Notiz.
- Notizlisten über API und MCP sowie API-Benutzerstatistiken enthalten standardmäßig auch Kommentare. Integrationen, die nur übergeordnete Notizen erwarten, müssen ihrem Filter \`parent == null\` hinzufügen.

**Nach dem Update**

- Der Kompaktmodus wandert nach Einstellungen › Präferenzen › Dieses Gerät und gilt für jede Notizliste; eine bestehende Auswahl bleibt erhalten.

[Vollständige Versionshinweise](https://github.com/usememos/memos/releases/tag/26.11.2)`,
    pl_PL: `Zaktualizowano Memos do 26.11.2.

**Nowości**

- Komentarze obok notatek na każdej liście: włącz Uwzględniaj komentarze w Ustawienia › Preferencje › To urządzenie
- Zmiana kolejności zapisanych Widoków przez Przesuń w górę i Przesuń w dół oraz opcja Pełna szerokość dla osi czasu
- Wybór odbiorców pokazuje, kto może czytać notatkę, a wybór miesiąca w kalendarzu oznacza miesiące z notatkami

**Poprawki**

- Miniatury załączników podlinkowanych z zewnątrz nie są już puste
- Reguły tagów zapisane jako wzorce pokazują liczbę notatek
- Długie notatki wczytują się i zapisują szybciej

**Przed aktualizacją**

- Zaktualizuj integracje i aplikacje zewnętrzne, które odczytują lub tworzą komentarze: usunięto wywołania API i narzędzia MCP przeznaczone dla komentarzy na rzecz zwykłych notatek z notatką nadrzędną.
- Listy notatek w API i MCP oraz statystyki użytkowników w API domyślnie uwzględniają teraz komentarze. Integracje oczekujące tylko notatek nadrzędnych muszą dodać \`parent == null\` do filtra.

**Po aktualizacji**

- Tryb kompaktowy przenosi się do Ustawienia › Preferencje › To urządzenie i dotyczy każdej listy notatek; dotychczasowy wybór zostaje zachowany.

[Pełne informacje o wydaniu](https://github.com/usememos/memos/releases/tag/26.11.2)`,
    fr_FR: `Memos mis à jour vers 26.11.2.

**Nouveautés**

- Affichez les commentaires à côté des mémos dans toutes les listes : activez Inclure les commentaires dans Paramètres › Préférences › Cet appareil
- Réorganisez les Vues enregistrées avec Monter et Descendre, et une option Pleine largeur pour la chronologie
- Le sélecteur d'audience indique qui peut lire un mémo, et le sélecteur de mois du calendrier signale les mois contenant des mémos

**Corrections**

- Les miniatures des pièces jointes liées en externe ne s'affichent plus vides
- Les règles d'étiquettes écrites sous forme de motifs affichent leur nombre de mémos
- Les longs mémos se chargent et s'enregistrent plus vite

**Avant la mise à jour**

- Mettez à jour les intégrations et clients tiers qui lisent ou créent des commentaires : les appels d'API et outils MCP propres aux commentaires sont supprimés au profit de mémos ordinaires avec un parent.
- Les listes de mémos via API et MCP, ainsi que les statistiques utilisateur de l'API, incluent désormais les commentaires par défaut. Les intégrations qui attendent uniquement des mémos de premier niveau doivent ajouter \`parent == null\` à leur filtre.

**Après la mise à jour**

- Le mode compact passe dans Paramètres › Préférences › Cet appareil et s'applique à toutes les listes de mémos ; un choix existant est conservé.

[Notes de version complètes](https://github.com/usememos/memos/releases/tag/26.11.2)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
