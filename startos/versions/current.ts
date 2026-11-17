import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.11.1:0',
  releaseNotes: {
    en_US: `Updated Memos to 26.11.1. Memos now uses calendar version numbers.

**Features**

- A rich editor that shows a memo as it will look while you write; Markdown mode remains under Settings › Editor
- Drawings and image annotations, a full emoji reaction picker, and drag-to-reorder attachments
- Per-user usage limits for memo length, upload size, memo count, and total storage

**After updating**

- Everyone signs in again, and API clients using access tokens must sign in again. Personal access tokens keep working.
- Memo length and upload size limits are not carried over: set them again under Settings › Usage limits.
- Only administrators can export memos; members ask an administrator for their archive.
- Custom CSS that targets the old classes or variables needs updating.

Full release notes: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    es_ES: `Memos actualizado a 26.11.1. Memos ahora usa números de versión de calendario.

**Novedades**

- Un editor enriquecido que muestra la nota tal como se verá mientras escribes; el modo Markdown sigue disponible en Ajustes › Editor
- Dibujos y anotaciones de imágenes, un selector completo de reacciones con emojis y reordenación de adjuntos arrastrándolos
- Límites de uso por usuario para la longitud de las notas, el tamaño de subida, el número de notas y el almacenamiento total

**Después de actualizar**

- Todos deben iniciar sesión de nuevo, y los clientes de API que usan tokens de acceso deben volver a autenticarse. Los tokens de acceso personales siguen funcionando.
- Los límites de longitud de nota y de tamaño de subida no se conservan: vuelve a configurarlos en Ajustes › Límites de uso.
- Solo los administradores pueden exportar notas; los miembros piden su archivo a un administrador.
- El CSS personalizado que apunta a las clases o variables antiguas debe actualizarse.

Notas completas: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    de_DE: `Memos auf 26.11.1 aktualisiert. Memos verwendet jetzt Kalenderversionsnummern.

**Neuerungen**

- Ein Rich-Text-Editor, der eine Notiz schon beim Schreiben so zeigt, wie sie gespeichert aussieht; der Markdown-Modus bleibt unter Einstellungen › Editor verfügbar
- Zeichnungen und Bildanmerkungen, eine vollständige Emoji-Reaktionsauswahl und Anhänge, die sich per Ziehen umsortieren lassen
- Nutzungslimits pro Benutzer für Notizlänge, Upload-Größe, Anzahl der Notizen und Gesamtspeicher

**Nach dem Update**

- Alle müssen sich erneut anmelden, und API-Clients mit Zugriffstokens müssen sich neu authentifizieren. Persönliche Zugriffstokens funktionieren weiterhin.
- Die Limits für Notizlänge und Upload-Größe werden nicht übernommen: Lege sie unter Einstellungen › Nutzungslimits neu fest.
- Nur Administratoren können Notizen exportieren; Mitglieder bitten einen Administrator um ihr Archiv.
- Eigenes CSS, das die alten Klassen oder Variablen anspricht, muss angepasst werden.

Vollständige Versionshinweise: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    pl_PL: `Zaktualizowano Memos do 26.11.1. Memos używa teraz kalendarzowych numerów wersji.

**Nowości**

- Edytor wizualny, który podczas pisania pokazuje notatkę tak, jak będzie wyglądać po zapisaniu; tryb Markdown pozostaje dostępny w Ustawienia › Edytor
- Rysunki i adnotacje na obrazach, pełny wybór reakcji emoji oraz zmiana kolejności załączników przez przeciąganie
- Limity użycia dla każdego użytkownika: długość notatki, rozmiar przesyłanych plików, liczba notatek i łączne miejsce

**Po aktualizacji**

- Wszyscy muszą zalogować się ponownie, a klienci API używający tokenów dostępu muszą uwierzytelnić się na nowo. Osobiste tokeny dostępu nadal działają.
- Limity długości notatki i rozmiaru przesyłanych plików nie są przenoszone: ustaw je ponownie w Ustawienia › Limity użycia.
- Tylko administratorzy mogą eksportować notatki; członkowie proszą administratora o swoje archiwum.
- Własny CSS odwołujący się do starych klas lub zmiennych wymaga aktualizacji.

Pełne informacje o wydaniu: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    fr_FR: `Memos mis à jour vers 26.11.1. Memos utilise désormais des numéros de version calendaires.

**Nouveautés**

- Un éditeur enrichi qui affiche le mémo tel qu'il apparaîtra pendant la saisie ; le mode Markdown reste disponible dans Paramètres › Éditeur
- Dessins et annotations d'images, un sélecteur complet de réactions emoji et la réorganisation des pièces jointes par glisser-déposer
- Limites d'utilisation par utilisateur pour la longueur des mémos, la taille des envois, le nombre de mémos et le stockage total

**Après la mise à jour**

- Tout le monde doit se reconnecter, et les clients API utilisant des jetons d'accès doivent se réauthentifier. Les jetons d'accès personnels continuent de fonctionner.
- Les limites de longueur des mémos et de taille des envois ne sont pas reprises : redéfinissez-les dans Paramètres › Limites d'utilisation.
- Seuls les administrateurs peuvent exporter des mémos ; les membres demandent leur archive à un administrateur.
- Le CSS personnalisé ciblant les anciennes classes ou variables doit être mis à jour.

Notes de version complètes: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
