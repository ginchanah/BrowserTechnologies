# Schoolopdracht voor CMD aan de HvA

Een belastingformulier maken in de huisstijl van de Nederlandse Spoorwegen

## Week 1
### Dag 1

Wat heb ik vandaag gedaan?
- Ik heb vraag 1 van het formulier helemaal uitgetipt in HTML en alvast wat input types en attributen gegeven
- Daarnaast heb ik de progressive disclosure voor vraag 1 helemaal uitgewerkt in CSS. Maar ik kwam erachter dat dit niet goed werkt, als je later een vraag in het begin bewerkt, omdat de display: none; niet de checked attributen weghaald. Helaas. Dus eigenlijk was mijn werk van vandaag voor niks.
- De weekly geek gelezen over de nieuwe tahoe icons

Hoe lang duurde het?
- 4 uur

Wat heb ik geleerd?
- Hoe ik progressive disclosure met CSS kan implementeren maar ook dat ik dat beter niet moet doen omdat het niet helemaal goed werkt :)

Wat ga ik morgen doen?
- kijken naar hoe ik de progressive disclosure beter met javascript kan maken. 
- kijken naar error prevention



### Dag 2

Wat heb ik vandaag gedaan?
- Ik probeerde progressive disclosure met javascript op te lossen omdat CSS heel moeilijk leek. Maar dit bleek ook ontzettend moeilijk te zijn. Ik heb heb allemaal opgegegeven en in de laatste 20 minuten alle JavaScript verwijdert en toch meer met CSS begonnen. Helaas heb ik een heel specifieke visie in mijn hoofd hoe alles moet werken en dat blijkt heel lastig gedaan.

Hoe land duurde het?
- 4 uur

Wat heb ik geleerd?
- Dat progressive disclosure gewoon moeilijk is. Zowel met CSS als met JavaScript. En dat ik het niet snap. En dat ik het niet meer leuk vind als het niet werkt. 

Wat ga ik morgen doen?
- Nieuw vak, CSS! Alleen ben ik dus nog helemaal niet ver met dit vak, en ik zou graag verder willen werken. Maar hopelijk is het morgen weer leuker.


### Weekly Check-Out
Ik heb deze week heel veel geprobeert en niet heel veel bereikt. Ik wilde graag elke vraag een voor een laten zien en alleen de nodige vervolgvragen open klappen. Daarmee heb ik de hele structuur van het formulier omgegooid, maar helaas kreeg ik dat niet werkend. Ik kon ook moeilijk om hulp vragen omdat ik dus zo'n andere layout gebruikte dan andere mensen, dus hun oplossingen voor de progressive disclosure werkten niet bij mij. Maar na heel veel proberen en falen en kijken wat andere mensen hebben gedaan heb ik toch maar besloten om het op dezelfde manier op te lossen als mijn klasgenoten. Dus 3 regels CSS en tóch wel de originele layout van het belastingformulier. 


## Week 2
### Dag 3

Wat heb ik vandaag gedaan?
- Workshop JS validation
- Ik heb de tweede pattern van vraag 3a in mijn HTML gezet
- Ik dacht, dat ik het beste een radio selectie kan maken, en dat dan de label van de radio button ook de label van de aantal-input wordt. Alleen bleek dat niet heel goed te werken. Ik kon in JS ervoor zorgen dat de label reassigned wordt bij selectie, maar dan gaan er dingen mis bij het formulier versturen, want wat gebeurd er dan met de radio button die geen label meer heeft?
- Dus ik heb vervolgens iets anders geprobeerd. Elke radio button had wat extra uitleg over de aantal-input. Dus ik heb ervoor gezorg dat die extra uitleg een aparte label voor de aantal-input wordt. De label veranderd nu afhankelijk van welke radio button is geselecteerd, en de extra uitleg wordt door JS uit de radio button label gehaald. Als JS breekt, is de extra uitleg dus nog wel te lezen.
- Ik heb de weekly geek gelezen

Hoe lang duurde het?
- 4 uur zelf werken

Wat heb ik geleerd?
- dat je best wel veel dingen op true/false kunt checked in JS, zelfs een document.querySelector

Wat ga ik morgen doen?
- Alvast een beetje CSS, de huisstijl kleuren in mijn CSS zetten
- Beginnen aan validatie
- Vraag 3b toevoegen


### Dag 4 
Wat heb ik vandaag gedaan?
- Ik heb vandaag gekeken naar zowel CSS als ook Javascript validatie. Ik heb automatische capitalization toegevoegd voor de velden waarvoor dat nodig is. Verder heb ik de 11 proef toegepast op de BSN nummer velden, en ik heb ervoor gezorgd dat Javascript het huidige datum ophaalt en op basis daarvan de datum velden een max value geeft. En ik heb ervoor gezorgd dat alle velden die zichtbaar zijn required zijn en alles wat niet zichtbaar is niet required is.

Hoe lang duurde het?
- de hele dag

Wat heb ik geleerd?
- JS validatie toepassen, dat had ik nog nooit eerder gedaan

Wat ga ik morgen doen?
- Beginnen aan styling!!

### Weekly check-out
Tijdens de check-out hebben we besproken, dat voor mij de volgende stap gaat zijn om styling te doen. Ik wilde eerste een goede basis neerzetten, en mijn feedback was dat dat ook het geval was. Maar toch lijkt voor mezelf het alsof ik nog niet heel ver ben, omdat ik dus nog helemaal geen styling heb. Maar het was goed om te horen dat ik toch al best ver ben.
Wat ik nog zou kunnen doen, is wel nog een extra pattern toevoegen omdat mijn extra pattern toch nog wat weinig is. Verder kan ik nog overwegen om mijn progressive disclosure andersom te stylen, dus vragen pas laten zien als je op ja klikt in plaats van verbergen.


## Week 3
### Dag 5 
Wat heb ik vandaag gedaan?
- ik was ziek dus ik heb thuis een klein beetje verder gewerkt. 
- Ik heb mijn progressive disclosure omgedraaid zoals besproken bij de voortgang. 
- Ik eindelijk aan de styling gewerkt en er tegen aan gelopen dat mijn error messages wel door de browser getoond worden maar dat dat mijn velden niet in CSS invalid maakt... ik weet niet zo goed wat ik hieraan moet doen
![validity](/images/readme/validity.png)
- Verder heb ik voor nog meer progressive disclosure ervoor gekozen om van de verschillende vragen details te maken, zodat er niet altijd het hele formulier open staat
![details](images/readme/details.png)

Hoe lang duurde het?
- de hele dag

Wat heb ik geleerd?
- dat validity in CSS en JS niet zo goed samenwerkt... of ik iets verkeerd doe, dat kan ook

### Dag 6
Wat heb ik vandaag gedaan?
- Ik heb vandaag alleen maar aan JavaScript validatie gewerkt. Er gingen eerst dingen mis met de combinatie aan Javascript en CSS validatie maar dat is nu opgelost.

Hoe lang duurde het?
- de hele dag

Wat heb ik geleerd? 
- heel veel javascript, ik denk dat ik er morgen nog meer ga leren want dan ga ik alles wat overzichtelijker maken, nu staat alles los maar ik denk dat ik dat ook nog algemener kan doen.

Wat ga ik morgen doen?
- Mitchel zei: "wat als de javascript uit staat?". Dat is een hele goede vraag. De validatie doet het dan volgens mij niet meer zo goed. Hm. Ik moet even kijken wat ik daarmee doe. 
- Validatie mooier maken, het werkt nu wel goed maar soms op momenten waarop je dat niet wilt. Zoals als je de pagina opent. 
- Betere styling voor de delen waar ik nu nog geen aandacht aan heb besteed


## Week 4
### Dag 7 
Wat heb ik vandaag gedaan?
- Final sprints!! die niet helemaal zo final zijn omdat ik nog veel moet doen.
- Ik heb de tweede pattern toegepast. Ik had tot nu toe alleen maar vraag 3a in mijn code maar ik heb nu ook nog 3b en 3c toegevoegd. Dus ik heb eraan gewerkt dat ik met javascript nieuwe verkrijgers kan toevoegen, maar dat er ook een bepaald aantal verkrijgers beschikbaar zijn als de Javascript uitstaat. Ik voeg hier dynamisch met JS nieuwe HTML toe, maar ik heb ook verkrijgers die op display none staan. Ik heb ervoor gezorgd dat de button om nieuwe verkrijgers toe te voegen verdwijnt als je Javascript uitzet en dat alle 4 standaard verkrijgers te zien zijn. 
- Verder heb ik alles aangepast wat nog niet goed werkte, ik heb opnieuw naar alle validatie gekeken en wat extra dingen toegevoegd
- Ik heb verder een error samenvatting voor bovenin de pagina toegevoegd als je op submit klikt
- Thuis heb ik nog fouten opgelost die ik in de laatste 5 minuten van de les heb gevonden

Hoe lang duurde het?
- de hele schooldag en een stukje van de avond

Wat heb ik geleerd?
- Niet zo veel...ik ben vooral heel veel door de war geraakt met Javascript. Ik heb niet het gevoel dat ik nog heel elegante code heb..

Wat ga ik morgen doen?
- Ik ga mijn Javascript niet meer aanraken voordat mijn vormgevinng helemaal af is


### Dag 8 
Wat heb ik vandaag gedaan?
- Vandaag heb ik alleen maar aan vormgeving gewerkt. Ik was hier nog helemaal niet ver mee, maar het is nu allemaal gefixt!
- Ik heb ermee gespeeld om alle legends sticky te maken omdat mijn formulier een heel lang scrollbare pagina is. Maar uiteindelijk heb ik besloten om dat niet te doen omdat het te onoverzichtelijk werd.
- Ik had eerst alle errors na de input staan maar tijdens de Weekly Nerd over NL Design system werd gezegd dat dat niet handig was, dus ik heb de errors onder de labels gezet
- Ik heb alle vormgeving afgekregen!
- Aan het einde heb ik nog een light-darkmode slider gemaakt en de kleuren een klein beetje aangepast

Hoe lang duurde het?
- De hele dag

Wat heb ik geleerd?
- Ook al denk je alle kleuren van een design system goed te hebben toegepast klopt dat niet altijd als je de darkmode activeerd

Wat ga ik morgen doen?
- Misschien nog wat kleine aanpassingen maar eigenlijk ben ik wel klaar!

## Eindreflectie

- Ik ben best blij met mijn eindproduct. Ik had nog veel meer willen doen, en eigenlijk wilde ik mijn hele project omgooien na de Weekly Nerd over NL Designsystem, maar ik heb er nu gewoon het beste van gemaakt, want dat was mij niet meet gelukt. Ik begon vooral met de validatie en ik was daar eigenlijk tot aan het einde mee bezig. In totaal heb ik eigenlijk maar twee dagen aan de vormgeving gewerkt en verder vooral heel veel validatie gedaan. En progressive disclosure. Daar heb ik heel veel over nagedacht en eindelijk niet bereikt wat ik wilde.

- Proces 1: Progressive disclosure
    - Ik zag voor me, dat je met een pagina begint waar maar 1 vraag opstaat, en dat je vanaf daar met elk antwoord alleen maar de vragen laat tonen die nodig zijn tot de volgende keuze. Ik had een opdeling gemaakt van alle vragen en hierdoor eigenlijk de hele vormgeving en indeling van het oorspronkelijke formulier genegeerd. 
    - Er waren geen stappen meer, maar gewoon vraag 1, daarna vraag 2 en 3 die samen verschijnen, daarna vraag 4, enzovoort. Maar het grootste probleem hiermee was, dat dit super specifiek was. Eigenlijk moest ik voor elke vraag een eigen indeling verzinnen en in CSS met IDs de vragen aanspreken die ik zichtbaar wilde hebben op basis van andere vragen. Dit kon ook niet met een mooi "laat alle vragen die in het fieldset zitten zien ~" omdat ik dus geen fieldsets meer had met een duidelijke indeling. Dus het kon alleen maar handmatig, vraag per vraag. 
    - Verder liep ik hier tegen aan dat het niet helemaal goed werkte, omdat ik ook wilde dat vragen die display:none; waren andere vragen niet meer konden beïnvloeden. Maar display:none; zet niet het "checked" attribuut uit. Dus das was jammer. Ik besloot om op te geven, omdat er vast een makkelijkere en algemenere manier bestond om dit te doen.
    - Ik probeerde toen om hetzelfde te doen, maar dan met Javascript en door het uitzetten van het checked attribuut. In theorie had dit ook heel goed kunnen werken, maar omdat ik dus geen algemene functies kon schrijven omdat elke vraag andere vragen laat verschijnen en niet algemeen "deze vraag laat alles verschijnen wat in het fieldset zit" kon ik het niet algemeen maken. En dus had ik heel veel functies die heel veel verschillende dingen deden en elkaar in de weg kwamen. Het wilde gewoon niet lukken. Ik keek naar wat andere mensen hadden gedaan kwa progressive disclosure en besloot uiteindelijk om toch maar de indeling van het formulier bij te houden, meerdere fieldsets en groepen (zoals 1a, 1b, 1c, etc) te gebruiken en het met 3 regels CSS op te lossen.
    - Het werkte. Maar niet op de manier die ik in mijn hoofd had. Maar nu kan alles wel veel algemener en makkelijker, dus waarschijnlijk is het toch de betere oplossing.

- Proces 2: Validation
    - Ik begon met Javascript Validatie voordat ik aan de CSS validatie begon, en dat was niet slim. Want toen ik een aantal customValidities had gedefined kwam ik erachter, dat deze niet automatisch de CSS beïnvloeden. Dat was jammer. Toen besloot ik om de hele CSS validatie uit te zetten, maar daarna kwamen veel meer dingen de voorschijn die het niet meer deden, en zonder javascript werkte het allemaal niet meer. Ik moest toen gaan werken met custom-error classes, waarop ik de CSS validatie uitzette en voor de rest het zo laten als het was. Na heel veel gedoe met valid vs user-invalid en mijn eigen classes .valid en .invalid vond ik een oplossing waarmee de validatie ook nog goed werkt als mijn javascript uitgezet staat.

- Proces 3: Pattern 3a
    - Ik begon aan 3a omdat ik eigenlijk de pattern van 3b wilde toepassen en toen kwam ik erachter dat vraag 3a ook wel zijn eigen pattern is. Het is een multiple choice vraag die beïnvloed hoe vervolgens een nummer input moet worden ingevuld.
    - Het eerste wat ik probeerde was, dat steeds het label van de geselecteerde input vervolgend ook het label werd van de nummer input. Maar ik probeerde hier dus een label te reassignen en dat werkte uiteindelijk toch niet helemaal goed. De screenreader raakte helemaal door de war, omdat het niet duidelijk was dat hetzelfde label plotseling het label was voor een andere input. Ook was het vervolgens lastig om je keuze te veranderen, omdat de keuze zelf geen label meer had. Dus besloot ik om dat idee weer te vergeten.
    - Daarna besloot ik om een eigen label voor de nummer-input te maken, die heel algemeen is. De extra uitleg die ik in de label van de nummer input wilde hebben stopte ik in een span in de label van de radio button. Vervolgens zorgde ik ervoor dat javascript de <span> verbergt, en bij het selecteren van de radio button de text-content van het nummer-input label aangepast wordt naar de span uit de radio input label. Hierdoor is zowel met als ook zonder javascript duidelijk wat er precies in de nummer input moet worden ingevuld.

- Proces 4: Patter 3b
    - In 3b besloot ik om de verkrijgers met CSS allemaal duidelijk te vertonen, en ik besloot om er maximaal 4 aan te maken omdat er in de PDF ook maximaal 4 zijn. Ik probeerde eerst om er met CSS maximaal 4 te vertonen en dat je vervolgens met javascript nog meer kunt toevoegen, maar omdat mijn logica met de error states heel veel ingewikkeld is en elk element een eigen ID moet hebben lukte het me niet om dat helemaal goed werkend te krijgen. Ik had helaas ook geen tijd meer om dat wel nog te fixen. 
    - Maar het is nu wel mogelijk om de verkrijgers een voor een toe te voegen en ook elke verkrijger weer te verwijderen (en dan verandert ook de naam van de verkrijger bijv. van Verkrijger 2 naar Verkrijger 1 op basis van de positie). 




- Wat kan beter?
    - Ik probeerde in het begin alle IDs en classes naar het Engels te vertalen zodat mijn code ook duidelijk is als je geen Nederlands spreekt. Maar op een bepaald moment liep ik er tegenaan dat ik niet wist hoe ik bepaalde dingen moest vertalen en toen heb ik alles toch maar een Nederlandse naam gegeven. Ik dacht toen dat ik dat nog zou veranderen maar dat heb ik uiteindelijk niet meer gedaan, omdat er niet meer zo veel tijd was en ik al zoveel IDs in JavaScript had gebruikt dat waarschijnlijk alles stuk was gegaan als ik dat nog snel had veranderd. 
    - Tijdens de Weekly Nerd over NL Design System werd er gezegd dat het handig is om extra uitleg buiten de form te gebruiken, omdat dat anders niet goed werkt voor Screenreaders. En dat het daarom handig is om meerde stappen te maken en niet een heel lang formulier. Maar er werd ook gezegd dat je alleen maar met local storage en verschillende stappen moest werken als je tijd over had, en dat had ik niet, want de weekly nerd was ook best laat in het proces. Dus ik heb nu geen stappen maar daarom ook geen duidelijk uitleg bij elke stap, omdat dat niet in een form moest, maar er was voor mij geen mogelijkheid meer om dat aan te passen.
    - Ik heb momenteel nog geen overzicht van alle vragen als je alles hebt ingevuld en op submit klikt. Momenteel gebeurd er helemaal niks als je op de submit button klikt. Dat kan beter.
    - Ik zou wel nog graag gebruikers de mogelijkheid geven om meer dan 4 verkrijgers toe te voegen in stap 3b, maar dat wilde niet lukken en ik had niet meer genoeg tijd om dat te fixen. 






## Bronnen

- Parent element met de class "step" ophalen: https://chatgpt.com/c/69944df7-89ec-832b-b1fe-6797e323fec2
- Closest parent element https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
- Elf proef https://financieel.infonu.nl/diversen/180745-elfproef-voor-rekeningnummer-of-burgerservicenummer-bsn.html
- Current time https://www.geeksforgeeks.org/javascript/how-to-get-current-time-in-javascript/
- Date https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- Custom details arrow https://www.tutorialpedia.org/blog/can-i-replace-the-expand-icon-of-the-details-element/