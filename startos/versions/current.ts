import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.11.3:0',
  releaseNotes: {
    en_US: `Updated Memos to 26.11.3.

**Features**

- Suggest tags with AI in the composer proposes tags for a draft, preferring the tags you already use (needs a text generation provider)
- A Space has one shared timeline with every member's readable memos
- Right-click a memo card to open its actions menu; the calendar lists every memo of a day
- Settings › AI names each provider by its service, checks the connection on save, and offers a Try it playground

**Fixes**

- Editing or renaming an attachment, such as a saved drawing, keeps its place in the memo
- Two uploads with the same filename at the same moment no longer overwrite each other
- A failed archive import no longer deletes existing unlinked attachments
- Webhook receivers that answer without a body count as delivered

**Before updating**

- If you sign in with SSO: SSO now works only at the address chosen in Actions › Set Instance URL. Open Memos there to sign in, and make sure your identity provider's redirect URI is that address followed by \`/auth/callback\`.

**After updating**

- Administrators should open Settings › AI. A transcription setting without a model is turned off: choose its provider and model again. Providers no longer redirect, so enter each endpoint's final URL.
- Links to a Space's Explore page no longer work; open the Space itself, which now shows every member's memos.

[Full release notes](https://github.com/usememos/memos/releases/tag/26.11.3)`,
    es_ES: `Memos actualizado a 26.11.3.

**Novedades**

- Sugerir etiquetas con IA en el editor propone etiquetas para un borrador, priorizando las que ya usas (requiere un proveedor de generación de texto)
- Un Espacio tiene una única línea de tiempo compartida con las notas legibles de todos sus miembros
- Haz clic derecho en una nota para abrir su menú de acciones; el calendario muestra todas las notas de un día
- Ajustes › IA nombra cada proveedor por su servicio, comprueba la conexión al guardar y ofrece un área de prueba

**Correcciones**

- Editar o renombrar un adjunto, como un dibujo guardado, conserva su posición en la nota
- Dos subidas con el mismo nombre de archivo al mismo tiempo ya no se sobrescriben
- Una importación de archivo fallida ya no elimina adjuntos sin vincular existentes
- Los receptores de webhooks que responden sin cuerpo cuentan como entregados

**Antes de actualizar**

- Si inicias sesión con SSO: SSO ahora solo funciona en la dirección elegida en Acciones › Set Instance URL. Abre Memos allí para iniciar sesión y asegúrate de que la URI de redirección de tu proveedor de identidad sea esa dirección seguida de \`/auth/callback\`.

**Después de actualizar**

- Los administradores deben abrir Ajustes › IA. Una configuración de transcripción sin modelo queda desactivada: vuelve a elegir su proveedor y modelo. Los proveedores ya no siguen redirecciones, así que introduce la URL final de cada endpoint.
- Los enlaces a la página Explorar de un Espacio ya no funcionan; abre el propio Espacio, que ahora muestra las notas de todos sus miembros.

[Notas de versión completas](https://github.com/usememos/memos/releases/tag/26.11.3)`,
    de_DE: `Memos auf 26.11.3 aktualisiert.

**Neuerungen**

- Tags mit KI vorschlagen im Editor schlägt Tags für einen Entwurf vor und bevorzugt bereits verwendete Tags (benötigt einen Anbieter für Textgenerierung)
- Ein Space hat eine gemeinsame Zeitleiste mit den lesbaren Notizen aller Mitglieder
- Rechtsklick auf eine Notiz öffnet ihr Aktionsmenü; der Kalender listet jede Notiz eines Tages
- Einstellungen › KI benennt jeden Anbieter nach seinem Dienst, prüft die Verbindung beim Speichern und bietet einen Testbereich

**Fehlerbehebungen**

- Das Bearbeiten oder Umbenennen eines Anhangs, etwa einer gespeicherten Zeichnung, behält seine Position in der Notiz
- Zwei gleichzeitige Uploads mit demselben Dateinamen überschreiben sich nicht mehr
- Ein fehlgeschlagener Archivimport löscht keine bestehenden unverknüpften Anhänge mehr
- Webhook-Empfänger, die ohne Inhalt antworten, gelten als zugestellt

**Vor dem Update**

- Wenn du dich per SSO anmeldest: SSO funktioniert nur noch unter der Adresse, die unter Aktionen › Set Instance URL gewählt ist. Öffne Memos dort zur Anmeldung und stelle sicher, dass die Weiterleitungs-URI bei deinem Identitätsanbieter diese Adresse gefolgt von \`/auth/callback\` ist.

**Nach dem Update**

- Administratoren sollten Einstellungen › KI öffnen. Eine Transkriptionseinstellung ohne Modell ist deaktiviert: Anbieter und Modell erneut wählen. Anbieter folgen keinen Weiterleitungen mehr, daher die endgültige URL jedes Endpunkts eintragen.
- Links auf die Entdecken-Seite eines Space funktionieren nicht mehr; öffne den Space selbst, der jetzt die Notizen aller Mitglieder zeigt.

[Vollständige Versionshinweise](https://github.com/usememos/memos/releases/tag/26.11.3)`,
    pl_PL: `Zaktualizowano Memos do 26.11.3.

**Nowości**

- Sugeruj tagi z AI w edytorze proponuje tagi dla szkicu, preferując te, których już używasz (wymaga dostawcy generowania tekstu)
- Przestrzeń ma jedną wspólną oś czasu z czytelnymi notatkami wszystkich członków
- Kliknij notatkę prawym przyciskiem, aby otworzyć menu jej akcji; kalendarz pokazuje każdą notatkę danego dnia
- Ustawienia › AI nazywa każdego dostawcę według jego usługi, sprawdza połączenie przy zapisie i oferuje obszar testowy

**Poprawki**

- Edycja lub zmiana nazwy załącznika, np. zapisanego rysunku, zachowuje jego miejsce w notatce
- Dwa jednoczesne przesłania plików o tej samej nazwie nie nadpisują się już nawzajem
- Nieudany import archiwum nie usuwa już istniejących niepowiązanych załączników
- Odbiorcy webhooków odpowiadający bez treści są uznawani za doręczonych

**Przed aktualizacją**

- Jeśli logujesz się przez SSO: SSO działa teraz tylko pod adresem wybranym w Akcje › Set Instance URL. Otwórz tam Memos, aby się zalogować, i upewnij się, że URI przekierowania u dostawcy tożsamości to ten adres z dopiskiem \`/auth/callback\`.

**Po aktualizacji**

- Administratorzy powinni otworzyć Ustawienia › AI. Ustawienie transkrypcji bez modelu jest wyłączone: wybierz ponownie dostawcę i model. Dostawcy nie podążają już za przekierowaniami, więc wpisz końcowy URL każdego punktu końcowego.
- Linki do strony Eksploruj w Przestrzeni przestały działać; otwórz samą Przestrzeń, która teraz pokazuje notatki wszystkich członków.

[Pełne informacje o wydaniu](https://github.com/usememos/memos/releases/tag/26.11.3)`,
    fr_FR: `Memos mis à jour vers 26.11.3.

**Nouveautés**

- Suggérer des étiquettes avec l'IA dans l'éditeur propose des étiquettes pour un brouillon, en privilégiant celles que vous utilisez déjà (nécessite un fournisseur de génération de texte)
- Un Espace a une seule chronologie partagée avec les mémos lisibles de tous ses membres
- Un clic droit sur un mémo ouvre son menu d'actions ; le calendrier liste chaque mémo d'une journée
- Paramètres › IA nomme chaque fournisseur d'après son service, vérifie la connexion à l'enregistrement et propose un espace d'essai

**Corrections**

- Modifier ou renommer une pièce jointe, comme un dessin enregistré, conserve sa place dans le mémo
- Deux envois simultanés portant le même nom de fichier ne s'écrasent plus
- Un import d'archive échoué ne supprime plus les pièces jointes non liées existantes
- Les récepteurs de webhooks qui répondent sans corps sont comptés comme livrés

**Avant la mise à jour**

- Si vous vous connectez par SSO : le SSO ne fonctionne plus qu'à l'adresse choisie dans Actions › Set Instance URL. Ouvrez Memos à cette adresse pour vous connecter, et vérifiez que l'URI de redirection chez votre fournisseur d'identité est cette adresse suivie de \`/auth/callback\`.

**Après la mise à jour**

- Les administrateurs doivent ouvrir Paramètres › IA. Un réglage de transcription sans modèle est désactivé : choisissez à nouveau son fournisseur et son modèle. Les fournisseurs ne suivent plus les redirections, saisissez donc l'URL finale de chaque point de terminaison.
- Les liens vers la page Explorer d'un Espace ne fonctionnent plus ; ouvrez l'Espace lui-même, qui affiche désormais les mémos de tous ses membres.

[Notes de version complètes](https://github.com/usememos/memos/releases/tag/26.11.3)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
