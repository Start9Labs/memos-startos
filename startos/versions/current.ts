import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.11.1:0',
  releaseNotes: {
    en_US: `Updated Memos to 26.11.1. Memos now uses calendar version numbers.

**Features**

- A rich editor that shows a memo as it will look while you write; Markdown mode remains under Settings › Editor
- Drawings and image annotations, a full emoji reaction picker, and drag-to-reorder attachments
- Per-user usage limits for memo length, upload size, memo count, and total storage

**Before updating**

- Back up Memos. The update creates attachment indexes and can take time on large instances.
- Packages older than 0.31.0 must first [update to 0.31.0:3](https://github.com/Start9Labs/memos-startos/releases/tag/v0.31.0_3) and start successfully.
- Update integrations and third-party clients for Memos 26.11.1: REST paths move from /api/v1 to /api, and gRPC/Connect names and API fields change. Signing in again does not make an older client compatible.

**After updating**

- Existing access tokens are invalidated. Browser sessions can renew automatically; API clients must refresh their access token or sign in again. Personal access tokens are unchanged.
- Memo length and upload size limits are not carried over: set them again under Settings › Usage limits.
- Only administrators can export memos; members ask an administrator for their archive.
- Custom CSS that targets the old classes or variables needs updating.

Full release notes: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    es_ES: `Memos actualizado a 26.11.1. Memos ahora usa números de versión de calendario.

**Novedades**

- Un editor enriquecido que muestra la nota tal como se verá mientras escribes; el modo Markdown sigue disponible en Ajustes › Editor
- Dibujos y anotaciones de imágenes, un selector completo de reacciones con emojis y reordenación de adjuntos arrastrándolos
- Límites de uso por usuario para la longitud de las notas, el tamaño de subida, el número de notas y el almacenamiento total

**Antes de actualizar**

- Haz una copia de seguridad de Memos. La actualización crea índices de adjuntos y puede tardar en instancias grandes.
- Los paquetes anteriores a 0.31.0 deben primero [actualizarse a 0.31.0:3](https://github.com/Start9Labs/memos-startos/releases/tag/v0.31.0_3) e iniciarse correctamente.
- Actualiza las integraciones y los clientes de terceros para Memos 26.11.1: las rutas REST pasan de /api/v1 a /api, y cambian los nombres de gRPC/Connect y los campos de la API. Volver a iniciar sesión no hace compatible un cliente antiguo.

**Después de actualizar**

- Los tokens de acceso existentes quedan invalidados. Las sesiones del navegador pueden renovarse automáticamente; los clientes de API deben renovar su token de acceso o iniciar sesión de nuevo. Los tokens de acceso personales no cambian.
- Los límites de longitud de nota y de tamaño de subida no se conservan: vuelve a configurarlos en Ajustes › Límites de uso.
- Solo los administradores pueden exportar notas; los miembros piden su archivo a un administrador.
- El CSS personalizado que apunta a las clases o variables antiguas debe actualizarse.

Notas completas: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    de_DE: `Memos auf 26.11.1 aktualisiert. Memos verwendet jetzt Kalenderversionsnummern.

**Neuerungen**

- Ein Rich-Text-Editor, der eine Notiz schon beim Schreiben so zeigt, wie sie gespeichert aussieht; der Markdown-Modus bleibt unter Einstellungen › Editor verfügbar
- Zeichnungen und Bildanmerkungen, eine vollständige Emoji-Reaktionsauswahl und Anhänge, die sich per Ziehen umsortieren lassen
- Nutzungslimits pro Benutzer für Notizlänge, Upload-Größe, Anzahl der Notizen und Gesamtspeicher

**Vor dem Update**

- Sichere Memos. Das Update erstellt Indizes für Anhänge und kann bei großen Instanzen länger dauern.
- Pakete älter als 0.31.0 müssen zuerst [auf 0.31.0:3 aktualisiert](https://github.com/Start9Labs/memos-startos/releases/tag/v0.31.0_3) und erfolgreich gestartet werden.
- Aktualisiere Integrationen und Drittanbieter-Clients für Memos 26.11.1: REST-Pfade wechseln von /api/v1 zu /api, und gRPC/Connect-Namen und API-Felder ändern sich. Eine erneute Anmeldung macht einen älteren Client nicht kompatibel.

**Nach dem Update**

- Bestehende Zugriffstokens werden ungültig. Browser-Sitzungen können sich automatisch erneuern; API-Clients müssen ihr Zugriffstoken erneuern oder sich erneut anmelden. Persönliche Zugriffstokens bleiben unverändert.
- Die Limits für Notizlänge und Upload-Größe werden nicht übernommen: Lege sie unter Einstellungen › Nutzungslimits neu fest.
- Nur Administratoren können Notizen exportieren; Mitglieder bitten einen Administrator um ihr Archiv.
- Eigenes CSS, das die alten Klassen oder Variablen anspricht, muss angepasst werden.

Vollständige Versionshinweise: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    pl_PL: `Zaktualizowano Memos do 26.11.1. Memos używa teraz kalendarzowych numerów wersji.

**Nowości**

- Edytor wizualny, który podczas pisania pokazuje notatkę tak, jak będzie wyglądać po zapisaniu; tryb Markdown pozostaje dostępny w Ustawienia › Edytor
- Rysunki i adnotacje na obrazach, pełny wybór reakcji emoji oraz zmiana kolejności załączników przez przeciąganie
- Limity użycia dla każdego użytkownika: długość notatki, rozmiar przesyłanych plików, liczba notatek i łączne miejsce

**Przed aktualizacją**

- Utwórz kopię zapasową Memos. Aktualizacja tworzy indeksy załączników i może potrwać w dużych instancjach.
- Pakiety starsze niż 0.31.0 trzeba najpierw [zaktualizować do 0.31.0:3](https://github.com/Start9Labs/memos-startos/releases/tag/v0.31.0_3) i pomyślnie uruchomić.
- Zaktualizuj integracje i aplikacje zewnętrzne do wersji zgodnych z Memos 26.11.1: ścieżki REST zmieniają się z /api/v1 na /api, a nazwy gRPC/Connect i pola API ulegają zmianie. Ponowne zalogowanie nie zapewni zgodności starszego klienta.

**Po aktualizacji**

- Istniejące tokeny dostępu tracą ważność. Sesje przeglądarki mogą odnowić się automatycznie; klienci API muszą odświeżyć token dostępu lub zalogować się ponownie. Osobiste tokeny dostępu pozostają bez zmian.
- Limity długości notatki i rozmiaru przesyłanych plików nie są przenoszone: ustaw je ponownie w Ustawienia › Limity użycia.
- Tylko administratorzy mogą eksportować notatki; członkowie proszą administratora o swoje archiwum.
- Własny CSS odwołujący się do starych klas lub zmiennych wymaga aktualizacji.

Pełne informacje o wydaniu: [26.10.0](https://github.com/usememos/memos/releases/tag/26.10.0) · [26.11.0](https://github.com/usememos/memos/releases/tag/26.11.0) · [26.11.1](https://github.com/usememos/memos/releases/tag/26.11.1)`,
    fr_FR: `Memos mis à jour vers 26.11.1. Memos utilise désormais des numéros de version calendaires.

**Nouveautés**

- Un éditeur enrichi qui affiche le mémo tel qu'il apparaîtra pendant la saisie ; le mode Markdown reste disponible dans Paramètres › Éditeur
- Dessins et annotations d'images, un sélecteur complet de réactions emoji et la réorganisation des pièces jointes par glisser-déposer
- Limites d'utilisation par utilisateur pour la longueur des mémos, la taille des envois, le nombre de mémos et le stockage total

**Avant la mise à jour**

- Sauvegardez Memos. La mise à jour crée des index de pièces jointes et peut prendre du temps sur les grandes instances.
- Les paquets antérieurs à 0.31.0 doivent d'abord [passer à 0.31.0:3](https://github.com/Start9Labs/memos-startos/releases/tag/v0.31.0_3) et démarrer correctement.
- Mettez les intégrations et clients tiers à jour pour Memos 26.11.1 : les chemins REST passent de /api/v1 à /api, et les noms gRPC/Connect ainsi que les champs de l'API changent. Se reconnecter ne rend pas un ancien client compatible.

**Après la mise à jour**

- Les jetons d'accès existants sont invalidés. Les sessions du navigateur peuvent se renouveler automatiquement ; les clients API doivent renouveler leur jeton d'accès ou se reconnecter. Les jetons d'accès personnels restent inchangés.
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
