const einsatzDaten = {
    // === NOTFÄLLE ===
    "Standby": {
        kuerzel: ["sd"], stichwort: "System auf Standby", einheiten: "",
        dispatch_aktion: "",
        vor_ort_aktion: "", deeskalation: "Standby",
        fragen: ["", "", ""],
        ausfuehrlich: "System Auf Standby /SD ℹ️"
    },
    "verkehrsunfall": {
        kuerzel: ["vu"], stichwort: "Verkehrsunfall (Einfach)", einheiten: "Peter 15/XX (1x FuStw)",
        dispatch_aktion: "Unfallort sichern, Datenaufnahme einleiten. Ggf. Verkehrsbehinderung prüfen.",
        vor_ort_aktion: "Eigene Absicherung beachten, Personalien und Versicherungskarten austauschen lassen.", deeskalation: "Neutral vermitteln.",
        fragen: ["Gibt es Verletzte?", "Blockieren die Fahrzeuge die Fahrbahn?", "Fließen Betriebsstoffe aus?"],
        ausfuehrlich: "Bei Bagatellschäden die Beteiligten auffordern, die Fahrbahn zügig freizumachen. Fotografische Dokumentation sichern."
    },
    "verkehrsunfall mit personenschaden": {
        kuerzel: ["vu p", "vup"], stichwort: "Verkehrsunfall mit Personenschaden", einheiten: "Peter (2x FuStw), RTW, Notarzt, VUD (Verkehrsunfalldienst)",
        dispatch_aktion: "Parallelalarmierung Rettungsdienst. VUD anfordern. Lagedienst informieren.",
        vor_ort_aktion: "Erste Hilfe leisten. Unfallstelle großräumig absperren. Zeugen isolieren.", deeskalation: "Geschockte Personen betreuen.",
        fragen: ["Wie viele Personen sind verletzt?", "Besteht Lebensgefahr?", "Ist die Unfallstelle auf einer Schnellstraße?"],
        ausfuehrlich: "Absoluter Vorrang für die Rettungskette. Spurenschutz einleiten. Dashcam-Aufnahmen sicherstellen."
    },
    "verkehrsunfall mit eingeklemmter person": {
        kuerzel: ["vu ekl", "vuekl"], stichwort: "Verkehrsunfall mit eingeklemmter Person", einheiten: "Peter (2x FuStw), Feuerwehr (Rüstzug), Notarzt, RTW",
        dispatch_aktion: "Feuerwehr (Technische Hilfeleistung) sofort mitalarmieren. Vollsperrung veranlassen.",
        vor_ort_aktion: "Brandschutz sicherstellen, Absperrring ziehen. Rettungskräfte einweisen.", deeskalation: "Patienten verbal stabilisieren.",
        fragen: ["Wie viele Personen sind eingeklemmt?", "Raucht oder brennt das Fahrzeug?", "Ist der Zugriff blockiert?"],
        ausfuehrlich: "Patientengerechte Rettung in Absprache mit dem Notarzt. Technische Hilfeleistung durch Feuerwehr forcieren."
    },
    "verkehrsunfall mit gefahrgut": {
        kuerzel: ["gefahrgut", "vu gefahrgut"], stichwort: "Verkehrsunfall mit Gefahrgut", einheiten: "Peter, Feuerwehr (Umweltschutz/Löschzug), Gefahrgutbeauftragter",
        dispatch_aktion: "Windrichtung prüfen! Anfahrtswege für Kräfte optimieren. Absperrbereich mind. 50m ausrufen.",
        vor_ort_aktion: "Extremer Sicherheitsabstand! Keine Dämpfe einatmen. Bereich evakuieren.", deeskalation: "Panik im Nahbereich stoppen.",
        fragen: ["Welche UN-Nummer/Orangefarbene Tafel ist sichtbar?", "Tritt Flüssigkeit oder Gas aus?", "Gibt es Verletzte?"],
        ausfuehrlich: "Kräfte nur aus Richtung des Windes (Rückenwind) anrücken lassen. Kanalisation schützen."
    },
    "verkehrsunfallflucht": {
        kuerzel: ["vuf", "unfallflucht"], stichwort: "Verkehrsunfallflucht", einheiten: "Peter (1x FuStw), Fahndungskräfte",
        dispatch_aktion: "Sofortige Nahbereichsfahndung nach dem flüchtigen Fahrzeug einleiten.",
        vor_ort_aktion: "Fremdlackspuren sichern, Trümmerteile dokumentieren, Zeugen vernehmen.", deeskalation: "Geschädigten beruhigen.",
        fragen: ["Kennzeichen, Typ oder Farbe des flüchtigen Fahrzeugs bekannt?", "Fluchtrichtung?", "Gibt es Zeugen?"],
        ausfuehrlich: "Strafverfahren nach § 142 StGB einleiten. Schadensbild am geschädigten Objekt exakt vermessen."
    },
    "brand": {
        kuerzel: ["brand", "bma", "feuer"], stichwort: "Brandeinsatz / Feuer / BMA", einheiten: "Feuerwehr (Löschzug), Peter (2x FuStw zur Absperrung)",
        dispatch_aktion: "Löschzug der Feuerwehr alarmieren. Straßensperren vorbereiten.",
        vor_ort_aktion: "Anfahrtswege für Feuerwehr freihalten. Evakuierung angrenzender Gebäude prüfen.", deeskalation: "Schaulustige zurückweisen.",
        fragen: ["Was brennt genau (Wohnung, Keller, Freifläche)?", "Befinden sich noch Menschen im Gebäude?", "Gibt es starke Rauchentwicklung?"],
        ausfuehrlich: "Polizeikräfte halten sich außerhalb des Brandrauchs auf (Eigenschutz vor Rauchgasvergiftung!)."
    },
    "explosion": {
        kuerzel: ["explosion"], stichwort: "Explosionsereignis", einheiten: "Massenaufgebot Peter, Feuerwehr, Rettungsdienst, Kriminalpolizei",
        dispatch_aktion: "Großalarm auslösen. Kampfmittelräumdienst/Gasversorger verständigen.",
        vor_ort_aktion: "Großräumige Absperrung. Einsturzgefahr beachten. Erste Hilfe im sicheren Bereich.", deeskalation: "Strikte Anweisungen geben.",
        fragen: ["Was hat die Explosion verursacht?", "Gibt es Einstürze oder Folgebrände?", "Anzahl der Verletzten?"],
        ausfuehrlich: "Nachfolge-Explosionen einplanen. Tatort für Kriminaltechnik einfrieren (Spurensicherung)."
    },
    "gasgeruch": {
        kuerzel: ["gas", "gasgeruch"], stichwort: "Gasgeruch in/an Objekt", einheiten: "Feuerwehr, Gasversorger, Peter (1x FuStw)",
        dispatch_aktion: "Feuerwehr alarmieren. Melder anweisen: Keine Funken, keine Schalter, Fenster öffnen!",
        vor_ort_aktion: "Absperrung aufbauen. Zündquellen im Umkreis unterbinden (Motoren ausschalten).", deeskalation: "Gebäude zügig räumen.",
        fragen: ["Riecht es im Haus oder auf der Straße?", "Sind Handwerker aktiv?", "Zischgeräusche hörbar?"],
        ausfuehrlich: "Polizeifahrzeuge nicht direkt vor dem Objekt parken (Auspuffhitze/Zündquelle)."
    },
    "rauchentwicklung": {
        kuerzel: ["rauch", "rauchentwicklung"], stichwort: "Unklare Rauchentwicklung", einheiten: "Feuerwehr, Peter (1x FuStw)",
        dispatch_aktion: "Feuerwehr zur Erkundung entsenden.",
        vor_ort_aktion: "Sichtprüfung der Örtlichkeit, Brandherd lokalisieren ohne Eigengefährdung.", deeskalation: "Anwohner informieren.",
        fragen: ["Welche Farbe hat der Rauch (Weiß, Schwarz, Gelb)?", "Riecht es nach Kunststoff oder Holz?", "Wo tritt der Rauch aus?"],
        ausfuehrlich: "Häufige Ursache: Angebranntes Essen oder technischer Defekt. Bei schwarzem Rauch sofort auf Brand hochstufen."
    },
    "hilfeleistung": {
        kuerzel: ["th", "hilfeleistung"], stichwort: "Technische Hilfeleistung", einheiten: "Feuerwehr / THW, Peter (nach Bedarf)",
        dispatch_aktion: "Zuständigkeit prüfen. Technische Komponenten koordinieren.",
        vor_ort_aktion: "Unterstützung und Absicherung der technischen Maßnahmen vor Ort.", deeskalation: "Sachlich bleiben.",
        fragen: ["Welche Gefahr droht (Baum auf Straße, Überflutung)?", "Werden Spezialgeräte benötigt?"],
        ausfuehrlich: "Absicherung steht im Vordergrund. Gefahrenbereich für die Bevölkerung absperren."
    },
    "wasserrettung": {
        kuerzel: ["wasser", "wasserrettung"], stichwort: "Wasserrettungseinsatz", einheiten: "Feuerwehr (Taucher/Boot), DLRG, Peter, Rettungshubschrauber",
        dispatch_aktion: "Sämtliche aquatische Rettungsmittel alarmieren. Strömungsdaten einholen.",
        vor_ort_aktion: "Sichtkontakt zur Person halten. Rettungskräfte an Uferkante einweisen.", deeskalation: "Ruhe bewahren.",
        fragen: ["Handelt es sich um ein fließendes Gewässer?", "Sichtkontakt vorhanden?", "Wie viele Personen betroffen?"],
        ausfuehrlich: "Präzise Standortangaben (Flusskilometer, Brückennummer) sind für die Anfahrt der Boote entscheidend."
    },
    "person im wasser": {
        kuerzel: ["piw"], stichwort: "Person im Wasser", einheiten: "Feuerwehr (Wasserrettung), Peter (Wasserschutzpolizei / Streife)",
        dispatch_aktion: "Höchste Eile! Rettungsringe vor Ort lokalisieren lassen.",
        vor_ort_aktion: "Sichtkontakt halten! Ggf. Rettungsmittel zuwerfen. Nicht selbst ungesichert reinspringen.", deeskalation: "Zurufen, dass Hilfe kommt.",
        fragen: ["Treibt die Person oder schwimmt sie?", "Ist die Person bei Bewusstsein?", "Welche Kleidung wird getragen?"],
        ausfuehrlich: "Unterkühlung tritt rasch ein. Nach Rettung sofort dem Rettungsdienst zur Intensivmedizin übergeben."
    },
    "person in notlage": {
        kuerzel: ["pin"], stichwort: "Person in Notlage", einheiten: "Feuerwehr, RTW, Peter 15/XX",
        dispatch_aktion: "Lage verifizieren, notwendige Rettungskräfte steuern.",
        vor_ort_aktion: "Erkundung und Erstmaßnahme zur Beseitigung der akuten Notlage.", deeskalation: "Beruhigend auf Betroffene einwirken.",
        fragen: ["Welche Art von Notlage liegt vor?", "Besteht akute Lebensgefahr?"],
        ausfuehrlich: "Flexibles Taktikschema je nach Einzelfall (z.B. Person im Aufzug, verschlossene Tür bei hilfloser Person)."
    },
    "bewusstlose person": {
        kuerzel: ["bewusstlos", "bp"], stichwort: "Bewusstlose Person", einheiten: "RTW, Notarzt, Peter (1x FuStw zur Unterstützung)",
        dispatch_aktion: "Sofortige RD-Alarmierung. Erste-Hilfe-Anleitung (Atemprüfung) am Telefon.",
        vor_ort_aktion: "Vitalfunktionen prüfen. Bei Atmung: Stabile Seitenlage. Keine Atmung: Reanimation.", deeskalation: "Angehörige abschirmen.",
        fragen: ["Atmet die Person noch normal?", "Gibt es Hinweise auf Fremdeinwirkung oder Sturz?", "Liegen Medikamente/Drogen in der Nähe?"],
        ausfuehrlich: "Sicherung von Beweismitteln falls Verdacht auf Intoxikation oder Gewaltdelikt besteht."
    },
    "reanimation": {
        kuerzel: ["rea"], stichwort: "Akute Reanimation (Herz-Kreislauf-Stillstand)", einheiten: "RTW, Notarzt, Peter (First Responder falls am nächsten)",
        dispatch_aktion: "Telefonreanimation (T-CPR) sofort starten und halten bis Kräfte eintreffen!",
        vor_ort_aktion: "Unverzügliche Herzdruckmassage (Frequenz 100-120/Min). AED falls vorhanden einsetzen.", deeskalation: "Zuschauer weisen.",
        fragen: ["Wann ist die Person kollabiert?", "Wird bereits gedrückt?", "Ist ein Defibrillator (AED) greifbar?"],
        ausfuehrlich: "Jede Sekunde zählt. Polizeikräfte unterstützen den Rettungsdienst physisch bei der Herzdruckmassage."
    },
    "suizid": {
        kuerzel: ["suizid"], stichwort: "Suizidereignis (Vollzogen / Laufend)", einheiten: "Peter, Kriminalpolizei, Notarzt, RTW",
        dispatch_aktion: "Kräfte heranführen. Kriminaldauerdienst verständigen.",
        vor_ort_aktion: "Tod feststellen lassen durch Arzt. Absperrung. Spurenschutz. Sicherung von Abschiedsbriefen.", deeskalation: "Pietätvoll agieren.",
        fragen: ["Ist die Person sicher verstorben?", "Liegt Fremdverschulden im Bereich des Möglichen?"],
        ausfuehrlich: "Behandlung als ungeklärter Todesfall bis zur Freigabe durch die Rechtsmedizin/Kripo."
    },
    "suizidandrohung": {
        kuerzel: ["suizidandrohung"], stichwort: "Akute Suizidandrohung", einheiten: "Peter, Verhandlungsgruppe (VG), SEK (bei Bewaffnung), RTW",
        dispatch_aktion: "Ort lokalisieren (Handyortung anstoßen). Spezialeinheiten voralarmieren.",
        vor_ort_aktion: "Kontaktaufnahme aus sicherer Distanz. Keine Provokation. Zeit gewinnen.", deeskalation: "Empathische, deeskalierende Gesprächsführung.",
        fragen: ["Führt die Person eine Waffe oder steht sie an einer Absturzkante?", "Gibt es psychische Vorerkrankungen?"],
        ausfuehrlich: "Eigensicherung geht vor. Barrikadierte Lagen erfordern die Hinzuziehung der Verhandlungsgruppe."
    },
    "absturz": {
        kuerzel: ["absturz"], stichwort: "Personenabsturz (Höhe/Tiefe)", einheiten: "Feuerwehr (Höhenrettung), RTW, Notarzt, Peter",
        dispatch_aktion: "Höhenretter der Feuerwehr mitalarmieren. Rettungsdienst priorisieren.",
        vor_ort_aktion: "Unglücksstelle absperren. Zeugen des Vorfalls sichern (Unfall oder Fremdeinwirkung?).", deeskalation: "Gaffer blockieren.",
        fragen: ["Aus welcher Höhe ist die Person gestürzt?", "Ist die Person ansprechbar?", "Besteht noch Absturzgefahr für Retter?"],
        ausfuehrlich: "Dokumentation von Sicherheitsvorkehrungen (z.B. bei Baustellenunfällen) für das Gewerbeaufsichtsamt."
    },
    "eingeklemmte person": {
        kuerzel: ["eingeklemmt"], stichwort: "Person eingeklemmt (Maschine / Objekt)", einheiten: "Feuerwehr (Technische Rettung), RTW, Notarzt, Peter",
        dispatch_aktion: "Feuerwehr mit technischem Gerät anfordern. Notarzt disponieren.",
        vor_ort_aktion: "Sicherung des Bereiches, Dokumentation der Maschine/Unglücksursache.", deeskalation: "Beruhigung des Opfers.",
        fragen: ["Worein ist die Person eingeklemmt?", "Liegen starke Blutungen vor?", "Ist die Maschine abgeschaltet?"],
        ausfuehrlich: "Abschaltung aller Energiezufuhrleitungen (Strom/Hydraulik) vor Ort sofort veranlassen."
    },

    // === STRAFTATEN ===
    "einbruch": {
        kuerzel: ["einbruch"], stichwort: "Einbruchdiebstahl (Allgemein)", einheiten: "Peter 15/XX",
        dispatch_aktion: "Täter noch vor Ort? Wenn ja, verdeckte Anfahrt. Wenn nein, Streife zur Aufnahme.",
        vor_ort_aktion: "Spurenschutz am Einstiegsort. Bestandsaufnahme des Diebesgutes.", deeskalation: "Sachlich bleiben.",
        fragen: ["Wann wurde die Tat begangen?", "Gibt es Videoüberwachung?"],
        ausfuehrlich: "Tatort sichern. Keine Berührung von Griffen oder Fenstern vor Eintreffen der Spurensicherung."
    },
    "wohnungseinbruch": {
        kuerzel: ["we", "wed"], stichwort: "Wohnungseinbruchdiebstahl", einheiten: "Peter (2x FuStw), Kriminalpolizei (Spurensicherung)",
        dispatch_aktion: "Priorisierte Zuweisung. Bei akuter Tat: Umstellung des Objekts.",
        vor_ort_aktion: "Einstiegsweg dokumentieren. Geschädigte psychologisch betreuen. Nachbarschaftsbefragung.", deeskalation: "Sensibler Umgang mit Opfern.",
        fragen: ["Sind die Täter eventuell noch im Haus?", "Was wurde entwendet?", "Gibt es Täterbeschreibungen?"],
        ausfuehrlich: "Schwerpunktdelikt. Akribische Spurensicherung (DNA/Daktyloskopie) obligatorisch."
    },
    "geschäftseinbruch": {
        kuerzel: ["ge"], stichwort: "Geschäftseinbruch", einheiten: "Peter, Kriminalpolizei",
        dispatch_aktion: "Eigentümer/Gewerbebetreibenden ermitteln und hinzurufen.",
        vor_ort_aktion: "Sicherung von Überwachungskameras. Aufnahme von Hebelspuren an Geschäftstüren.", deeskalation: "Professionelle Distanz.",
        fragen: ["Wurde der Alarm ausgelöst?", "Gibt es Tresor- oder Kassenaufbrüche?"],
        ausfuehrlich: "Prüfen, ob bandenmäßiges Vorgehen vorliegt. Abgleich mit bestehenden Deliktsserien."
    },
    "diebstahl": {
        kuerzel: ["diebstahl"], stichwort: "Einfacher Diebstahl", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Vorgang anlegen, Streife zur Protokollierung entsenden.",
        vor_ort_aktion: "Personalienfeststellung, Sachverhaltsaufnahme, Schadenswert beziffern.", deeskalation: "Ruhig moderieren.",
        fragen: ["Wer ist verdächtig?", "Wert des Diebesguts?"],
        ausfuehrlich: "Strafanzeige nach § 242 StGB fertigen. Bei geringwertigen Sachen Strafantrag erforderlich."
    },
    "ladendiebstahl": {
        kuerzel: ["ld"], stichwort: "Ladendiebstahl", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Daten des Ladendetektivs notieren. Bereithalten der Personalien des Täters.",
        vor_ort_aktion: "Identitätsfeststellung des Beschuldigten. Überprüfung auf Vorstrafen/Haftbefehle.", deeskalation: "Aggressionen unterbinden.",
        fragen: ["Ist the Täter kooperativ oder festgehalten?", "Liegt ein Ausweisdokument vor?"],
        ausfuehrlich: "Bei festgestellter Identität und ohne Aggression kann die Entlassung vor Ort nach Platzverweis erfolgen."
    },
    "kfz-diebstahl": {
        kuerzel: ["kfz"], stichwort: "Kraftfahrzeugdiebstahl", einheiten: "Peter, Fahndungskräfte",
        dispatch_aktion: "Sofortige Sachfahndung im INPOL-System anstoßen (Fahrzeugdaten/Kennzeichen).",
        vor_ort_aktion: "Tatortaufnahme (Glasrückstände von Scheibenbruch?). Diebstahlsanzeige erstellen.", deeskalation: "Bestimmt auftreten.",
        fragen: ["Kennzeichen und Fahrgestellnummer?", "Wann und wo exakt abgestellt?"],
        ausfuehrlich: "Schnittstellen zu Grenzdienststellen informieren, falls Tat zeitnah geschah."
    },
    "fahrraddiebstahl": {
        kuerzel: ["fahrrad"], stichwort: "Fahrraddiebstahl", einheiten: "Peter (1x FuStw oder Online-Anzeige)",
        dispatch_aktion: "Rahmennummer erfragen, Fahndungsnotierung veranlassen.",
        vor_ort_aktion: "Aufnahme vor Ort nur bei Hinweisen auf Täter oder zurückgelassenem Werkzeug (Bolzenschneider).", deeskalation: "Sachlich.",
        fragen: ["Liegt die Rahmennummer vor?", "War das Rad angeschlossen?"],
        ausfuehrlich: "Rahmennummern in POLAS/INPOL zur Sachfahndung ausschreiben."
    },
    "raub": {
        kuerzel: ["raub"], stichwort: "Raubdelikt", einheiten: "Peter (Mehrere Kräfte), Kriminalpolizei",
        dispatch_aktion: "Bereichsfahndung (Ringfahndung) sofort auslösen. Täterbeschreibungen per Funk durchgeben.",
        vor_ort_aktion: "Opferbetreuung (Schock). Tatort einfrieren. Zeugenbefragung.", deeskalation: "Opfer beruhigen.",
        fragen: ["Wurden Waffen eingesetzt?", "Welche Beute wurde gemacht?", "Fluchtrichtung und -mittel?"],
        ausfuehrlich: "Verbrechenstatbestand (§ 249 StGB). Jede Minute zählt für die Nahbereichsfahndung."
    },
    "schwerer raub": {
        kuerzel: ["schwerer raub"], stichwort: "Schwerer Raub (Bewaffnet / Gruppe)", einheiten: "Massenaufgebot Peter, Kripo, RTW für Opfer",
        dispatch_aktion: "Schwerer Raubdelikt. Ringfahndung großräumig aufziehen. Lagedienst involvieren.",
        vor_ort_aktion: "Eigensicherung! Täter könnten schussbereit sein. Tatort absperren, Spuren sichern.", deeskalation: "Lage stabilisieren.",
        fragen: ["Welche Schusswaffe/Waffe wurde genutzt?", "Gibt es Verletzte durch Schuss/Schlag?", "Wie viele Täter?"],
        ausfuehrlich: "Einsatz von Schusswaffen durch Täter einkalkulieren. Taktischer Zugriff hat Vorrang."
    },
    "körperverletzung": {
        kuerzel: ["kv"], stichwort: "Körperverletzung (Einfache)", einheiten: "Peter (1x-2x FuStw), Ggf. RTW",
        dispatch_aktion: "Streife entsenden, Sanitäter bei Bedarf nachfordern.",
        vor_ort_aktion: "Parteien trennen. Identitätsfeststellung. Verletzungen fotografisch dokumentieren.", deeskalation: "Aggressoren räumlich trennen.",
        fragen: ["Sind die Beteiligten noch aggressiv?", "Werden medizinische Kräfte benötigt?"],
        ausfuehrlich: "Strafanzeige nach § 223 StGB. Platzverweise konsequent durchsetzen."
    },
    "gefährliche körperverletzung": {
        kuerzel: ["gkv"], stichwort: "Gefährliche Körperverletzung", einheiten: "Peter (Mind. 2x FuStw), RTW",
        dispatch_aktion: "Erhöhte Priorität. Rettungsdienst mitalarmieren.",
        vor_ort_aktion: "Robustes Einschreiten. Tatwerkzeuge beschlagnahmen. Fesselung von Aggressoren.", deeskalation: "Klare, laute Befehle.",
        fragen: ["Mit welchem Gegenstand wurde geschlagen?", "Handeln die Täter gemeinschaftlich?", "Ist das Opfer schwer verletzt?"],
        ausfuehrlich: "Offizialdelikt nach § 224 StGB. Kleidung mit Blutanhaftungen als Beweismittel beschlagnahmen."
    },
    "bedrohung": {
        kuerzel: ["bedrohung"], stichwort: "Akute Bedrohung", einheiten: "Peter 15/XX",
        dispatch_aktion: "Gefahrenprognose erstellen. Ernsthaftigkeit prüfen.",
        vor_ort_aktion: "Gefährder isolieren, Gefährdetenansprache halten. Ggf. Durchsuchung nach Waffen.", deeskalation: "Bestimmt und deeskalierend auftreten.",
        fragen: ["Werden Waffen verbal angedroht?", "Gibt es eine Vorgeschichte?"],
        ausfuehrlich: "Bei Erfüllung des § 241 StGB Strafverfahren einleiten und Annäherungsverbot aussprechen."
    },
    "nötigung": {
        kuerzel: ["nötigung"], stichwort: "Nötigungsdelikt", einheiten: "Peter 15/XX",
        dispatch_aktion: "Beweislage abfragen (Zeugen, Dashcam).",
        vor_ort_aktion: "Sachverhaltsaufnahme, Belehrung des Beschuldigten.", deeskalation: "Sachliche Moderation.",
        fragen: ["Wie äußerte sich die Nötigung?", "Gibt es unabhängige Zeugen?"],
        ausfuehrlich: "Besonders im Straßenverkehr (§ 240 StGB). Exakte Protokollierung des Tatablaufs zwingend."
    },
    "erpressung": {
        kuerzel: ["erpressung"], stichwort: "Erpressung", einheiten: "Peter, Kriminalpolizei",
        dispatch_aktion: "Verdeckte Ermittlungsschritte prüfen. Keine überstürzten Aktionen.",
        vor_ort_aktion: "Beweissicherung (Nachrichten, Briefe). Opfer abschirmen.", deeskalation: "Opfer beruhigen.",
        fragen: ["Liegen Geldforderungen oder sensible Daten vor?", "Gibt es Übergabefristen?"],
        ausfuehrlich: "Übergabeorte niemals unvorbereitet anfahren. Einbindung von Spezialisten der Kripo."
    },
    "sexualdelikt": {
        kuerzel: ["sexualdelikt"], stichwort: "Sexualdelikt", einheiten: "Peter, LKA (Spezialdienststelle), RTW",
        dispatch_aktion: "Höchste Sensibilität! Weibliche Beamte falls möglich einsetzen. Keine Details über Funk.",
        vor_ort_aktion: "Opferschutz steht an erster Stelle. Medizinische Spurensicherung veranlassen.", deeskalation: "Traumata beachten, behutsam vorgehen.",
        fragen: ["Ist das Opfer in Sicherheit?", "Täter bekannt oder flüchtig?", "Medizinische Versorgung akut nötig?"],
        ausfuehrlich: "Opfer anweisen, sich vor der Untersuchung nicht zu waschen (Spurenerhalt)."
    },
    "vergewaltigung": {
        kuerzel: ["vergewaltigung"], stichwort: "Vergewaltigungsdelikt", einheiten: "Peter, LKA, RTW",
        dispatch_aktion: "Höchste Priorität. Sofortige verdeckte oder sensible Zuführung von Kräften.",
        vor_ort_aktion: "Opfer abschirmen, Zeugen sichern, LKA-Fachdienst hinzurufen.", deeskalation: "Extrem behutsame Betreuung.",
        fragen: ["Besteht noch akute Gefahr?", "Ist der Tatort gesichert?"],
        ausfuehrlich: "Sicherung aller biologischen Spuren hat höchste Priorität für das Strafverfahren."
    },
    "tötungsdelikt": {
        kuerzel: ["tötungsdelikt"], stichwort: "Tötungsdelikt", einheiten: "Massenaufgebot Peter, Mordkommission (LKA), Rechtsmedizin, RTW",
        dispatch_aktion: "Sofortige Alarmierung der Mordkommission. Tatort weiträumig sperren.",
        vor_ort_aktion: "Absoluter Spurenschutz (Tatort einfrieren!). Niemand betritt den Innenring. Zeugen festhalten.", deeskalation: "Umfeld abschirmen.",
        fragen: ["Steht der Tod zweifelsfrei fest?", "Ist der Täter vor Ort oder flüchtig?", "Tatwerkzeug gesichtet?"],
        ausfuehrlich: "Erstellung eines Trampelpfades für Rettungskräfte zur Vermeidung von Spurenvernichtung."
    },
    "mord": {
        kuerzel: ["mord"], stichwort: "Mordverdacht", einheiten: "Mordkommission, LKA, Peter-Kräfte",
        dispatch_aktion: "Großalarm für LKA und Kriminaltechnik. Bereich einfrieren.",
        vor_ort_aktion: "Weiträumige Absperrung, Sicherung digitaler und physischer Spuren.", deeskalation: "Professionelle Distanz.",
        fragen: ["Hinweise auf Mordmerkmale (Heimtücke etc.)?", "Fluchtmittel des Täters?"],
        ausfuehrlich: "Strafverfahren nach § 211 StGB. Absolute Hoheit liegt beim LKA."
    },
    "totschlag": {
        kuerzel: ["totschlag"], stichwort: "Totschlag", einheiten: "LKA, Kriminalpolizei, Streifenwagen",
        dispatch_aktion: "Tatort sichern, Zeugen getrennt vernehmen.",
        vor_ort_aktion: "Spurenschutz oberste Priorität. Keine Gegenstände bewegen.", deeskalation: "Gefahrenbereich räumen.",
        fragen: ["Gibt es Anzeichen für eine vorangegangene Schlägerei?"],
        ausfuehrlich: "Ermittlungen nach § 212 StGB. Hinzuziehung der Rechtsmedizin zwingend."
    },
    "sachbeschädigung": {
        kuerzel: ["sachbeschädigung"], stichwort: "Sachbeschädigung", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Streife zur Schadensaufnahme entsenden.",
        vor_ort_aktion: "Schadensbild fotografieren, Tatausführung dokumentieren.", deeskalation: "Pragmatisch.",
        fragen: ["Wer hat den Schaden verursacht?", "Ist der Täter noch vor Ort?"],
        ausfuehrlich: "Strafanzeige nach § 303 StGB. Ggf. zivilrechtliche Ansprüche für den Geschädigten erläutern."
    },
    "brandstiftung": {
        kuerzel: ["brandstiftung"], stichwort: "Brandstiftung", einheiten: "Feuerwehr, Peter, Kriminalpolizei (Brandermittler)",
        dispatch_aktion: "Nach Löscharbeiten den Tatort zwecks Brandursachenermittlung beschlagnahmen.",
        vor_ort_aktion: "Sicherung von Brandbeschleuniger-Behältnissen im Umkreis. Zeugenbefragung.", deeskalation: "Bereich absperren.",
        fragen: ["Gibt es Hinweise auf Vorsatz (mehrere Brandherde)?", "Wurden verdächtige Personen gesehen?"],
        ausfuehrlich: "Schweres Delikt (§ 306 StGB). Brandbeschleuniger-Spuren sind flüchtig, daher zügige Sicherung."
    },
    "hausfriedensbruch": {
        kuerzel: ["hfb", "hausfriedensbruch"], stichwort: "Hausfriedensbruch", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Berechtigung des Melders (Hausrecht) prüfen.",
        vor_ort_aktion: "Aufforderung an den Störer, das Objekt zu verlassen. Bei Weigerung: Zwang (Platzverweis).", deeskalation: "Konsequent, aber ruhig.",
        fragen: ["Liegt ein ausdrückliches Hausverbot vor?", "Ist der Störer aggressiv?"],
        ausfuehrlich: "Strafantrag des Hausrechtsinhabers ist für die Verfolgung nach § 123 StGB zwingend notwendig."
    },
    "betrug": {
        kuerzel: ["betrug"], stichwort: "Betrugsdelikt", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Beweismaterial (Dokumente, Verträge) sichern lassen.",
        vor_ort_aktion: "Sachverhaltsaufnahme, Dokumentensicherung, Belehrung.", deeskalation: "Sachliche Aufklärung.",
        fragen: ["Welche Schadenssumme liegt vor?", "Wie ging der Betrüger vor?"],
        ausfuehrlich: "Strafanzeige nach § 263 StGB. Sichern von Transaktionsdaten oder Chatverläufen."
    },
    "unterschlagung": {
        kuerzel: ["unterschlagung"], stichwort: "Unterschlagung", einheiten: "Peter 15/XX",
        dispatch_aktion: "Eigentumsverhältnisse vorab prüfen.",
        vor_ort_aktion: "Personalienfeststellung, Protokollierung des rechtmäßigen Besitzers.", deeskalation: "Ruhig moderieren.",
        fragen: ["Um welchen Gegenstand handelt es sich?", "Besteht ein Miet-/Leihvertrag?"],
        ausfuehrlich: "Abgrenzung zum Diebstahl prüfen (§ 246 StGB). Sachverhalt detailliert niederschreiben."
    },
    "urkundenfälschung": {
        kuerzel: ["urkundenfälschung"], stichwort: "Urkundenfälschung", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Gefälschtes Dokument sicherstellen lassen.",
        vor_ort_aktion: "Beschlagnahme des Dokuments, Identitätsfeststellung des Vorzeigers.", deeskalation: "Bestimmt auftreten.",
        fragen: ["Welches Dokument wurde manipuliert?", "Ist der Aussteller bekannt?"],
        ausfuehrlich: "Verstoß gegen § 267 StGB. Dokumente knickfrei in Beweismitteltüten verwahren."
    },
    "falschgeld": {
        kuerzel: ["falschgeld", "blüten"], stichwort: "Falschgeldumlauf", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Falschgeld einbehalten und Übergabeprotokoll vorbereiten.",
        vor_ort_aktion: "Sicherstellung der Noten/Münzen. Befragung des Einreichers als Zeuge oder Beschuldigter.", deeskalation: "Professionelle Distanz.",
        fragen: ["Woher stammt das Geld?", "Gibt es eine Täterbeschreibung des Herausgebers?"],
        ausfuehrlich: "Geldfälschung ist gem. § 146 StGB ein Verbrechen. Keine Weitergabe der Blüten erlauben."
    },
    "waffenverstoß": {
        kuerzel: ["waffenverstoß"], stichwort: "Waffenverstoß", einheiten: "Peter (Mind. 2x FuStw)",
        dispatch_aktion: "Eigensicherung maximieren. Kräfte koordiniert heranführen.",
        vor_ort_aktion: "Durchsuchung nach WaffG, Sicherstellung/Beschlagnahme der Waffen.", deeskalation: "Hände der Personen permanent fixieren.",
        fragen: ["Welche Waffe wird mitgeführt?", "Wird damit gedroht?"],
        ausfuehrlich: "Waffen entladen, sichern und im Protokoll exakt nach Typ und Kaliber katalogisieren."
    },
    "verstoß gegen das betäubungsmittelgesetz": {
        kuerzel: ["btmg"], stichwort: "Verstoß gegen das BtMG", einheiten: "Peter, Diensthundführer (Rauschgift)",
        dispatch_aktion: "Hundeführer mitalarmieren falls größere Mengen vermutet werden.",
        vor_ort_aktion: "Durchsuchung von Personen/Fahrzeugen, Wiegen und Sichern der Substanzen.", deeskalation: "Ruhig, aber konsequent.",
        fragen: ["Welche Substanzen?", "Liegt der Verdacht des Handels vor?"],
        ausfuehrlich: "Exakte Verwiegepflicht. Sicherstellung von szenetypischem Verpackungsmaterial und Bargeld."
    },
    "verstoß gegen das waffengesetz": {
        kuerzel: ["waffg"], stichwort: "Verstoß gegen das Waffengesetz", einheiten: "Peter (2x FuStw)",
        dispatch_aktion: "Erhöhte Aufmerksamkeit. Eigensicherung beachten.",
        vor_ort_aktion: "Sicherstellung verbotener Gegenstände (z.B. Einhandmesser, Schlagringe).", deeskalation: "Klare Anweisungen.",
        fragen: ["Ist die Waffe zugriffsbereit?"],
        ausfuehrlich: "Prüfen, ob ein berechtigtes Interesse oder ein kleiner Waffenschein vorliegt."
    },

    // === GEWALTLAGEN ===
    "Panic": {
        kuerzel: ["Panic / Fahrzeug Notruf"], stichwort: "Panic / Fahrzeug Notruf", einheiten: "Alle Verfugbare Einheiten (FuStw M. 3x), Kripo, usw.",
        dispatch_aktion: "Ausreichend Kräfte Alamieren zur Unterstuzung.",
        vor_ort_aktion: "Eigensicherung Vorort für die Vollzugsbeamten, ALARM: RD", deeskalation: "Eigensicherung und Waffengebrauch in NOTFALL.",
        fragen: ["Was Ist Passiert oder Was Passiert", "Werden Waffen/Gegenstände genutzt?", "Gibt es Verletzte?"],
        ausfuehrlich: "Erst bei ausreichender personeller Stärke der Polizei intervenieren (Eigensicherung)."
    },

    "schlägerei": {
        kuerzel: ["schlägerei"], stichwort: "Schlägerei / Massenschlägerei", einheiten: "Massenaufgebot Peter (Mehrere FuStw), RTW",
        dispatch_aktion: "Ausreichend Kräfte sammeln vor dem Einschreiten! Bereitstellung für RD.",
        vor_ort_aktion: "Konsequentes Trennen der Gruppierungen. Platzverweise. Festnahme von Hauptaggressoren.", deeskalation: "Lautstarke, dominante Ansprache.",
        fragen: ["Wie viele Personen schlagen sich?", "Werden Waffen/Gegenstände genutzt?", "Gibt es Verletzte?"],
        ausfuehrlich: "Erst bei ausreichender personeller Stärke der Polizei intervenieren (Eigensicherung)."
    },
    "häusliche gewalt": {
        kuerzel: ["hg"], stichwort: "Häusliche Gewalt (HG)", einheiten: "Peter (2x FuStw)",
        dispatch_aktion: "Schutz des Opfers hat Vorrang. Erfragen, ob Kinder in der Wohnung sind.",
        vor_ort_aktion: "Parteien sofort in getrennte Räume bringen. Wohnungsverweisung (10 Tage) aussprechen.", deeskalation: "Empathisch mit Opfer, extrem bestimmt mit Täter.",
        fragen: ["Gibt es akute Verletzungen?", "Befinden sich Kinder im Raum?", "Sind Waffen im Haus?"],
        ausfuehrlich: "Konsequentes Ausreizen des Gewaltschutzgesetzes. Strafanzeige von Amts wegen erstatten."
    },
    "streitigkeit": {
        kuerzel: ["streit"], stichwort: "Verbale Streitigkeit", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Kräfte zur Verhinderung einer Eskalation entsenden.",
        vor_ort_aktion: "Schlichtung des Sachverhalts. Personalienfeststellung, Platzverweise erteilen.", deeskalation: "Mediation, beruhigendes Einwirken.",
        fragen: ["Ist die Lage rein verbal?", "Sind Alkohol oder Drogen im Spiel?"],
        ausfuehrlich: "Frühzeitige Deeskalation verhindert die Entstehung von Gewaltdelikten."
    },
    "messerangriff": {
        kuerzel: ["ams"], stichwort: "Messerangriff / Bedrohung mit Messer", einheiten: "Peter (Mehrere FuStw), SEK, Notarzt, RTW",
        dispatch_aktion: "Höchste Eile! Rettungsdienst in Bereitstellung schicken. SEK vorwarnen.",
        vor_ort_aktion: "Extremer Sicherheitsabstand (7-Meter-Regel). Deckung nutzen. Dienstwaffe bereit halten.", deeskalation: "Keine Annäherung! Nur aus sicherer Deckung ansprechen.",
        fragen: ["Wo ist das Messer?", "Wie viele Personen sind attackiert worden?", "Täterbeschreibung?"],
        ausfuehrlich: "Stichwappen sind absolut tödlich. Schusswaffengebrauch zur Abwehr von Lebensgefahr prüfen."
    },
    "schusswaffengebrauch": {
        kuerzel: ["schuss"], stichwort: "Schusswaffengebrauch gegen Personen", einheiten: "Massenaufgebot Peter, SEK, Rettungsdienst",
        dispatch_aktion: "Großlage ausrufen! Sonderkanäle schalten. Taktische Führung aufbauen.",
        vor_ort_aktion: "Eigensicherung Maximum. Bereich weiträumig absperren. Zugriff nur koordiniert.", deeskalation: "Keine Experimente, Deckung halten.",
        fragen: ["Wer schießt?", "Welche Waffe (Lang- oder Kurzwaffe)?", "Wie viele Verletzte?"],
        ausfuehrlich: "Lebensbedrohliche Einsatzlagen (LEbV). Täterbekämpfung hat Vorrang vor Erstversorgung."
    },
    "amoklage": {
        kuerzel: ["amok"], stichwort: "Lebensbedrohliche Einsatzlage / Amoklauf", einheiten: "Alle verfügbaren Kräfte (Peter, SEK, Bpol), RD",
        dispatch_aktion: "Sofortige Alarmierung aller Kräfte. Interventionskräfte formieren.",
        vor_ort_aktion: "Direktes Vorgehen gegen den Täter zur Beendigung der Tötungshandlung. Keine Absperrung abwarten!", deeskalation: "Nicht anwendbar. Täter fixieren/neutralisieren.",
        fragen: ["Wo genau fallen Schüsse?", "Täterbeschreibung und Bewaffnung?", "Anzahl der Opfer?"],
        ausfuehrlich: "Das Warten auf Spezialeinheiten entfällt. Die ersten Streifen vor Ort gehen direkt taktisch vor."
    },
    "geiselnahme": {
        kuerzel: ["geisel"], stichwort: "Geiselnahme", einheiten: "SEK, MEK, Verhandlungsgruppe, Führungsstab",
        dispatch_aktion: "Führungsstab einberufen. Sonderkanäle schalten. Absolute Nachrichtensperre.",
        vor_ort_aktion: "Außenring halten. Keine eigenmächtigen Aktionen. Auf Spezialeinheiten warten.", deeskalation: "Verbal defensiv verhalten bei Kontakt.",
        fragen: ["Wie viele Geiseln?", "Forderungen des Täters?", "Sprengstoff im Spiel?"],
        ausfuehrlich: "Die Einsatzleitung geht unverzüglich auf den Polizeiführungsstab über. Strikte Befehlstaktik."
    },
    "bedrohungslage": {
        kuerzel: ["bedrohungslage"], stichwort: "Schwere Bedrohungslage", einheiten: "Peter, SEK in Bereitstellung",
        dispatch_aktion: "Kräfte verdeckt heranführen. Objekt umstellen.",
        vor_ort_aktion: "Eigensicherung beachten, Verhandlungsbereitschaft prüfen.", deeskalation: "Ruhig, deeskalierend einwirken.",
        fragen: ["Ist der Aggressor verbarrikadiert?", "Womit wird gedroht?"],
        ausfuehrlich: "Lage stabilisieren, Zeit gewinnen, bis Spezialkräfte eintreffen."
    },
    "terrorverdacht": {
        kuerzel: ["terror"], stichwort: "Terrorverdacht / Akute Terrorlage", einheiten: "SEK, Bundespolizei, Staatsschutz, Massenaufgebot",
        dispatch_aktion: "Sofortige BAO (Besondere Aufbauorganisation) einrichten. Lagedienst Bund informieren.",
        vor_ort_aktion: "Höchste Eigensicherung (Schwere Schutzausstattung). Großräumige Vollsperrung.", deeskalation: "Nicht anwendbar.",
        fragen: ["Gibt es Hinweise auf Sprengstoff oder automatische Waffen?", "Bekannte Gruppierung?"],
        ausfuehrlich: "Strikte Einhaltung der Anti-Terror-Konzepte. Absolute Befehlshierarchie einhalten."
    },

    // === VERMISSTE / PERSONEN ===
    "vermisste person": {
        kuerzel: ["vermisst"], stichwort: "Vermisstenlage", einheiten: "Peter, Diensthundführer (Suchhunde), Hubschrauber",
        dispatch_aktion: "Ermittlung der Lebensumstände. Suchradien festlegen.",
        vor_ort_aktion: "Sichtung von Fotos, Befragung von Bezugspersonen. Absuchen bekannter Anlaufstellen.", deeskalation: "Angehörige betreuen.",
        fragen: ["Wie alt ist die Person?", "Liegt eine medizinische Eigengefährdung vor?", "Bekannte Bekleidung?"],
        ausfuehrlich: "Bei dementen Personen gilt grundsätzlich akute Eigengefährdung. Sofortige Suche einleiten."
    },
    "kind vermisst": {
        kuerzel: ["kind vermisst"], stichwort: "Kind vermisst (Akut)", einheiten: "Massenaufgebot Peter, Suchhunde, Hubschrauber",
        dispatch_aktion: "Höchste Dringlichkeit! Sofortige Maximierung aller Suchmaßnahmen. Rundfunkwarnung prüfen.",
        vor_ort_aktion: "Umfeldbefragung, lückenlose Absuche von Spielplätzen, Gewässern, Gebäuden.", deeskalation: "Eltern psychologisch stützen.",
        fragen: ["Seit wann vermisst?", "Kleidung, Alter, auffällige Merkmale?", "Letzter Spielort?"],
        ausfuehrlich: "Sofortige Einrichtung einer Suchleitung. Jeder Hinweis ist priorisiert zu behandeln."
    },
    "hilflose person": {
        kuerzel: ["hp", "hilflose person"], stichwort: "Hilflose Person", einheiten: "Peter (1x FuStw), RTW",
        dispatch_aktion: "Prüfen, ob akuter medizinischer Notfall vorliegt.",
        vor_ort_aktion: "Vitalfunktionen checken. Identität feststellen, ggf. Zuführung zur Wohnanschrift.", deeskalation: "Geduldiges, sanftes Sprechen.",
        fragen: ["Ist die Person ansprechbar?", "Steht sie unter Alkoholeinfluss?", "Liegt Hitze-/Kälteschock vor?"],
        ausfuehrlich: "Unterbringung nach PsychKG prüfen, falls Person sich selbst gefährdet."
    },
    "orientierungslose person": {
        kuerzel: ["orientierungslos"], stichwort: "Orientierungslose Person", einheiten: "Peter 15/XX",
        dispatch_aktion: "Datenabgleich mit Vermisstenkartei (Demenz-Einrichtungen).",
        vor_ort_aktion: "Beruhigung der Person, Suche nach Ausweisen oder Kontaktdaten.", deeskalation: "Sehr ruhig und verständnisvoll sprechen.",
        fragen: ["Weiß die Person ihren Namen oder Wohnort?", "Liegt eine Erkrankung vor?"],
        ausfuehrlich: "Ggf. Übergabe an den Rettungsdienst oder Rückführung in Pflegeeinrichtung."
    },
    "tote person": {
        kuerzel: ["tot", "leiche"], stichwort: "Auffindung Leiche", einheiten: "Peter, Kriminalpolizei (KDD), Rechtsmedizin",
        dispatch_aktion: "Leichenfundort sperren, Kriminaldauerdienst verständigen.",
        vor_ort_aktion: "Todesermittlungsverfahren einleiten. Keine Veränderungen am Fundort zulassen.", deeskalation: "Respektvoller Umgang vor Ort.",
        fragen: ["Liegen sichere Todeszeichen vor?", "Hinweise auf Gewalteinwirkung?"],
        ausfuehrlich: "Jeder Todesfall gilt taktisch als unaufgeklärt, bis das Gegenteil bewiesen ist."
    },
    "unbekannte person": {
        kuerzel: ["unbekannte person"], stichwort: "Unbekannte Person an Örtlichkeit", einheiten: "Peter 15/XX",
        dispatch_aktion: "Streife zur Überprüfung entsenden.",
        vor_ort_aktion: "Befragung der Person, Grund des Aufenthalts ermitteln.", deeskalation: "Höflich aber bestimmt.",
        fragen: ["Verhält sich die Person abweisend oder suchend?"],
        ausfuehrlich: "Identitätsfeststellung durchführen, falls berechtigtes Interesse vorliegt."
    },
    "identitätsfeststellung": {
        kuerzel: ["idf"], stichwort: "Identitätsfeststellung (IDF)", einheiten: "Peter 15/XX",
        dispatch_aktion: "Abgleich der Personalien über POLAS/INPOL.",
        vor_ort_aktion: "Prüfung von Ausweisdokumenten. Ggf. Durchsuchung nach Papieren.", deeskalation: "Maßnahme sachlich begründen.",
        fragen: ["Liegen gültige Dokumente vor?", "Wird die Angabe verweigert?"],
        ausfuehrlich: "Bei Verweigerung oder unklaren Angaben: Mitnahme zur Wache zwecks ED-Behandlung (HmbSOG/StPO)."
    },

    // === VERKEHR ===
    "verkehrsbehinderung": {
        kuerzel: ["verkehrsbehinderung"], stichwort: "Verkehrsbehinderung", einheiten: "Peter (1x FuStw), Abschleppdienst",
        dispatch_aktion: "Abschleppunternehmer (AsA) vorberufen, falls Rettungswege blockiert sind.",
        vor_ort_aktion: "Verkehr regeln (Handzeichen), Abschleppung überwachen.", deeskalation: "Sauer gefahrene Autofahrer beruhigen.",
        fragen: ["Wird ein Rettungsweg blockiert?", "Wie lang ist der Stau bereits?"],
        ausfuehrlich: "Verkehrsregelung per Handzeichen erfordert reflektierende Warnkleidung (Eigenschutz)."
    },
    "falschparker": {
        kuerzel: ["falschparker"], stichwort: "Falschparker / Verkehrsbehinderung", einheiten: "Peter oder LBV",
        dispatch_aktion: "Priorität nach Verkehrsbehinderung einstufen.",
        vor_ort_aktion: "Ausstellen eines Bußgeldbescheides, ggf. Umsetzung des Fahrzeugs veranlassen.", deeskalation: "Sachlich bleiben.",
        fragen: ["Wird eine Feuerwehrzufahrt oder ein Behindertenparkplatz blockiert?"],
        ausfuehrlich: "Umsetzung rechtfertigen durch konkrete Behinderung oder Gefährdung."
    },
    "verkehrsregelung": {
        kuerzel: ["verkehrsregelung"], stichwort: "Manuelle Verkehrsregelung", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Einsatz bei Ampelausfall oder Großunfällen.",
        vor_ort_aktion: "Klare Handzeichen geben, Kreuzungsbereich absichern.", deeskalation: "Bestimmt dirigieren.",
        fragen: ["Ist die Ampelanlage komplett ausgefallen?"],
        ausfuehrlich: "Eigenschutz beachten. Warnweste ist absolute Pflicht."
    },
    "alkohol am steuer": {
        kuerzel: ["alkohol"], stichwort: "Alkohol am Steuer", einheiten: "Peter 15/XX",
        dispatch_aktion: "Fahrzeug stoppen lassen durch gezielte Kontrolle.",
        vor_ort_aktion: "Atemalkoholtest. Bei positivem Befund: Fahrtbeendigung, Blutprobe auf der Wache.", deeskalation: "Bestimmt, sachlich.",
        fragen: ["Fahrweise auffällig?", "Ausfallerscheinungen sichtbar?"],
        ausfuehrlich: "Strafverfahren nach § 316 StGB oder Ordnungswidrigkeit nach § 24a StVG einleiten."
    },
    "drogen im straßenverkehr": {
        kuerzel: ["drogen"], stichwort: "Drogen im Straßenverkehr", einheiten: "Peter 15/XX",
        dispatch_aktion: "Kontrollstreife anweisen, Urintest/Wischtest anzubieten.",
        vor_ort_aktion: "Überprüfung der Pupillenreaktion, Koordinationstest, Sicherstellung des Führerscheins.", deeskalation: "Ruhig argumentieren.",
        fragen: ["Konsum eingeräumt?", "Ausfallerscheinungen?"],
        ausfuehrlich: "Blutprobenentnahme durch Arzt anordnen. Untersagung der Weiterfahrt für 24 Stunden."
    },
    "illegales kraftfahrzeugrennen": {
        kuerzel: ["rennen"], stichwort: "Illegales Kraftfahrzeugrennen", einheiten: "Peter (Mehrere Kräfte)",
        dispatch_aktion: "Fahrzeuge im Voraus durch andere Streifen stoppen/austakten lassen. Keine Verfolgungsjagd erzwingen.",
        vor_ort_aktion: "Beschlagnahme der Fahrzeuge und Führerscheine direkt vor Ort.", deeskalation: "Sehr bestimmtes Auftreten.",
        fragen: ["Wie viele Fahrzeuge beteiligt?", "Gefährdung von Passanten?"],
        ausfuehrlich: "Verstoß gegen § 315d StGB. Einziehung des Fahrzeugs als Tatmittel prüfen."
    },
    "fahrzeugbrand": {
        kuerzel: ["fahrzeugbrand"], stichwort: "Fahrzeugbrand", einheiten: "Feuerwehr, Peter (1x FuStw)",
        dispatch_aktion: "Feuerwehr alarmieren. Straße großräumig sperren lassen (Explosionsgefahr).",
        vor_ort_aktion: "Absperrung aufbauen, Insassen evakuieren, Sicherheitsabstand einhalten.", deeskalation: "Zuschauer fernhalten.",
        fragen: ["Brennt der Motorraum oder der Innenraum?", "Gibt es Funkenflug auf Gebäude?"],
        ausfuehrlich: "Nach dem Löschen Ursachenermittlung durchführen (technischer Defekt oder Brandstiftung)."
    },
    "fahrzeugkontrolle": {
        kuerzel: ["fzk"], stichwort: "Allgemeine Fahrzeugkontrolle", einheiten: "Peter 15/XX",
        dispatch_aktion: "Überprüfung von Kennzeichen im System vorab.",
        vor_ort_aktion: "Prüfung von Führerschein, Fahrzeugschein und TÜV. Warndreieck/Verbandskasten zeigen lassen.", deeskalation: "Höflich und professionell.",
        fragen: ["Auffälligkeiten bei Halterabfrage?"],
        ausfuehrlich: "Verkehrskontrolle nach § 36 Abs. 5 StVO. Auf Eigenschutz beim Herantreten an das Kfz achten."
    },

    // === ÖFFENTLICHE SICHERHEIT ===
    "ruhestörung": {
        kuerzel: ["ruhestörung"], stichwort: "Ruhestörung", einheiten: "Peter (1x FuStw)",
        dispatch_aktion: "Einsatz nach Verfügbarkeit (niedrige Priorität).",
        vor_ort_aktion: "Verursacher zur Ruhe ermahnen. Bei uneinsichtigem Verhalten: Sicherstellung der Tonanlage.", deeskalation: "Höflich, aber bestimmend.",
        fragen: ["Woher kommt der Lärm?", "Seit wann dauert es an?"],
        ausfuehrlich: "Rechtliche Grundlage: HmbLärmSchG. Wiederholte Verstöße rechtfertigen Gewahrsamnahme."
    },
    "lärmbelästigung": {
        kuerzel: ["lärmbelästigung"], stichwort: "Lärmbelästigung (Gewerbe/Straße)", einheiten: "Peter 15/XX",
        dispatch_aktion: "Lärmquelle verifizieren.",
        vor_ort_aktion: "Gespräch mit dem Betreiber/Verantwortlichen suchen, Messung veranlassen.", deeskalation: "Ruhig vermitteln.",
        fragen: ["Handelt es sich um eine Gaststätte oder Privatpersonen?"],
        ausfuehrlich: "Protokollierung für das zuständige Bezirksamt zur gewerberechtlichen Prüfung."
    },
    "randalierer": {
        kuerzel: ["randalierer"], stichwort: "Randalierende Person", einheiten: "Peter (Mind. 1x-2x FuStw)",
        dispatch_aktion: "Kräfte zügig heranführen, bevor Sachschäden entstehen.",
        vor_ort_aktion: "Fixierung des Randalierers bei Aggression. Platzverweis erteilen.", deeskalation: "Deutliche Grenzziehung.",
        fragen: ["Ist die Person bewaffnet?", "Werden Passanten angegriffen?"],
        ausfuehrlich: "Gewahrsamnahme zur Durchsetzung des Platzverweises nach dem HmbSOG rechtlich absichern."
    },
    "platzverweis": {
        kuerzel: ["platzverweis"], stichwort: "Durchsetzung Platzverweis", einheiten: "Peter 15/XX",
        dispatch_aktion: "Rechtliche Vorgeschichte prüfen.",
        vor_ort_aktion: "Aufforderung zum Verlassen des Bereichs. Bei Weigerung: Durchsetzung mit einfachem körperlichen Zwang.", deeskalation: "Konsequente Ansagen.",
        fragen: ["Wurde der Platzverweis bereits offiziell ausgesprochen?"],
        ausfuehrlich: "Maßnahme nach dem Hamburger Sicherheits- und Ordnungsgesetz (HmbSOG)."
    },
    "hausverbot": {
        kuerzel: ["hausverbot"], stichwort: "Durchsetzung Hausverbot", einheiten: "Peter 15/XX",
        dispatch_aktion: "Berechtigung des Eigentümers bestätigen.",
        vor_ort_aktion: "Entfernung der Person aus den privaten/gewerblichen Räumen.", deeskalation: "Bestimmt und formal korrekt.",
        fragen: ["Liegt ein schriftliches oder mündliches Hausverbot vor?"],
        ausfuehrlich: "Bei Missachtung liegt ein Hausfriedensbruch nach § 123 StGB vor. Strafantrag aufnehmen."
    },
    "verdächtige person": {
        kuerzel: ["verdächtige person"], stichwort: "Verdächtige Person", einheiten: "Peter 15/XX",
        dispatch_aktion: "Erkundungseinsatz. Personenbeschreibung beachten.",
        vor_ort_aktion: "Ansprache der Person, Feststellung des Aufenthaltszwecks.", deeskalation: "Wachsam und defensiv.",
        fragen: ["Welches Verhalten ist konkret verdächtig (Ausspähen von Häusern)?"],
        ausfuehrlich: "Datenabgleich im Fahndungssystem. Präventive Überprüfung zur Einbruchsverhütung."
    },
    "verdächtiges fahrzeug": {
        kuerzel: ["verdächtiges fahrzeug"], stichwort: "Verdächtiges Fahrzeug", einheiten: "Peter 15/XX",
        dispatch_aktion: "Halterüberprüfung und Sachfahndung vorab im System laufen lassen.",
        vor_ort_aktion: "Sichtprüfung des PKW von außen (Sitzplätze, Kofferraum, Hebelspuren).", deeskalation: "Professionell abfragen.",
        fragen: ["Steht das Fahrzeug schon länger dort? Kennzeichen vorhanden?"],
        ausfuehrlich: "Bei Verdacht auf Diebstahl oder Nutzung als Tatmittel: Abschleppung zur Spurensicherung veranlassen."
    },
    "verdächtiger gegenstand": {
        kuerzel: ["verdächtiger gegenstand"], stichwort: "Verdächtiger Gegenstand (USBV-Verdacht)", einheiten: "Peter, Entschärfer (LKA)",
        dispatch_aktion: "Großräumige Absperrung veranlassen. Keine Funkgeräte im Nahbereich nutzen!",
        vor_ort_aktion: "Evakuierung des Nahbereichs (Mindestradius 100m). Gegenstand nicht berühren.", deeskalation: "Panik vermeiden.",
        fragen: ["Handelt es sich um einen Koffer, Paket, Drähte sichtbar?"],
        ausfuehrlich: "Behandlung als unkonventionelle Sprengvorrichtung (USBV) bis zur Entwarnung durch Spezialkräfte."
    },
    "bombendrohung": {
        kuerzel: ["bombe"], stichwort: "Bombendrohung", einheiten: "Massenaufgebot Peter, DHF (Sprengstoff), Evakuierungskräfte",
        dispatch_aktion: "Sofortige Einrichtung einer Besonderen Aufbauorganisation (BAO). Krisenstab hochfahren.",
        vor_ort_aktion: "Räumung des betroffenen Objekts koordinieren. Durchsuchung mittels Spürhunden.", deeskalation: "Absolute Ruhe ausstrahlen.",
        fragen: ["Wie wurde die Drohung übermittelt?", "Wortlaut des Drohers?"],
        ausfuehrlich: "Jede Drohung wird ernst genommen, bis die Einsatzleitung nach Lagebewertung Entwarnung gibt."
    },
    "gefährlicher hund": {
        kuerzel: ["hund"], stichwort: "Gefährlicher / Aggressiver Hund", einheiten: "Peter, Diensthundführer, Tierrettung",
        dispatch_aktion: "Zuständige Behörde oder Tierschutzverein mitalarmieren.",
        vor_ort_aktion: "Passanten warnen, Hund isolieren. Schusswaffengebrauch als allerletztes Mittel bei Angriff.", deeskalation: "Ruhige Bewegungen.",
        fragen: ["Läuft der Hund frei herum? Hat er bereits gebissen?"],
        ausfuehrlich: "Maßnahmen nach dem Hamburger Hundegesetz. Halter ermitteln und zur Verantwortung ziehen."
    },
    "tier in not": {
        kuerzel: ["tier in not"], stichwort: "Tier in Notlage", einheiten: "Feuerwehr, Peter (1x FuStw)",
        dispatch_aktion: "Feuerwehr zur technischen Rettung disponieren.",
        vor_ort_aktion: "Absicherung des Einsatzortes für die Feuerwehrkräfte.", deeskalation: "Tierbesitzer beruhigen.",
        fragen: ["Wo genau befindet sich das Tier (Baum, Schacht)?"],
        ausfuehrlich: "Unterstützung des Tierschutzes. Keine akute Gefährdung von Menschenleben vorhanden."
    },
    "umweltgefahr": {
        kuerzel: ["umweltgefahr"], stichwort: "Umweltgefahr (Öl/Chemikalien)", einheiten: "Feuerwehr (Umweltschutz), Peter",
        dispatch_aktion: "Wasserbehörde/Umweltamt informieren. Feuerwehr alarmiert Ölspurkomponente.",
        vor_ort_aktion: "Gefahrenbereich absperren, Ausbreitung dokumentieren (Kanalisation schützen).", deeskalation: "Sachlich protokollieren.",
        fragen: ["Welcher Stoff tritt aus? Läuft es in ein Gewässer?"],
        ausfuehrlich: "Strafverfahren wegen Umweltstraftat (§ 324 StGB ff.) gegen Verursacher prüfen."
    },

    // === FAHNDUNG ===
    "personenfahndung": {
        kuerzel: ["pfahndung"], stichwort: "Personenfahndung", einheiten: "Peter, Zivilfahnder",
        dispatch_aktion: "Fahndungsraster und Personenbeschreibung über Funk an alle Einheiten durchgeben.",
        vor_ort_aktion: "Gezielte Kontrollen im Suchsektor, Fluchtwege (Bahnhöfe) besetzen.", deeskalation: "Taktisch klug vorgehen.",
        fragen: ["Genaue Bekleidung, Fluchtrichtung, Bewaffnung?"],
        ausfuehrlich: "Überprüfung aller relevanten Datenbanken. Zugriff planen unter Berücksichtigung des Gefährdungspotenzials."
    },
    "fahrzeugfahndung": {
        kuerzel: ["ffahndung"], stichwort: "Fahrzeugfahndung", einheiten: "Peter, Autobahnpolizei",
        dispatch_aktion: "Fahrzeugdaten (Kennzeichen, Typ, Farbe) im INPOL/POLAS ausschreiben.",
        vor_ort_aktion: "Sichtfahndung auf Hauptverkehrsstraßen, Vorbereitung einer Straßensperre.", deeskalation: "Besonnene Fahrweise.",
        fragen: ["Letzter bekannter Standort? Besonderheiten am Kfz?"],
        ausfuehrlich: "Bei Sichtung Zugriff koordinieren. Fluchtgefahr einberechnen."
    },
    "vermisstenfahndung": {
        kuerzel: ["vfahndung"], stichwort: "Vermisstenfahndung (Offiziell)", einheiten: "Kriminalpolizei, Streifendienst",
        dispatch_aktion: "Fahndungsnotierung im System aktivieren.",
        vor_ort_aktion: "Überprüfung bekannter Aufenthaltsorte der Zielperson.", deeskalation: "Einfühlsame Befragung.",
        fragen: ["Liegt eine Öffentlichkeitsfahndung (Richterbeschluss) vor?"],
        ausfuehrlich: "Ausschreibung zur Aufenthaltsermittlung oder Ingewahrsamnahme zum Schutz der Person."
    },
    "zielfahndung": {
        kuerzel: ["zielfahndung"], stichwort: "Zielfahndung (LKA)", einheiten: "LKA Zielfahndung, Spezialeinheiten",
        dispatch_aktion: "Absolute Geheimhaltung über offenen Funk. Koordinierung über geschlossene Gruppen.",
        vor_ort_aktion: "Verdeckte Observation und schlagartiger Zugriff bei Identifizierung.", deeskalation: "Keine Verhandlungsspielräume.",
        fragen: ["Liegt ein internationaler Haftbefehl vor?"],
        ausfuehrlich: "Einsatzsteuerung liegt komplett beim Fachkommissariat des Landeskriminalamtes."
    },
    "kontrollstelle": {
        kuerzel: ["kontrollstelle"], stichwort: "Einrichtung Kontrollstelle", einheiten: "Peter (Mehrere Kräfte), Bereitschaftspolizei",
        dispatch_aktion: "Taktischen Ort bestimmen, Absperrmaterial bereitstellen.",
        vor_ort_aktion: "Aufbau der Kontrollgasse, Durchführung systematischer Überprüfungen.", deeskalation: "Bestimmt, kooperativ.",
        fragen: ["Anlass der Kontrolle (Fahndungslage oder Verkehr)?"],
        ausfuehrlich: "Rechtliche Grundlage (z.B. § 12 HmbSOG) den Bürgern auf Verlangen erläutern."
    },
    "observation": {
        kuerzel: ["observation"], stichwort: "Observation (Verdeckt)", einheiten: "MEK, Zivilkräfte",
        dispatch_aktion: "Zuweisung verdeckter Funkkanäle. Funkdisziplin wahren.",
        vor_ort_aktion: "Unauffälliges Folgen oder Überwachen eines Objekts/einer Person.", deeskalation: "Unentdeckt bleiben.",
        fragen: ["Zielobjekt in Bewegung?"],
        ausfuehrlich: "Maßnahme dient der Beweiserhebung bei schweren Straftaten. Keine vorzeitige Aufdeckung."
    },

    // === VOLLSTRECKUNG ===
    "haftbefehl": {
        kuerzel: ["haftbefehl"], stichwort: "Vollstreckung Haftbefehl", einheiten: "Peter (2x FuStw)",
        dispatch_aktion: "Haftbefehl im System auf Gültigkeit und Ausschreibungssumme prüfen.",
        vor_ort_aktion: "Eröffnung des Haftbefehls, Durchsuchung der Person, Transport zum Zentralgewahrsam.", deeskalation: "Formal korrekt, unnachgiebig.",
        fragen: ["Kann die Haft durch Zahlung einer Abwendungssumme verhindert werden?"],
        ausfuehrlich: "Rechtliche Belehrung durchführen. Bei Widerstand Zwangsmittel konsequent anwenden."
    },
    "vorführung": {
        kuerzel: ["vorführung"], stichwort: "Vorführung (Gericht/Arzt)", einheiten: "Peter 15/XX",
        dispatch_aktion: "Terminvorgaben des Gerichts oder der Behörde abgleichen.",
        vor_ort_aktion: "Sichere Zuführung der Person unter Einhaltung der Fesselungsrichtlinien.", deeskalation: "Professionelle Distanz.",
        fragen: ["Besteht Flucht- oder Eigengefährdung?"],
        ausfuehrlich: "Zwangweise Vorführung nach richterlicher Anordnung vollstrecken."
    },
    "durchsuchung": {
        kuerzel: ["durchsuchung"], stichwort: "Durchsuchung (Objekt/Wohnung)", einheiten: "Peter, Kriminalpolizei",
        dispatch_aktion: "Prüfen, ob ein richterlicher Durchsuchungsbeschluss oder Gefahr im Verzug vorliegt.",
        vor_ort_aktion: "Sicherung der Ein- und Ausgänge, systematisches Absuchen der Räumlichkeiten.", deeskalation: "Maßnahme erklären, Ruhe bewahren.",
        fragen: ["Werden Zeugen/Schnittbuben benötigt?"],
        ausfuehrlich: "Durchsuchung nach § 102/105 StPO. Detailliertes Sicherstellungsprotokoll anfertigen."
    },
    "sicherstellung": {
        kuerzel: ["sicherstellung"], stichwort: "Sicherstellung von Beweismitteln", einheiten: "Peter 15/XX",
        dispatch_aktion: "Vorgangsnummer für die Asservierung bereitstellen.",
        vor_ort_aktion: "Beweismittel katalogisieren, transportsicher verpacken und dokumentieren.", deeskalation: "Sachliche Argumentation.",
        fragen: ["Erfolgt die Herausgabe freiwillig oder wird widersprochen?"],
        ausfuehrlich: "Bei Widerspruch mutiert die Sicherstellung zur Beschlagnahme nach § 94/98 StPO."
    },
    "beschlagnahme": {
        kuerzel: ["beschlagnahme"], stichwort: "Förmliche Beschlagnahme", einheiten: "Peter 15/XX",
        dispatch_aktion: "Rechtliche Grundlagen im System hinterlegen.",
        vor_ort_aktion: "Amtliche Inbesitznahme von Gegenständen oder Fahrzeugen gegen den Willen des Inhabers.", deeskalation: "Unbeirrbar durchgreifen.",
        fragen: ["Wurde ein Beschlagnahmebeleg ausgehändigt?"],
        ausfuehrlich: "Rechtssichere Durchführung nach StPO oder Gefahrenabwehrrecht (HmbSOG)."
    },
    "gewahrsamnahme": {
        kuerzel: ["gewahrsam"], stichwort: "Ingewahrsamnahme / Festnahme", einheiten: "Peter (Mind. 1x FuStw)",
        dispatch_aktion: "Zellenzuweisung im zuständigen PK (Polizeikommissariat) abfragen.",
        vor_ort_aktion: "Fesselung, Transport zur Dienststelle, Durchsuchung in der Gewahrsamszelle.", deeskalation: "Konsequent, körperliche Überlegenheit demonstrieren.",
        fragen: ["Ist die Person transportfähig? Hafttauglichkeitsprüfung durch Arzt nötig?"],
        ausfuehrlich: "Festnahme nach § 127 StPO (Straftat) oder Ingewahrsamnahme nach § 13 HmbSOG (Schutz/Platzverweis)."
    },

    // === VERANSTALTUNGEN ===
    "demonstration": {
        kuerzel: ["demo"], stichwort: "Demonstration / Versammlung", einheiten: "Bereitschaftspolizei, Peter-Kräfte",
        dispatch_aktion: "Führungskanal schalten. Hundertschaften koordinieren.",
        vor_ort_aktion: "Gewährleistung des friedlichen Verlaufs. Trennung von Gegendemonstranten.", deeskalation: "Deeskalationsphilosophie anwenden.",
        fragen: ["Wie viele Teilnehmer? Verlauf friedlich?"],
        ausfuehrlich: "Einsatz von Zwangsmitteln nur nach Anordnung des Gesamteinsatzleiters."
    },
    "versammlung": {
        kuerzel: ["versammlung"], stichwort: "Öffentliche Versammlung", einheiten: "Peter, Bepo nach Bedarf",
        dispatch_aktion: "Prüfen, ob die Versammlung angemeldet und genehmigt ist.",
        vor_ort_aktion: "Kooperation mit dem Versammlungsleiter, Absicherung des Aufzugs.", deeskalation: "Kommunikativ.",
        fragen: ["Gibt es Auflagenverstöße?"],
        ausfuehrlich: "Einsatz nach dem Versammlungsgesetz. Auflösung ist das letzte Mittel."
    },
    "fußballspiel": {
        kuerzel: ["fußball"], stichwort: "Großveranstaltung (Fußballspiel)", einheiten: "Bereitschaftspolizei, SKB (Szenekundige Beamte), Peter",
        dispatch_aktion: "Sektorentrennung der Fangruppen koordinieren. Bundespolizei (Bahnhof) einbinden.",
        vor_ort_aktion: "Präsenz an den Hauptlaufwegen, Unterbindung von Pyrotechnik und Schlägereien.", deeskalation: "Frühzeitiges, robustes Einschreiten bei Aggression.",
        fragen: ["Risikospiel (Kategorie B oder C)?"],
        ausfuehrlich: "Taktisches Konzept sieht strikte Trennung von Heim- und Gastfans vor."
    },
    "volksfest": {
        kuerzel: ["volksfest", "dom"], stichwort: "Volksfest / Hamburger Dom", einheiten: "Wache Dom / Peter, Sanitätsdienst",
        dispatch_aktion: "Temporäre Wache aktivieren, Jugendschutzkontrollen einplanen.",
        vor_ort_aktion: "Präsenzstreifen auf dem Festgelände, Schlichtung von alkoholbedingten Delikten.", deeskalation: "Volksnah, aber durchsetzungsstark.",
        fragen: ["Jugendschutzverstöße gemeldet?"],
        ausfuehrlich: "Fokus liegt auf Diebstahlsprävention und schneller Schlichtung von Streitigkeiten."
    },
    "konzert": {
        kuerzel: ["konzert"], stichwort: "Großkonzert", einheiten: "Peter, Ordnungsdienst des Veranstalters",
        dispatch_aktion: "Verkehrskonzept für An- und Abreise überwachen.",
        vor_ort_aktion: "Absicherung der Rettungswege, Jugendschutzkontrollen im Einlassbereich.", deeskalation: "Gelassen und freundlich.",
        fragen: ["Zuschauerzahl übersteigt Hallenkapazität?"],
        ausfuehrlich: "Enge Absprache mit dem privaten Sicherheitsdienst des Veranstalters."
    },
    "staatsbesuch": {
        kuerzel: ["staatsbesuch"], stichwort: "Staatsbesuch / Hochrisiko-Objektschutz", einheiten: "LKA (Personenschutz), Bepo, Hubschrauberstaffel",
        dispatch_aktion: "Sondernetzwerk BAO aktivieren. Streckenabsperrungen minutengenau takten.",
        vor_ort_aktion: "Lückenlose Absperrung der Fahrstrecken, Scharfschützen positionieren.", deeskalation: "Keine Toleranz für Sicherheitsstörungen.",
        fragen: ["Genaue Ankunftszeit und Protokollstufe?"],
        ausfuehrlich: "Höchste Sicherheitsstufe. Jede Abweichung vom Protokoll ist sofort zu melden."
    },

    // === SONSTIGE ===
    "amtshilfe": {
        kuerzel: ["amtshilfe"], stichwort: "Amtshilfe für andere Behörden", einheiten: "Peter 15/XX",
        dispatch_aktion: "Rechtliche Grundlage und Zuständigkeit vorab prüfen.",
        vor_ort_aktion: "Absicherung der Beamten der anfordernden Behörde (z.B. Zoll, Jugendamt).", deeskalation: "Neutral auftreten.",
        fragen: ["Welche Behörde fordert an? Liegt Gefahr im Verzug vor?"],
        ausfuehrlich: "Die Polizei übernimmt primär die Vollzugshilfe zur Absicherung gegen physische Gewalt."
    },
    "unterstützungsersuchen": {
        kuerzel: ["unterstützung"], stichwort: "Unterstützungsersuchen (Eigen/Fremd)", einheiten: "Peter (Nächstverfügbar)",
        dispatch_aktion: "Dringlichkeit abfragen. Alle anderen Einsätze dafür abbrechen.",
        vor_ort_aktion: "Schnellstmögliche Unterstützung der Kollegen vor Ort bei Widerstand oder Bedrohung.", deeskalation: "Kräfteüberschuss herstellen.",
        fragen: ["Benötigen die Kollegen Soforthilfe (Drücker/Notruf)?"],
        ausfuehrlich: "Code 'Mayday' oder 'Eigensicherung' bricht jede andere Priorität im Funkkreis."
    },
    "präsenzeinsatz": {
        kuerzel: ["präsenz"], stichwort: "Präsenzeinsatz / Brennpunktstreife", einheiten: "Peter 15/XX",
        dispatch_aktion: "Sektor für Fuß- oder Streifenfahrt zuweisen.",
        vor_ort_aktion: "Sichtbare Polizeipräsenz zur Steigerung des subjektiven Sicherheitsgefühls.", deeskalation: "Bürgernah, kommunikativ.",
        fragen: ["Konkreter Brennpunkt (z.B. Reeperbahn)?"],
        ausfuehrlich: "Dient der Abschreckung von Kriminellen und dem Aufbau von Vertrauen in der Bevölkerung."
    },
    "objektschutz": {
        kuerzel: ["objektschutz"], stichwort: "Objektschutz (Konsulate/Synagogen)", einheiten: "Theodor (Festposten)",
        dispatch_aktion: "Gefährdungslage des Objekts permanent überwachen.",
        vor_ort_aktion: "Sicherung des zugewiesenen Objekts, Kontrolle verdächtiger Personen im Umfeld.", deeskalation: "Aufmerksam, wachsam.",
        fragen: ["Besteht eine akute Erhöhung der Gefährdungsstufe?"],
        ausfuehrlich: "Schutzmaßnahmen nach Vorgabe des Staatsschutzes strikt umsetzen."
    },
    "personenschutz": {
        kuerzel: ["personenschutz"], stichwort: "Personenschutz (LKA)", einheiten: "LKA Personenschutzkomponente",
        dispatch_aktion: "Fahrzeuge und Routen im System verschlüsselt halten.",
        vor_ort_aktion: "Enger Schutzring um die Schutzperson, Gefahrenaufklärung im Vorfeld.", deeskalation: "Gefahrenquelle abschirmen.",
        fragen: ["Bedrohungslage für die Schutzperson aktuell verändert?"],
        ausfuehrlich: "Einsatz wird autark durch das zuständige Spezialkommissariat des LKA geführt."
    },
    "streifenfahrt": {
        kuerzel: ["streife"], stichwort: "Reguläre Streifenfahrt", einheiten: "Peter 15/XX",
        dispatch_aktion: "Reviergebiet zuweisen, Funkbereitschaft halten.",
        vor_ort_aktion: "Meldung von Auffälligkeiten, eigenständige Durchführung von Kontrollen.", deeskalation: "Präventiv.",
        fragen: ["Spezifische Suchbereiche vorgegeben?"],
        ausfuehrlich: "Grundpfeiler der polizeilichen Arbeit zur Gefahrenabwehr und Kriminalitätsbekämpfung."
    },
    "präventionsmaßnahme": {
        kuerzel: ["prävention"], stichwort: "Kriminalprävention", einheiten: "COP / Peter (Zivil)",
        dispatch_aktion: "Infomaterial oder Beratungstermine koordinieren.",
        vor_ort_aktion: "Aufklärung von Bürgern (z.B. Seniorengruppen vor Enkeltrick warnen).", deeskalation: "Aufklärend, beratend.",
        fragen: ["Welche Deliktsart steht im Fokus (Einbruch oder Betrug)?"],
        ausfuehrlich: "Prävention verhindert Straftaten vor ihrer Entstehung. Enge Kooperation mit Schulen/Vereinen."
    },
    "fundsache": {
        kuerzel: ["fundsache"], stichwort: "Fundsache / Eigentumssicherung", einheiten: "Peter (1x FuStw oder Wache)",
        dispatch_aktion: "Prüfen, ob der Gegenstand aus einer Straftat stammen könnte.",
        vor_ort_aktion: "Aufnahme der Fundsache, Übergabeprotokoll anfertigen, Weiterleitung ans Fundbüro.", deeskalation: "Sachlich registrieren.",
        fragen: ["Wertvoller Gegenstand oder Ausweisdokumente?"],
        ausfuehrlich: "Eigentumssicherung nach HmbSOG. Keine Annahme von offensichtlichem Müll."
    },
    "eigentumssicherung": {
        kuerzel: ["sicherung"], stichwort: "Eigentumssicherung (Nach Einbruch/Unfall)", einheiten: "Peter 15/XX, Schlüsseldienst",
        dispatch_aktion: "Handwerker oder Notdienst zur Versiegelung anfordern.",
        vor_ort_aktion: "Sicherung einer offenstehenden Wohnung nach einem Einsatz, bis der Eigentümer übernimmt.", deeskalation: "Verantwortungsvoll.",
        fragen: ["Ist die Wohnungstür irreparabel beschädigt?"],
        ausfuehrlich: "Schutz des privaten Eigentums vor Diebstahl oder Vandalismus nach polizeilichen Maßnahmen."
    },
    "schlüsselhilfe": {
        kuerzel: ["schlüsselhilfe"], stichwort: "Schlüsselhilfe / Türöffnung", einheiten: "Feuerwehr, Peter (1x FuStw)",
        dispatch_aktion: "Feuerwehr alarmieren, falls hilflose Person oder Gefahr im Verzug in der Wohnung vermutet wird.",
        vor_ort_aktion: "Dokumentation der rechtlichen Grundlage für die Notöffnung der Wohnungstür.", deeskalation: "Besorgte Nachbarn aufklären.",
        fragen: ["Laufen Herde oder Wasser? Hilflose Person in der Wohnung?"],
        ausfuehrlich: "Rechtfertigender Notstand (§ 34 StGB) oder Gefahrenabwehr rechtfertigen die Beschädigung des Schlosses."
    },
    "tierrettung": {
        kuerzel: ["tierrettung"], stichwort: "Tierrettung / Schwanenwesen", einheiten: "Feuerwehr, Schwanenvater Hamburg",
        dispatch_aktion: "Spezialkräfte (z.B. Schwanenwesen an der Alster) bei Bedarf hinzurufen.",
        vor_ort_aktion: "Absicherung des Bereiches, Unterstützung bei der Bergung des Tieres.", deeskalation: "Tier und Zuschauer beruhigen.",
        fragen: ["Handelt es sich um ein geschütztes Wildtier oder Haustier?"],
        ausfuehrlich: "Zusammenarbeit mit Hamburger Institutionen zur waidgerechten Rettung von Tieren."
    }
};

// State Management
let currentMatchData = null;

// Helper: Levenshtein Distance für die Fuzzy-Fehlertoleranz-Suche
function levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= a.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= b.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
            );
        }
    }
    return matrix[a.length][b.length];
}

// Universelle Schreibmaschinen-Funktion (Typewriter Effect)
function typeWriter(element, text, speed = 15, callback = null) {
    if (!element) return;
    element.innerHTML = ""; // Alten Text leeren
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Startet die nächste Zeile, wenn diese fertig ist
        }
    }
    type();
}

// Sidebar Notizblock öffnen/schließen
function toggleNotes() {
    document.getElementById("notesSidebar").classList.toggle("open");
}

// Such-Logik mit flüssiger, nacheinander ablaufender Schreib-Animation (Staggered)
function searchStichwort() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    
    if (!input) {
        resultDiv.innerHTML = "<p style='color: var(--danger); font-family: monospace;'>[FEHLER] Bitte Suchbegriff oder Kürzel eingeben.</p>";
        return;
    }

    let bestMatch = null;
    let minDistance = 3; 

    // 1. Exakter Treffer oder Kürzel-Match
    for (let key in einsatzDaten) {
        if (key === input || einsatzDaten[key].kuerzel.includes(input)) {
            bestMatch = einsatzDaten[key];
            break;
        }
    }

    // 2. Fuzzy-Suche bei Tippfehlern
    if (!bestMatch) {
        for (let key in einsatzDaten) {
            const dist = levenshtein(input, key);
            if (dist < minDistance) {
                bestMatch = einsatzDaten[key];
                minDistance = dist;
            }
        }
    }

    if (bestMatch) {
        currentMatchData = bestMatch;
        let fragenHtml = bestMatch.fragen.map(f => `<li>📌 ${f}</li>`).join('');

        // Baut das HTML-Gerüst auf, lässt die Werte für den Effekt aber leer
        resultDiv.innerHTML = `
            <div class="result-card">
                <div class="card-header-wrapper">
                    <div class="card-title-main" id="typeStichwort"></div>
                    <button class="info-trigger-btn" onclick="openModal()">📜 DIENSTANWEISUNG</button>
                </div>
                
                <span class="label">🚨 Primäre Einsatzmittel (Dispo)</span>
                <div class="value" id="typeEinheiten" style="color: var(--warning); font-weight: bold; font-family: monospace;"></div>
                
                <span class="label">📞 Taktische Abfragekriterien (Checkliste)</span>
                <ul class="fragen-liste">${fragenHtml}</ul>
                
                <span class="label">🛰️ Leitstellen-Auftrag</span>
                <div class="value" id="typeDispatch"></div>
                
                <span class="label">🛡️ Maßnahmen vor Ort (Eigenschutz / Absicherung)</span>
                <div class="value" id="typeVorOrt"></div>
                
                <span class="label">🗣️ Deeskalations-Vorgabe</span>
                <div class="value" id="typeDeeskalation"></div>
            </div>
        `;
        
        // Staggered Start: Tippt elegant eins nach dem anderen für maximale Ästhetik
        typeWriter(document.getElementById('typeStichwort'), bestMatch.stichwort, 15, function() {
            typeWriter(document.getElementById('typeEinheiten'), bestMatch.einheiten, 15, function() {
                typeWriter(document.getElementById('typeDispatch'), bestMatch.dispatch_aktion, 10, function() {
                    typeWriter(document.getElementById('typeVorOrt'), bestMatch.vor_ort_aktion, 10, function() {
                        typeWriter(document.getElementById('typeDeeskalation'), bestMatch.deeskalation, 12);
                    });
                });
            });
        });

    } else {
        resultDiv.innerHTML = "<p style='color: var(--danger); font-family: monospace;'>[FEHLER] Stichwort unklar oder nicht im System Hamburg hinterlegt.</p>";
    }
}

// Modal Logik für das ausführliche Briefing
function openModal() {
    if (!currentMatchData) return;
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').innerText = "Einweisung / Aufgaben: " + currentMatchData.stichwort.toUpperCase();
    document.getElementById('modalText').innerHTML = currentMatchData.ausfuehrlich.replace(/\n/g, '<br>');
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('infoModal').style.display = "none";
}

// Globaler Key-Listener für Enter (Suche) und F4 (Notizen)
document.addEventListener('keydown', function(event) {
    if (event.key === 'F4') {
        event.preventDefault(); // Verhindert Browser-Standardaktionen
        toggleNotes();
    }
});

// Zuweisung der Enter-Taste direkt an das Suchfeld
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchStichwort();
    }
});