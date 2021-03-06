# Javascript egzamino užduotis. Variantas 5B
## “Kolt paspirtukų nuoma”
1. Užduoties sprendime reikia pademonstruoti visas technologijas, kurias išmokote kurso
metu. Užduoties sprendime turi būti panaudotos sekančios technologijos: html, css
(galima naudoti, bet neprivaloma sass, arba postcss arba bet kokį css karkasą
bootstrap, tailwind ar panašų), serverio pusės javascript vykdymas node.js aplinkoje
(galima, bet neprivaloma naudoti karkasą express.js, nest.js, sails.js ar panašų), kliento
pusės javascript vykdymas naršyklėje būtinai panaudojant arba Angular karkasą arba
React biblioteką ir duomenų saugojimui serverio pusėje panaudojant reliacinę duomenų
bazę (MySQL arba MariaDB).
2. Atlikite sekančias užduotis:
## Užduotis 1.
Sukurkite duomenų bazės lentelę pagal schemą:
![](img.png)

Duomenų bazės pavadinimą sugalvokite patys. Jeigu reikia, duomenų bazės lentelę
galite papildyti papildomais stulpeliais.
## Užduotis 2.
Naudodami Angular karkasą arba React biblioteką sukurkite vieno puslapio aplikaciją
(SPA), kurioje vartotojas galėtų atlikti pilną “Kolt” paspirtukų administravimą (CRUD).
Kiekvienas paspirtukas turi turėti savo vizualiai atskirtą aprašą, kuriame būtų pateikta
visa informaciją apie jį. Šalia turi būti mygtukas “Trinti”, kurį paspaudus atitinkamo
paspirtuko įrašas būtų pašalinamas iš duomenų bazės. Šalia įrašo su paskutinio
naudojimo data turi būti laukelis su naujos datos įvedimu. Šalia laukelio su paspirtuko
rida (kilometrais) turi būti laukelis, kuriame galima būtų įvesti tos dienos paspirtuku
nuvažiuotą atstumą. Per dieną nuvažiuoti kilometrai sumuojasi su bendru kiekiu ir suma
įrašoma į duomenų bazę. Įrašas iš duomenų bazės laukelio is_busy turi būti
paverčiamas į “užimtas” arba “laisvas”, priklausomai nuo laukelio reikšmės. Šalia šio
laukelio turi būti checkbox tipo įvedimas, kuris leistų keisti užimtumą. Duomenų
redagavimas turi būti atliekamas paspaudus “Redaguoti” mygtuką. Registracijos kodas
(aštuoni raidiniai skaitiniai simboliai) neturi būti radaguotinas (įrašomas tik kuriant naują
paspirtuką).
Paspirtukų aprašo viršuje (arba apačioje) turi būti atvaizduota tuščia forma su naujam
paspirtukui įvesti skirtais laukeliais ir mygtukas “Pridėti” formos vykdymui. Laukeliui
is_busy skirto įvedimo, kuriant naują paspirtuką daryti nereikia, nes naujai sukurtas
paspirtukas visada turi būti “laisvas”
## Užduotis 3.
Serveryje sukurkite prisijungimą prie duomenų bazės, web serverį, maršrutizatorių ir visą
bendravimo su naršykle logiką, užtikrinančią 2 užduoties įgyvendinimą serveryje.
Informacijos apsikeitimas tarp serverio ir naršyklės turi vykti JSON formatu.
## Užduotis 4.
Sukurkite naršyklėje esančio javascript bendravimo mechanizmą su serveriu, naudojant
atitinkamus užklausų metodus, asinchroniškai siunčiamus į serverį. Dinamiškai
renderinkite vaizdą naudodami Angular ar React, pagal duomenis JSON formatu
gaunamus iš serverio.
## Užduotis 5.
Sukurkite statistikos laukelius, kuriuose būtų atvaizduojamas paspirtukų kiekis ir bendras
visų paspirtukų nuvažiuotas kilometrų kiekis (duomenys gaunami iš serverio duomenų
bazės) Keičiantis duomenų bazės įrašams automatiškai turi keistis ir statistika.
## Užduotis 6.
Sukurkite rūšiavimo galimybę pagal nuvažiuotų kilometrų kiekį ir paskutinio naudojimo
datą (sukurkite du mygtukus, kuriuos paspaudus paspirtukų aprašai išsirikiuotų
atitinkama tvarka). Tam panaudokite Angular ar React galimybes (ne serverio).
3. Aplikacija turi atrodyti estetiškai ir turi būti padaryta adaptyvaus dydžio (responsive).
Galite prisidėti prie aplikacijos tobulinimo ir pridėti naujų, sąlygoje neaprašytų
funkcionalumų ar vartotojo patirtį gerinančių patobulinimų. Papildomus dalykus užduotyje
pridėkite tik tada, kai pilnai įvykdėte visas užduotis.

## Authors
Virdžinija: [Github](https://github.com/VirdzinijaG)