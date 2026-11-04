// Diwali Lights Product Catalog Data (Exclusively for Exterior Pixel Bullet Ladi)

const STORE_CONFIG = {
    storeName: "दीपावली लाइट्स - कैमूर (Deepawali Lights)",
    tagline: "घर के बाहर लगाने वाली बुलेट पिक्सल लड़ी | भभुआ, मोहनिया व कुदरा में सेम-डे डिलीवरी 🪔",
    // Apna WhatsApp number yahan daalein (country code 91 ke sath, bina '+' ya space ke)
    whatsappNumber: "917488868338", 
    freeDeliveryThreshold: 499,
    standardDeliveryFee: 40,
    offerEndDate: "November 12, 2026 23:59:59", // Festive Sale Timer
    currency: "₹",
    
    // 📢 Facebook Ads Meta Pixel ID (Yahan apna Meta Pixel ID daalein, jaise "123456789012345")
    facebookPixelId: "",

    // Kaimur District Details
    district: "कैमूर (भभुआ), बिहार",
    deliveryCoverageText: "भभुआ, मोहनिया, कुदरा, रामगढ़, चैनपुर, दुर्गावती एवं संपूर्ण कैमूर",

    // Home Installation Service Configuration (घर पर लड़ी लगाने की सुविधा)
    installationServiceAvailable: true,
    installationNotice: "कैमूर जिले में हमारे ट्रेंड इलेक्ट्रीशियन आपके घर आकर पूरी लड़ी सुरक्षित लगाएंगे!"
};

// Installation charges based on house size / ladi length
const INSTALLATION_RATES = {
    small: { id: "small", name: "1 मंजिल घर (25m - 50m)", fee: 299, desc: "छत और आगे की रेलिंग पर फिटिंग" },
    medium: { id: "medium", name: "2 मंजिल घर (50m - 100m)", fee: 499, desc: "पूरी दोनों मंजिल और बाउंड्री फिटिंग" },
    large: { id: "large", name: "3 मंजिल / बड़ा बंगला (100m - 200m)", fee: 799, desc: "पूरी कोठी, पिलर व छज्जा फिटिंग" }
};

// Kaimur District Blocks & Areas
const KAIMUR_AREAS = [
    "भभुआ शहर (Bhabua Town)",
    "मोहनिया (Mohania)",
    "कुदरा (Kudra)",
    "रामगढ़ (Ramgarh)",
    "चैनपुर (Chainpur)",
    "भगवानपुर (Bhagwanpur)",
    "दुर्गावती (Durgawati)",
    "चांद (Chand)",
    "नुआंव (Nuaon)",
    "रामपुर (Rampur)",
    "अधौरा (Adhaura)",
    "कैमूर का अन्य ग्रामीण क्षेत्र (Other Village in Kaimur)"
];

// Social Proof Notifications for FB Ads (Customer Trust Builder for Kaimur)
const RECENT_PURCHASES = [
    { name: "अमित कुमार", city: "भभुआ (वार्ड 8)", item: "50m वॉर्म गोल्डन बुलेट लड़ी", time: "2 मिनट पहले" },
    { name: "सोनू सिंह", city: "मोहनिया (स्टेशन रोड)", item: "100m वॉर्म गोल्डन बुलेट लड़ी", time: "4 मिनट पहले" },
    { name: "राहुल चौबे", city: "कुदरा (बाजार)", item: "50m गोल्डन लड़ी + मिस्त्री", time: "7 मिनट पहले" },
    { name: "विकास तिवारी", city: "रामगढ़", item: "50m मल्टीकलर पिक्सल लड़ी", time: "11 मिनट पहले" },
    { name: "दीपक श्रीवास्तव", city: "भभुआ (एकता चौक)", item: "100m वॉर्म गोल्डन बुलेट लड़ी", time: "15 मिनट पहले" },
    { name: "मनोज गुप्ता", city: "चैनपुर", item: "सुपर कॉम्बो पैक (100m)", time: "19 मिनट पहले" },
    { name: "अखिलेश पटेल", city: "भगवानपुर", item: "25m वॉर्म गोल्डन लड़ी", time: "23 मिनट पहले" },
    { name: "सूरज पासवान", city: "दुर्गावती", item: "50m क्रिस्टल व्हाइट लड़ी", time: "28 मिनट पहले" }
];

// Categories filtered purely by color options for this light
const CATEGORIES = [
    { id: "all", name: "सभी रंग (All Options)", icon: "✨" },
    { id: "warm", name: "वॉर्म गोल्डन (Warm Yellow)", icon: "🌟" },
    { id: "multi", name: "मल्टीकलर (RGB Flow)", icon: "🌈" },
    { id: "white", name: "क्रिस्टल व्हाइट (White)", icon: "⚪" },
    { id: "pink", name: "फेस्टिव पिंक (Pink)", icon: "🌸" }
];

// PRODUCTS: ONLY THIS TYPE OF LIGHT (Pixel Bullet Ladi with Heavy Cable & 2-pin Plug)
const PRODUCTS = [
    {
        id: 101,
        name: "Warm Golden Bullet Pixel LED Ladi (Original Stock)",
        hindiName: "वॉर्म गोल्डन बुलेट पिक्सल लड़ी (छत व घर के लिए)",
        category: "warm",
        categoryName: "वॉर्म गोल्डन स्पेशल",
        price: 749,
        originalPrice: 1499,
        discount: "50% OFF",
        rating: 4.9,
        reviewsCount: 340,
        image: "images/real-ladi-warm.jpg",
        badge: "⭐ 100% असली स्टॉक • बेस्टसेलर",
        badgeColor: "amber",
        supportsInstallation: true,
        selectedLengthIndex: 1, // default 50m
        variants: [
            { length: "25 मीटर (1 मंजिल)", price: 449, originalPrice: 899, discount: "50% OFF" },
            { length: "50 मीटर (2 मंजिल)", price: 749, originalPrice: 1499, discount: "50% OFF" },
            { length: "100 मीटर (3 मंजिल/पूरी छत)", price: 1399, originalPrice: 2799, discount: "50% OFF" },
            { length: "150 मीटर (बड़ा बंगला)", price: 1999, originalPrice: 3999, discount: "50% OFF" },
            { length: "200 मीटर (पूरी कोठी)", price: 2599, originalPrice: 5199, discount: "50% OFF" }
        ],
        specs: {
            length: "25m, 50m, 100m, 150m या 200m चुनें",
            bulbs: "सिलिंड्रिकल बुलेट कैप LEDs (अति चमकदार वॉर्म गोल्डन)",
            color: "प्रीमियम वॉर्म गोल्डन यलो (गोल्डन ग्लो)",
            wire: "मजबूत डबल-कोटेड सफेद कॉपर केबल (Heavy Duty)",
            waterproof: "100% आउटडोर वाटरप्रूफ (छत, मुंडेर व दीवार)",
            power: "डायरेक्ट 220V AC प्लग (सुरक्षित इनबिल्ट रेक्टिफायर)"
        },
        description: "घर के बाहर छत की मुंडेर, छज्जे, पिलर और बालकनी के लिए सबसे ज्यादा बिकने वाली असली वॉर्म गोल्डन बुलेट लड़ी। मोटी सफेद कॉपर वायर और वाटरप्रूफ कैप्स के साथ। कैमूर में हमारे कारीगर आपके घर आकर इसे लगा भी देंगे।"
    },
    {
        id: 102,
        name: "Multi-Color RGB Running Pixel LED Ladi",
        hindiName: "रंग-बिरंगी मल्टीकलर पिक्सल रनिंग लड़ी (RGB)",
        category: "multi",
        categoryName: "रनिंग मल्टीकलर",
        price: 749,
        originalPrice: 1499,
        discount: "50% OFF",
        rating: 4.9,
        reviewsCount: 220,
        image: "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=800&q=80",
        badge: "🌈 रनिंग मल्टीकलर",
        badgeColor: "red",
        supportsInstallation: true,
        selectedLengthIndex: 1, // default 50m
        variants: [
            { length: "25 मीटर (1 मंजिल)", price: 449, originalPrice: 899, discount: "50% OFF" },
            { length: "50 मीटर (2 मंजिल)", price: 749, originalPrice: 1499, discount: "50% OFF" },
            { length: "100 मीटर (3 मंजिल/पूरी छत)", price: 1399, originalPrice: 2799, discount: "50% OFF" },
            { length: "150 मीटर (बड़ा बंगला)", price: 1999, originalPrice: 3999, discount: "50% OFF" },
            { length: "200 मीटर (पूरी कोठी)", price: 2599, originalPrice: 5199, discount: "50% OFF" }
        ],
        specs: {
            length: "25m, 50m, 100m, 150m या 200m चुनें",
            bulbs: "डिजिटल रनिंग RGB बुलेट LEDs",
            color: "ऑटोमैटिक मल्टीकलर फ्लो (रनिंग, वेव व चेज़र)",
            wire: "डबल-कोटेड मजबूत वेदरप्रूफ कॉपर वायर",
            waterproof: "100% आउटडोर वाटरप्रूफ",
            power: "220V AC डायरेक्ट 2-पिन प्लग"
        },
        description: "रंग-बिरंगे ऑटोमैटिक रनिंग, चेज़र व वेव कलर-फ्लो इफेक्ट्स के साथ। दिवाली पर घर की बाहरी दीवारों और छज्जे को उत्सव का पूरा माहौल देने के लिए बेस्ट।"
    },
    {
        id: 103,
        name: "Crystal Bright White Pixel LED Ladi",
        hindiName: "क्रिस्टल ब्राइट व्हाइट पिक्सल लड़ी (दूधिया सफेद)",
        category: "white",
        categoryName: "क्लासिक व्हाइट",
        price: 749,
        originalPrice: 1499,
        discount: "50% OFF",
        rating: 4.8,
        reviewsCount: 140,
        image: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=800&q=80",
        badge: "⚪ क्लासिक व्हाइट",
        badgeColor: "purple",
        supportsInstallation: true,
        selectedLengthIndex: 1, // default 50m
        variants: [
            { length: "25 मीटर (1 मंजिल)", price: 449, originalPrice: 899, discount: "50% OFF" },
            { length: "50 मीटर (2 मंजिल)", price: 749, originalPrice: 1499, discount: "50% OFF" },
            { length: "100 मीटर (3 मंजिल/पूरी छत)", price: 1399, originalPrice: 2799, discount: "50% OFF" },
            { length: "150 मीटर (बड़ा बंगला)", price: 1999, originalPrice: 3999, discount: "50% OFF" },
            { length: "200 मीटर (पूरी कोठी)", price: 2599, originalPrice: 5199, discount: "50% OFF" }
        ],
        specs: {
            length: "25m, 50m, 100m, 150m या 200m चुनें",
            bulbs: "हाई-ब्राइटनेस क्रिस्टल व्हाइट LEDs",
            color: "प्योर दूधिया सफेद (Ice Bright White)",
            wire: "मोटी सफेद कॉपर केबल (Waterproof)",
            waterproof: "100% आउटडोर वेदरप्रूफ",
            power: "220V AC डायरेक्ट प्लग"
        },
        description: "आलीशान और आधुनिक लुक देने के लिए प्योर क्रिस्टल व्हाइट बुलेट लड़ी। घर के पिलरों, बाउंड्री और छज्जे पर होटल जैसी भव्यता लाती है।"
    },
    {
        id: 104,
        name: "Festive Pink & Purple Pixel LED Ladi",
        hindiName: "फेस्टिव पिंक / पर्पल पिक्सल लड़ी (गुलाबी रोशनी)",
        category: "pink",
        categoryName: "फेस्टिव पिंक",
        price: 749,
        originalPrice: 1499,
        discount: "50% OFF",
        rating: 4.8,
        reviewsCount: 95,
        image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
        badge: "🌸 फेस्टिव पिंक",
        badgeColor: "purple",
        supportsInstallation: true,
        selectedLengthIndex: 1, // default 50m
        variants: [
            { length: "25 मीटर (1 मंजिल)", price: 449, originalPrice: 899, discount: "50% OFF" },
            { length: "50 मीटर (2 मंजिल)", price: 749, originalPrice: 1499, discount: "50% OFF" },
            { length: "100 मीटर (3 मंजिल/पूरी छत)", price: 1399, originalPrice: 2799, discount: "50% OFF" },
            { length: "150 मीटर (बड़ा बंगला)", price: 1999, originalPrice: 3999, discount: "50% OFF" },
            { length: "200 मीटर (पूरी कोठी)", price: 2599, originalPrice: 5199, discount: "50% OFF" }
        ],
        specs: {
            length: "25m, 50m, 100m, 150m या 200m चुनें",
            bulbs: "वाइब्रेंट पिंक/पर्पल बुलेट LEDs",
            color: "शुभ फेस्टिव पिंक (गुलाबी-जामुनी)",
            wire: "डबल कोटेड सुरक्षित कॉपर वायर",
            waterproof: "100% आउटडोर वाटरप्रूफ",
            power: "220V AC डायरेक्ट प्लग"
        },
        description: "मनमोहक गुलाबी और जामुनी रोशनी जो घर की सुंदरता को कई गुना बढ़ा देती है। बालकनी और मुख्य गेट के लिए विशेष आकर्षण।"
    },
    {
        id: 105,
        name: "Double Delight Combo: 50m Warm + 50m Multicolor",
        hindiName: "सुपर कॉम्बो पैक (50m गोल्डन + 50m मल्टीकलर)",
        category: "all",
        categoryName: "धमाका कॉम्बो पैक",
        price: 1399,
        originalPrice: 2999,
        discount: "53% OFF",
        rating: 5.0,
        reviewsCount: 420,
        image: "images/real-ladi-warm.jpg",
        badge: "🔥 कॉम्बो ऑफर • बचत ₹300",
        badgeColor: "amber",
        supportsInstallation: true,
        specs: {
            length: "कुल 100 मीटर (50m वॉर्म गोल्डन + 50m मल्टीकलर)",
            bulbs: "दोनों लड़ियों में बुलेट कैप LEDs",
            color: "वॉर्म गोल्डन + मल्टीकलर कॉम्बो",
            wire: "हैवी डबल-कोटेड सफेद कॉपर केबल",
            waterproof: "100% आउटडोर वाटरप्रूफ",
            power: "अलग-अलग 2-पिन प्लग्स शामिल"
        },
        description: "2 मंजिल घर के लिए सबसे बेस्ट सेलर कॉम्बो! 50 मीटर वॉर्म गोल्डन लड़ी मुख्य छत की मुंडेर के लिए + 50 मीटर मल्टीकलर लड़ी आगे की बालकनी के लिए। अलग-अलग खरीदने से ₹300 की सीधी बचत!"
    }
];
