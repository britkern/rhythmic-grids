
function getAvailableSystemFonts() {
  detective = new FontDetector();  // (c) Lalit Patel [see /js/font-detector.js]
  // alternativedetection via ComicSans (?) [see /js/font-detector-temp.js]
  // font.setup();

  var fontList = getFontList(),
      currFont = null,
      availableFonts = [];

  fontList.forEach(function(fontName){
    // console.log("%s: %s", fontName, detective.detect(fontName) );
    if (detective.detect(fontName)){
      availableFonts.push(fontName);
    }
  });

  console.log('Available system fonts %s/%s', availableFonts.length, fontList.length);
  return availableFonts;
};

/////////////////////////////////////////////////////////////////////////////

function createSelectOptions(id, values) {
  var select = $(id);
  
  values.forEach(function(val, idx) {
    var option = $('<option>').prop('value', val).text(val);
    if (!idx) option.prop('selected', true);  // make 1st option a default selection
    select.append(option);
  });

  // select.on('change', onFontSelect);
  // initialize dropdown values (from previous session if any)
  // select.find('option[value="'+(localStorage.getItem(id) || 16)+'"]')
  //       .attr('selected','selected')
  //       .parent()
  //       .trigger('change');

  return ;
}


/////////////////////////////////////////////////////////////////////////////

// font selection event handler
function onFontSelect(e) {
    var id = $(this).attr('id');  // font dropdown
    if (!id)  id = $(this).parent().attr('class')  // fontsize or lineheight input

    // TOFIX event fired twice every time
    // console.log(id); 
    // in order to remember selections between sessions
    // localStorage.setItem(id, this.value);
    // console.log("onChange: %s %s", id, this.value );

    // update text sample according to the selected item
    switch(id){
    case 'fontSelect':
      $('.example-text').css('font-family', this.value, "monospace"); //fallback: Helvetica,Arial
      curr_typeface = this.value;

      // // re-draw font metrics
      // drawMetrics(curr_typeface, $('#metrics-text-eb').val() );
      // drawText(curr_typeface, $('#metrics-text-eb').val() );
      break;

    case 'input-fontsize':
        $('.example-text').css('font-size', parseInt(this.value)+'px');
        break;
    case 'input-lineheight':
        $('.example-text').css('line-height', parseInt(this.value)+'px');
        break;
    }

};

/////////////////////////////////////////////////////////////////////////////
function onInputChange(e) {
    var input = $(e.target);
    var code = (e.keyCode || e.which);
      // (down, left)
      if( [40/*, 37*/].indexOf(code) > -1 ) {
        input.val(parseInt(input.val())-1+'px')
      }
      // (up, right)
      if( [38/*, 39*/].indexOf(code) > -1 ) {
        input.val(parseInt(input.val())+1+'px')
      }
      $(this).trigger('change');  
}
/////////////////////////////////////////////////////////////////////////////

function getFontList() {
  return [
    "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", 
    "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", 
    "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", 
    "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", 
    "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", 
    "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", 
    "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", 
    "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", 
    "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", 
    "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93",
    "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB",
    "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", 
    "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", 
    "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps",
    "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", 
    "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", 
    "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", 
    "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", 
    "Californian FB", "Calisto MT", "Calligrapher", "Candara", 
    "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", 
    "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", 
    "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", 
    "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", 
    "Colonna MT", "Constantia", "Cooper Black", "Copperplate", 
    "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light",
    "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", 
    "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", 
    "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", 
    "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", 
    "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT",
    "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", 
    "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS",
    "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", 
    "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", 
    "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT",
    "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", 
    "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", 
    "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", 
    "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", 
    "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", 
    "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", 
    "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", 
    "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", 
    "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", 
    "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", 
    "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", 
    "Heather", "Heiti SC", "Heiti TC", "HELV", "Helvetica", "Herald", "High Tower Text", 
    "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", 
    "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", 
    "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", 
    "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", 
    "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", 
    "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", 
    "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", 
    "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", 
    "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", 
    "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC",
    "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", 
    "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", 
    "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC",
    "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", 
    "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", 
    "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", 
    "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", 
    "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", 
    "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti",
    "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", 
    "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", 
    "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT",
    "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", 
    "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx",
    "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", 
    "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", 
    "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", 
    "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", 
    "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina",
    "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", 
    "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold",
    "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET",
    "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", 
    "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", 
    "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", 
    "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", 
    "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC",
    "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer",
    "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT",
    "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", 
    "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal",
    "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan",
    "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", 
    "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", 
    "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani",
    "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", 
    "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", 
    "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT",
    "Zurich Ex BT", "ZWAdobeF"
  ];
}