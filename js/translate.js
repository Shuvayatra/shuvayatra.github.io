$(function() {
  var lang = 'en';

  if (window.location.href && window.location.href.indexOf('nepali') > -1) {
    lang = 'ne';
  }
  if (window.navigator.language && window.navigator.language.split('-')[0] == 'ne') {
    lang = 'ne';
  }

  var languages = {
    ne: {
      Shuvayatra: "शुभयात्रा",
      About: "विषय",
      Contact: "सम्पर्क",
      Resources: "श्रोतहरु",
      the_safe_journey_app: "वैदेशिक रोजगारमा जाने नेपाली कामदारको लागि शुभयात्रा APP",
      the_shuvayatra_mobile_app: "सुरक्षित वैदेशिक रोजगारको निमित्त शुभयात्रा APP",
      "E-mail address": "ईमेल टाइप गर्नुहोस्",
      "Get updates": "अपडेट प्राप्त गर्नुहोस्",
      "Information migrants need to stay safe": "सुरक्षित वैदेशिक रोजगारको लागि आवश्यक जानकारीहरु",
      every_day_close: "दैनिक २,००० नेपाली युवाहरु अस्थायीे रोजगारीको खोजीमा नेपालबाट खाडी र पुर्वी एशियाली मुलुकहरु जाने गर्दछन् । ती मध्ये धेरै युवा कामदारहरु वैदेशिक रोजगारका प्रक्रिया र त्यससँग सम्बन्धित कठिनाईहरुबारे अनभिज्ञ भई  शोषण, मानव बेचबिखन र आर्थिक प्रलोभनको शिकार बन्दछन् ।",
      with_nepal_mobile_phone: "नेपालमा झन्डै सत प्रतिसत मोबाईल फोनको प्रयोगकर्ताहरु छन् ।  मोबाईल फोनको माध्यमबाट  वैदेशिक रोजगारलाई सुरक्षित बनाउन सकिन्छ भन्ने  कुरामा हामी विश्वस्त छौ । शुभयात्रा मोबाईल APP मा वैदेशिक रोजगार सम्बन्धित विज्ञ, कानुनी विशेषज्ञ र वैदेशिक कामदारको अनुभवबाट निर्मित यी श्रव्य, दृश्य तथा लिखित जानकारी प्रदान गर्न सकिन्छ । यस शुभयात्राको माध्यमबाट निम्न विषयमा जानकारी प्राप्त गर्न सकिन्छ ।",
      "Labor rights and working conditions abroad": "कामदारको अधिकार र कामका अवस्था र वातवरण",
      "Work permits and the application process": "श्रम स्वीकृति  र निवेदन प्रक्रिया",
      local_dos_and_donts: "साउदी अरब, मलेशिया र कतारमा गर्न हुने र नहुने कार्यहरु",
      unique_women_content: "महिला : वैदेशिक कामदारको लागि",
      "Local knowledge": "स्थानिय ज्ञान",
      live_streaming_model: "शुभयात्राको प्रतिरूप यसरी तयार पारीएको छ, जसबाट प्रयोगकर्ताले खोजेका वैदेशिक रोजगार सम्बन्धि जानकारीहरु तुरुन्तै नेपाली भाषामा प्राप्त गर्न सकिनेछ ।",
      "Trusted information": "उपयुक्त जानकारी",
      our_partners: "हाम्रा साझेदारहरुको दशकौको अनुभव यस ब्एए मा समेटीएको छ । यसका सबै जानकारीहरु वैदेशीक रोजगारमा जाने कामदारका लागि उचित  र उपयोगी छन् ।",
      "Global network": "विश्वव्यापी सन्जाल",
      in_app_social_media: "यस APP मा सामाजिक सन्जालको सुविधा छ, जसले गर्दा वैदेशीक रोजगारमा गएका कामदारहरुले आफ्नु ज्ञान र अनुभव विश्वोब्यपी रुपमा आदानप्रदान गर्न सक्छन् ।",
      learn_more: "थप जानकारी",
      "Contact Us": "संपर्क गर्नुहोस्",
      backed_by_taf: 'शुभयात्राास <a href="http://asiafoundation.org/">द एशिया फाउण्डेसन</a>, <a href="http://nrna.org.np">गैर आवासिय नेपाली संघ</a> र विभिन्न नेपाली नविनकर्ता र सामाजिक उद्धमीहरुको समर्थनको प्रतिफल हो । सन् २०१६ मा शुभयात्रामा अझ धेरै विषयवस्तु समेटेर धेरै भन्दा धेरै नेपाली कामदारको जीवनमा सकारात्मक प्रभाव पार्ने उदेश्य राखेका छौ । हाम्रा प्रगति बारे जानकारी लिन, हामीलाई शुभयात्रा APP को सामाजिक सन्जालमा फेसबुक, ट्वीटर र यु-टिउबमा फलो गर्नुहोस् वा निम्न लिन्क क्लिक गरी हामीलाई सम्पर्क गर्नुहोला ।',
      welcome_collaboration: "हामी तपाईंसँग हरेक क्षणमा सहकार्य र सहयात्रा गर्न तत्पर छौंं । यदी तपाईंं पनि हामी जस्तै विश्व भरीका नेपाली कामदारको दिगोे विकासमा सङ्लग्न हुन चाहनु हुन्छ भने, तपाईंलाई स्वागत छ । हामीलाई देश र विदेशका  कामदारलाई सहयोग गर्न साथ दिनुहोस् ।",

      r_and_d: "श्रोत र तथ्याङ्क",
      the_team: "शुभयात्रा टिमले  सत्य र तथ्य परक विधि अपनाएर सुरक्षित वैदेशीक रोजगारको उदेश्य राख्दछ । हाम्रो उदेश्यले यो क्षेत्रमा काम गर्ने अन्यलाई पनि सहयोग पुर्याउछ भन्ने अपेक्षा गर्दछौ । जस्तै, हामीले विगतमा एसियाका वैदेशीक कामदारले भोग्नु परेका समस्याका बारेमा विवरण तयार पारेका थियौ । उक्त्त विवरणले सरकारी गैर-सरकारी संस्थाहरुलाई अझ प्रभाकारी रूपमा अघि बढ्न  दिशानिर्देश गरेको छ । आउदा दिनहरुमा अझै प्रभाकारी साझेदारीताको नीति अवलम्बन गरी सत्य र तथ्य परक माध्यमबाट शुभयात्रालाई अघि बढाउने प्रतिबद्ता वक्त गर्दछौ  ।",
      explore_publications: "हाम्रा प्रकाशन",
      "Who we are": "हामी को हौ",
      taf: '<a href="http://asiafoundation.org/">द एशिया फाउण्डेसन</a> अन्तराष्ट्रिय गैर सरकारी संस्था हो ।  यसको कार्यलयहरु १८ वटा एशियाली मुलुकहरुमा फैलिएका छ । एउटा स्थाई कार्यालय काठमाडौंमा पनि छ । नेपालमा द एशिया फाउनडेशनले अमेरीकी जनताको सहयोग USAID द्वारा सन्चालित मानव बेचविखन विरुद्धको (CTIP) कार्यक्रम लागु गरिरहेको छ । यो कार्यक्रमद्वारा बेचबिखनको रोकथाम, बेचबिखनमा परेकाहरुको संरक्षण र बेचबिखनमा संलग्न भएकालाई कानुनी कारवाही गरिन्छ।  सन् २०१४ मा फाउनडेशनले आफ्नो कार्य क्षेत्रलाई विस्तार गरी श्रम तथा रोजगार मन्त्रालयलाई पहिलो वैदेशिक रोजगारका लागि श्रम आप्रवासन स्थिति प्रतिवेदन तयार गर्न सहयोग गरेको थियो । उक्त्त स्थिति प्रतिवेदन २०१४/२०१५ को दोश्रो समश्करण द एसिया फाउनडेशन,अन्तरास्ट्रिय श्रम संगठन, अन्तरास्ट्रिय आप्रवासी संगठनको सहयोग र सहकार्यमा प्रकाशनको कार्य हुदै छ।',
      nrna: '<a href="http://nrna.org.np">गैर आवासिय नेपाली संघ</a> (एन आर एन ए) विदेशमा बस्दै आएका नेपालीहरुको विशिष्ट छाता संगठन हो। यसको च्याप्टर  ७३ मुलुकहरुमा छन् । जसमा धेरै संख्या मात्रमा नेपालहरु वैदेशिक रोजगारका  लागि जाने मुलुकहरु पर्दछन् । यस एन आर एन ए च्याप्टर, नेपालीहरुको  मिलनविन्दुको केन्द्र हो, जसले नेपाली आप्रवासीहरुलाई आकाशमिक समयमा  मद्धत गर्दछ।  काठमाडौंमा यस संगठनले आप्रवासन र वैदेशिक रोजगार सम्बन्धी आप्रवासीहरुलाई सुचना प्रदान गर्दछ।  यसको लागी सो संगठनले काठमाडौंको लेबर भिलेज र अन्तरराष्ट्रिय विमानस्थलमा सुचना केन्द्र संचालन गर्दै आएको छ। यसको साथै एन आर एन ए ले वैदेशिक रोजगारमा जाने कामदारको हक-हितको लागि प्रभाकारी निती र बलियो कानून निर्माणको निम्ति नेपाल सरकारसँग सहकार्य गर्दै आएको छ।'
    }
  };

  var polyglot = new Polyglot({ phrases: languages['ne'] });
  var _ = function (word, vars) {
    return polyglot.t(word, vars);
  };

  toNepali = function() {
    setTimeout(function() {
      $(".translatebtn").text("English").attr("href", "?t=" + (new Date() * 1));
      $(".translatebtn")[0].onclick = function() {};
    });
    $(".translate").each(function(i, item) {
      if ($(item).attr("placeholder")) {
        $(item).attr("placeholder", _($(item).attr("placeholder")));
      }
      if ($(item).attr('key')) {
        $(item).html(_($(item).attr('key')));
      } else {
        $(item).text(_($(item).text()));
      }
    });
    $("#aboutlink, #contactlink, .resourcelink").each(function(n, navlink) {
      $(navlink).attr('href', $(navlink).attr('href').replace('/', '/?nepali'));
    });
  };

  if (lang !== 'en') {
    toNepali();
  }
});
