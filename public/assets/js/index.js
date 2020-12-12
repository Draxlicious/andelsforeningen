let context = document.querySelector(".context")
let titleElement = document.createElement("h1")
let pElement = document.createElement("p")


function getTitle(fragmentId, callback){
    
    var titles = {
        home: "Forside",
        nyheder: "Nyheder",
        historik: "Historik",
        vedtaegter: "Vedtægter",
        venteliste: "Beskyttet Venteliste",
        fremleje: "Fremleje",
        husorden: "Husorden",
        gaardlaug: "Gårdlaug",
        affald: "Affald",
        haandvaerkere: "Håndværkere",
        kalender: "Kalender",
        nyhedsbrev: "Nyhedsbrev",
        kontakt: "Kontakt",
        bestyrelsen: "Bestyrelsen",
        adminstrator: "Adminstrator"

      };
      callback(titles[fragmentId])
}

function getParagraph(fragmentId, callback){
    
    var paragraph = {
        home: "Velkommen til hjemmesiden for Andelsforeningeå frederiksberg<br><br>På hjemmesiden kan du finde en række relevante oplysninger om foreningen. Har du spørgsmål, så kan du kontakte foreningens bestyrelse her. Du er også velkommen til at kontakte bestyrelsen, hvis du har forslag vedrørende hjemmesidens indhold.",
        nyheder: `Storskrald:<br>
        Der vil blive afhentet storskrald af følgende kategorier d. 14/11 kl 08:<br>
        Stort brændbart<br>
        Imprægneret træ<br>
        Stort jern og metal<br>
        PVC<br>
        Samt stort elektronik d. 15/11 kl 08.<br>
        Storskrald må først sættes ned DAGEN INDEN AFHENTNING. Der vil blive sat skilte med kategorierne op i gården. Der må derfor (som altid) heller ikke stå nogle cykler parkeret op af husmuren ved bommen – videregiv venligst denne information til medbeboere, lejere mm.<br>
        VH<br>
        Bestyrelsen",<br>`,
        historik: `Andelsforeningen blev stiftet i december 2010 og ligger på Frederiksberg C.<br>`,
        vedtaegter: "Andelsforeningens gældende vedtægter kan findes her. Vedtægterne er senest opdateret i forbindelse med foreningens ordinære generalforsamling i 2017.",
        venteliste: "Andelsforeningens gældende vedtægter kan findes her. Vedtægterne er senest opdateret i forbindelse med foreningens ordinære generalforsamling i 2017.",
        fremleje: `I andelsforeningen gælder følgende overordnede regler for hel eller delvis fremleje og udlån af andelsboliger:<br>
        Andelshavere, som var med til at stifte andelsforeningen, har ret til at fremleje eller udlåne deres andelsbolig i en tidsubegrænset periode. Foreningens bestyrelse skal dog godkende fremlejetageren.<br><br>
        Andelshavere, som ikke var med til at stifte andelsforeningen, skal have boet i deres andelsbolig i et halvt år, før de er berettigede til at fremleje eller udlåne deres andelsbolig i op til to år. Foreningens bestyrelse skal godkende fremlejetageren. Når en andelshaver har haft sin andelsbolig fremlejet eller udlånt, skal andelshaveren bebo sin bolig i et år, før fremleje eller udlån igen kan godkendes.<br><br>
        Alle andelshavere, som fremlejer eller udlåner deres andelsbolig, skal skriftligt meddele deres nye adresse til andelsforeningens administrator. Du kan finde administrators kontaktoplysninger her. Det er altid den fremlejegivende andelshaver, som er ansvarlig for at indbetale den månedlige boligafgift på administrators konto.<br><br>
        Uanset om andelshavere kun delvist fremlejer deres andelsbolig, så skal foreningens bestyrelse orienteres om fremlejen.<br><br>
        Du kan læse de fyldestgørende regler for fremleje i § 12 i andelsforeningens vedtægter. Du finder foreningens vedtægter her.`,
        husorden: "Andelsforeningen har en fælles husorden, som du kan læse her. Husordenen er godkendt på foreningens generalforsamling i marts 2016 og har derefter været i høring hos samtlige lejere i foreningen. Ingen lejere i foreningen havde indsigelser til husordenen og den er derfor godkendt og gældende for alle foreningens beboere. Husordenen er revideret på foreningens ordinære generalforsamling i 2017.",
        gaardlaug: `Andelsforeningens bestyrelse har stiftet et gårdlaug for andelshavere og lejere. Gårdlauget sørger for, at der er hyggeligt og pænt i gårdens grønne områder. Ønsker gårdlauget at lave større forandringer i udformningen gårdens grønne områder, skal dette ske i samarbejde med foreningens bestyrelse.<br><br>
        Er du interesseret i at være en del af gårdlauget, skal du kontakte foreningens bestyrelse her. Bestyrelsen vil herefter sætte dig i kontakt med gårdlaugets medlemmer.`,
        affald: `Frederiksberg Kommune tømmer affald på frederiksberg på følgende dage:<br><br>

        Husholdningsaffald: Hver onsdag<br>
        Pap: Mandag ulige uger<br>
        Papir: Tirsdag ulige uger<br>
        Batterier: Tirsdag ulige uger<br>
        Metal: Hver 4. mandag<br>
        Plastik: Onsdag ulige uger<br><br>
        Seneste version af kommunens tømningskalenderen kan altid hentes på kommunens hjemmeside her, mens du kan finde kommunens sorteringsguide her.<br><br>
        
        Tømning af skrald, som ikke fremgår af listen ovenfor, skal altid bestilles af andelsforeningens bestyrelse. Bestyrelsen bestiller så vidt muligt storskrald i forbindelse med foreningens arbejdsdage. Du kan finde en oversigt over datoer for arbejdsdagene her.`,
        haandvaerkere: `Andelsforeningen samarbejder med en række faste håndværkere. Du kan se en oversigt over håndværkerne her. Oversigten opdateres løbende.<br><br>

        Det er vigtigt at bemærke, at rekvirering af håndværkere altid skal foregå via foreningens bestyrelse, når udgifterne for det arbejde, som håndværkerne skal udføre, tilfalder foreningen. Hvis foreningens lejere skal have gennemført udbedringer eller reparationer i deres lejemål, skal rekvireringen af håndværkere således altid ske via foreningens bestyrelse. Bestyrelsen kan kontaktes her.<br><br>
        
        Det er bestyrelsens ambition, at foreningen altid har et fast samarbejde med to personer indenfor det samme håndværk. Bestyrelsen arbejder løbende på at indfri denne ambition.`,
        kalender: `Bestyrelsesmøder<br><br>

        &nbsp * Tirsdag den 13. juni kl. 17.00 til 18.00 (gennemgang af bygninnger)<br>
        &nbsp * Næste møde opdateres løbende<br>
        Kaffemøder mellem andelsforening og lejerforening<br><br>
        
        &nbsp * Nyt møde ikke aftalt<br>
        Arrangementer i gården<br><br>
        
        &nbsp * Ingen meldt ind pt.<br>
        Generalforsamling<br><br>
        
        &nbsp * d 17 maj 2018<br>
        Arbejdsdage<br><br>
        
        &nbsp * Den 5. maj kl 10 2018<br>
        &nbsp * Den 6. maj kl. 10 2018<br>`,
        nyhedsbrev: "Hvis man ønsker at modtage en email, når der kommer en nyhed på hjemmesiden, skal man tage kontakt til bestyrelsen via bestyrelsesmailen på blabla@gmail.com eller via vores kontaktform. Bestyrelsen vil derefter tilføje dig manuelt til maillisten",
        kontakt: `Andelsforeningens bestyrelse kan kontaktes ved at sende en e-mail eller udfylde nedenstående formular:<br><br>

        Andelsboligforeningen 105<br>
        City 105<br>
        Frederiksberg C.<br>
        Mail: blabla@gmail.com<br><br>
        <label>Name</label><br>
        <input type="text"><br><br>
        <label>E-mail</label><br>
        <input type="text"><br><br>
        <label>Din besked</label><br>
        <textarea rows="4" cols="120" placeholder="Skriv din besked her..."></textarea>
        <input type="submit" value="Send">
        `,
        bestyrelsen: "Informations udbydere til medlemmer",
        adminstrator: "adminstrator holder styr på information online",
    };


        // if(location.hash == "#venteliste"){
        //     let extraElement = document.createElement("INPUT")
        //   //   extraElement.setAttribute("type", "text")
        //   //   extraElement.placeholder = "i am alive"
  
        //     context.appendChild(extraElement)
        // }else if(location.hash != "#venteliste"){
        //         context.removeChild(extraElement)
            
        // }
      
      callback(paragraph[fragmentId])
}


function loadContent(){
    console.log(location.hash);
    titleElement.innerHTML = location.hash

    fragmentId = location.hash.substr(1)

    getTitle(fragmentId, function (content) {
        titleElement.innerHTML = content;
      });

    getParagraph(fragmentId, function (content) {
        pElement.innerHTML = content;
        
      });
}

window.addEventListener("hashchange", loadContent);
loadContent()

titleElement.style.margin = "1em 0"
context.appendChild(titleElement)
context.appendChild(pElement)

if(!location.hash){
    titleElement.innerHTML = "Forside"
    pElement.innerHTML =  "Velkommen til hjemmesiden for Andelsforeningeå frederiksberg<br><br>På hjemmesiden kan du finde en række relevante oplysninger om foreningen. Har du spørgsmål, så kan du kontakte foreningens bestyrelse her. Du er også velkommen til at kontakte bestyrelsen, hvis du har forslag vedrørende hjemmesidens indhold."
}