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
      the_safe_journey_app: "नेपाली आप्रवासी काम्दारकालागि शुभ यात्रा App",
      the_shuvayatra_mobile_app: "शुभयात्रा App ले वैदेशिक रोजगारको प्रकृयालाई सुरक्षित र सफल बनाउंछ।",
      "E-mail address": "ईमेल ठेगाना",
      "Get updates": "नौलो जानकारी प्राप्त गर्नुहोस्",
      "Information migrants need to stay safe": "आप्रवासी काम्दार सुरक्षित रहन चाहिने महत्वपूर्ण जानकारीहरु",
      every_day_close: "दिनहुं झन्डै २,००० नेपाली युवाहरु अस्थायी कामको खोजीमा काठमाडौंबाट खाडी र पुर्वी एशियाली मुलुकहरु जाने गर्दछन्। त्यी मध्ये धेरै युवा कामदारहरु वैदेशिक रोजगारका प्रकृयाहरु र त्यस्का लुकेका कठिनाईहरुबारे अनभिज्ञ भई गएर शोषण, मानव बेचबिखन र आर्थिक समस्याको शिकारमा पर्दछन्।",
      with_nepal_mobile_phone: "नेपालमा मोबाईल फोनको प्रयोगकर्ताहरु झन्डै १००५ भएकाले, मोबाईल फोनको माध्यमबाट आप्रवासी काम्दारलाई सुरक्षित बनाउन सकिने कुरामा हामी विश्वास राख्दछौं। शुभयात्रा मोबाईलappले आप्रवासी काम्दारलाई सम्बन्धित बिज्ञ, अधीवक्ता र अनुभवी व्यक्तीहरु द्वारा निर्मित अडियो, भिडियो तथा लिखित वैदेशिक रोजगार सम्बन्धी जान्कारीहरुसंग जोड्ने काम गर्दछ। सोही क्रममा आप्रावासी काम्दारहरुले शुभयात्राको माध्यमबाट निम्न बिषयहरुमा जानकारी प्राप्त गर्न सक्ने छनस्",
      "Labor rights and working conditions abroad": "विदेशमा काम्दारको अधिकार र काम गर्ने अवस्थाहरु",
      "Work permits and the application process": "ष्रम स्विक्रिती र निबेदन प्रकृयाहरु",
      local_dos_and_donts: "साउदी अरब, मलेशिया र कतारमा गर्न हुने र नहुने कार्यहरु",
      unique_women_content: "महिला आप्रवासी काम्दारका लागि महत्वपूर्ण जानकारीहरु",
      "Local knowledge": "स्थानिय ज्ञान",
      live_streaming_model: "शुभयात्राको प्रतिरूप यसरी तयार पारीएको छ, जसबाट प्रयोगकर्ताले खोजेका आप्रवासन सम्बन्धी जानकारीहरु तुरुन्तै नेपाली भाषामा प्राप्त गर्न सकिनेछ ।",
      "Trusted information": "भर्पर्दो र विश्वासिलो जानकारी",
      our_partners: "हाम्रा साझेदारहरुको नेपाली आप्रवासन सम्बन्धी दशकौं भरिको अनुभव यस् अप्प मा समेटीएको छ र यहाँं प्रयोग भएका सबै जानकारीहरु आप्रवासी काम्दारका लागि उचित  र उपयोगी छन् भन्ने कुराको हामी विश्वास दिलाउंछौं।",
      "Global network": "विश्वव्यापी सन्जाल",
      in_app_social_media: "यस्मा जडित सामाजिक सन्जाल र शेयर गर्ने ब्यवस्थाले आप्रवासी काम्दारको मुट्ठिमा विश्वव्यापी नेपाली सन्जाललाई समेटेको छ।",
      "Contact Us": "संपर्क गर्नुहोस्",
      backed_by_taf: "शुभयात्राास द एशिया फाउन्डेशन, गैर आवासिय नेपाली संघ र विभिन्न नेपाली नविन्कर्ता र सामाजिक उद्धमीहरुको सर्म्थनको प्रतिफल हो। सन् २०१६ मा, शुभयात्रााका निर्माताहरु शुभयात्राामा अझ धेरै बिषय वस्तु समेटी धेरै भन्दा धेरै आप्रवासी नेपाली काम्दारहरुको जीवनमा साकारआत्मक प्रभाव पार्ने उदेश्य राख्दछन्। हाम्रा प्रगती बारे जानकार रहन हामीलाई सामाजिक सन्जाल जस्तै फेसबुक, ट्वीटर् र यू ट्युब मा फेला पार्नुहोला या निम्न लिन्क क्लिक गरी हामीलाई सजिलै संपर्क गर्नुहोला।",
      welcome_collaboration: "हामी तपाईंसँग हरेक क्षणमा  सहकार्य र सहयात्रा गर्न तत्पर छौं। यदी तपाईं पनि हामी जस्तै विश्व भरिका आप्रवासी काम्दारहरुको दीगो बिकासमा सङ्लग्न हुन चाहानु हुन्छ भने हामी तपाईंलाई स्वागत गर्दछौं। हामीलाई देश र विदेशका आप्रवासी काम्दारहरुलाई सहयोग गर्न साथ दिनुहोस्।",

      r_and_d: "श्रोत र तत्थ्यांकहरु",
      the_team: "शुभयात्राले सत्य र तत्थ्यांकको माध्यमबाट आप्रावासनको समस्यालाई निउनिकरण गर्ने बिजोड तरिका अपनाएको छ। यसले आप्रावासी काम्दारलाई मात्र नभइ हामी जस्तै काम गर्ने अरु सबैलाई मद्दत् गर्नेछ। हामीले विगतमा पनि एशियाली आप्रवासी काम्दारले भोग्नु पर्ने समस्याबारे विभरण तयार पारेका थियौं जस्ले सरकारी र गैर सरकारी संस्थाहरुलाई आप्रवासन सम्बन्धी कार्य गर्न दिशानिर्देश गरेको छ।  यस्तै  खुलस्त नितीबाट अघि बड्दई हामी आगामी दिनहरुमा पनि शुभयात्राको माध्यमबाट सत्य र तथ्यहरुलाई सबैमाझ प्रस्तुत गर्ने छौं ।",
      explore_publications: "हाम्रा प्रकाशनहरुलाई हेर्नुहोस्",
      "Who we are": "हामी को हौं ?",
      taf: "द एशिया फाउनडेशन एउटा अन्तराष्ट्रिय गैर सरकारी संस्था हो, जस्को कार्यलयहरु १८ वटा एशियाली मुलुकहरुमा फैलिएका छन्, त्यी मध्ये एउटा स्थाई कार्यालय काठमाडौंमा पनि छ। नेपालमा फाउनडेशनले अमेरिकि जनताको सहयोग (युएस्एड) द्वारा सन्चालित मानव बेचविखन विरुद्धको (सीटिफ) कार्यक्रम लागु गरेको छ। यो कार्यत्रमद्वारा बेचबिखनको रोकथाम, बेचबिखनमा परेकाहरुको संरक्षण र बेचबिखनमा संलग्न भएकालाई कारवाही गरिन्छ। बेच बिखन र आप्रवासनको सहसम्बन्ध भएकाले सन् २०१४ मा फाउनडेशनले आफ्नो कार्य क्षेत्रलाई विस्तार गरी श्रम तथा रोजगार मन्त्रालयलाई पहिलो आप्रवासनको अवस्था सम्बन्धी विभरण तयार गर्न सहयोग गरेको थियो।  सो विभरणको दोश्रो भाग (२०१४(२०१५)  निकाल्न  फाउनडेशन आइ। ओ। एम र आइ। एल । ओ सँग सहकार्य गर्दै आएको छ।",
      nrna: "गैर आवासिय नेपाली संघ (एन। आर। एन। ए) विदेशमा बस्दै आएका नेपालीहरुको निक्कै ठुलो र विशिष्ट छाता संगठन हो। यस्को अध्यायहरु जम्मा जम्मी ७३ मुलुकहरुमा छन् जस्मा धेरै संख्यामा नेपालहरु वैदेशिक रोजगारका  लागि जाने मुलुकहरु पनि पर्दछन्। यस्का अध्यायहरुको माध्यमबाट एन। आर । एन। ए ले नेपाली आप्रवासीहरुलाई जम्मा पार्दछ र आकाशमिक समयमा आप्रवासीहरुको मद्दत् गर्दछ।  काठमाडौंमा यस संगठनले आप्रवासन र वैदेशिक रोजगार सम्बन्धी महत्वकांक्षी आप्रवासीहरुलाई सुचना प्रदान गर्दछ।  यस्का लागी सो संगठनले काठमाडौंको लेबर भिलेज र अन्तरराष्ट्रिय विमानस्थलमा सुचना केन्द्र चलाई आएको छ। यस्का साथै एन. आर. एन. ए. ले वैदेशिक रोजगारमा जाने काम्दारहरुको हितमा बलियो निती निर्माण गर्न नेपाल सरकारलाई पटक पटक पहल गर्दछ। "
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
        $(item).text(_($(item).attr('key')));
      } else {
        $(item).text(_($(item).text()));
      }
    });
    $("#aboutlink, #contactlink, #resourcelink").each(function(n, navlink) {
      $(navlink).attr('href', $(navlink).attr('href').replace('/', '/?nepali'));
    });
  };

  if (lang !== 'en') {
    toNepali();
  }
});