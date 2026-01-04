// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Adjust for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky navbar
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickyNavbar);

    // Language toggle functionality
    let currentLanguage = 'en';

    const translations = {
    let currentLanguage = 'en';

    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            branches: 'Branches',
            products: 'Products',
            contact: 'Contact',
            heroH2: 'Fresh & Quality Groceries for Every Home',
            heroP: 'Serving families with trust and quality across 5 branches',
            heroBtn: 'Visit Our Stores',
            aboutH2: 'About Us',
            aboutP1: 'Jayam Raja Store has been a trusted name in Tiruppur for years, providing fresh and quality groceries to local families. With 5 branches across the region, we are committed to offering affordable prices, excellent service, and a wide range of products that meet your daily needs.',
            aboutP2: 'Our focus is on trust, quality, and long-term relationships with our customers. We source our products carefully to ensure freshness and value for money.',
            trustH3: 'Trust',
            trustP: 'Building lasting relationships through honesty and reliability.',
            qualityH3: 'Quality',
            qualityP: 'Only the best products for our valued customers.',
            affordabilityH3: 'Affordability',
            affordabilityP: 'Competitive prices without compromising on quality.',
            productsH2: 'Our Products',
            riceH3: 'Rice & Grains',
            riceP: 'Premium quality rice varieties and wholesome grains for your meals.',
            pulsesH3: 'Pulses & Dal',
            pulsesP: 'Fresh pulses and lentils packed with nutrition and flavor.',
            spicesH3: 'Spices',
            spicesP: 'Aromatic spices to enhance the taste of your traditional dishes.',
            oilsH3: 'Cooking Oils',
            oilsP: 'Pure and healthy cooking oils for all your culinary needs.',
            snacksH3: 'Snacks & Beverages',
            snacksP: 'Delicious snacks and refreshing beverages for every occasion.',
            essentialsH3: 'Daily Essentials',
            essentialsP: 'Essential household items and daily use products.',
            branchesH2: 'Our Branches',
            mainBranchH3: 'Main Branch',
            mainBranchP: 'Kunnathur, Tamil Nadu 638103',
            secondBranchH3: 'Second Branch',
            secondBranchP: 'Sevur, Tamil Nadu 641655',
            thirdBranchH3: 'Third Branch',
            thirdBranchP: 'Perumanallur, Tamil Nadu 641666',
            forthBranchH3: 'Forth Branch',
            forthBranchP: 'Nambiyur, Tamil Nadu 638458',
            fifthBranchH3: 'Fifth Branch',
            fifthBranchP: 'Kolappalur, Tamil Nadu 638456',
            mapsH2: 'Find Our Branch',
            whyH2: 'Why Choose Us',
            qualityProductsH3: 'Quality Products',
            qualityProductsP: 'We ensure every product meets the highest standards of quality and freshness.',
            affordablePricesH3: 'Affordable Prices',
            affordablePricesP: 'Competitive pricing that doesn\'t compromise on value or quality.',
            trustedFamiliesH3: 'Trusted by Families',
            trustedFamiliesP: 'Years of service building trust with families across Tamil Nadu.',
            multipleBranchesH3: 'Multiple Branches',
            multipleBranchesP: 'Conveniently located branches for easy access to our services.',
            friendlyServiceH3: 'Friendly Service',
            friendlyServiceP: 'Our team is dedicated to providing excellent customer service.',
            contactH2: 'Contact Us',
            contactP1: 'Main Branch: Kunnathur, Tamil Nadu 638103',
            contactP2: '+91 63815 89679',
            contactP3: 'info@jayamrajastore.com',
            footerP1: '&copy; 2026 Jayam Raja Store. All rights reserved.',
            footerP2: 'Your Trusted Grocery Partner',
            footerP3: 'Designed & Developed by Sureshkumar'
        },
        ta: {
            home: 'முகப்பு',
            about: 'எங்களைப் பற்றி',
            branches: 'கிளைகள்',
            products: 'தயாரிப்புகள்',
            contact: 'தொடர்பு',
            heroH2: 'ஒவ்வொரு குடும்பத்திற்கும் புதிய மற்றும் தரமான மளிகைப் பொருட்கள்',
            heroP: '5 கிளைகளில் நம்பிக்கை மற்றும் தரத்துடன் குடும்பங்களுக்கு சேவை செய்கிறோம்',
            heroBtn: 'எங்கள் கடைகளைப் பார்வையிடுங்கள்',
            aboutH2: 'எங்களைப் பற்றி',
            aboutP1: 'ஜெயம் ராஜா ஸ்டோர் பல ஆண்டுகளாக திருப்பூரில் நம்பகமான பெயராக இருந்து வருகிறது, உள்ளூர்க் குடும்பங்களுக்கு புதிய மற்றும் தரமான மளிகைப் பொருட்களை வழங்குகிறது. பிராந்தியத்தில் 5 கிளைகளைக் கொண்டுள்ளோம், உங்கள் தினசரி தேவைகளை பூர்த்தி செய்யும் வகையில் மலிவான விலைகள், சிறந்த சேவை மற்றும் பரந்த அளவிலான தயாரிப்புகளை வழங்குவதில் கவனம் செலுத்துகிறோம்.',
            aboutP2: 'எங்கள் கவனம் நம்பிக்கை, தரம் மற்றும் எங்கள் வாடிக்கையாளர்களுடன் நீண்டகால உறவுகளில் உள்ளது. எங்கள் தயாரிப்புகளை கவனமாக தேர்ந்தெடுக்கிறோம், புதுமை மற்றும் மதிப்புக்கு பணத்தை உறுதி செய்கிறோம்.',
            trustH3: 'நம்பிக்கை',
            trustP: 'நேர்மை மற்றும் நம்பகத்தன்மை மூலம் நீண்டகால உறவுகளை உருவாக்குதல்.',
            qualityH3: 'தரம்',
            qualityP: 'எங்கள் மதிப்புமிக்க வாடிக்கையாளர்களுக்கு மிகச் சிறந்த தயாரிப்புகளை மட்டுமே.',
            affordabilityH3: 'மலிவு வாய்ப்பு',
            affordabilityP: 'தரத்தில் சமரசம் செய்யாமல் போட்டித்தன்மை வாய்ந்த விலைகள்.',
            productsH2: 'எங்கள் தயாரிப்புகள்',
            riceH3: 'அரிசி மற்றும் தானியங்கள்',
            riceP: 'உங்கள் உணவுக்கு உயர் தர அரிசி வகைகள் மற்றும் ஆரோக்கியமான தானியங்கள்.',
            pulsesH3: 'கொட்டை மற்றும் துவரை',
            pulsesP: 'ஊட்டச்சத்து மற்றும் சுவை நிறைந்த புதிய கொட்டை மற்றும் துவரை.',
            spicesH3: 'மசாலாப் பொருட்கள்',
            spicesP: 'உங்கள் மரபு உணவுகளின் சுவையை மேம்படுத்தும் நறுமணமான மசாலாப் பொருட்கள்.',
            oilsH3: 'சமையல் எண்ணெய்கள்',
            oilsP: 'உங்கள் அனைத்து சமையல் தேவைகளுக்கும் தூய்மையான மற்றும் ஆரோக்கியமான சமையல் எண்ணெய்கள்.',
            snacksH3: 'தின்பண்டங்கள் மற்றும் பானங்கள்',
            snacksP: 'ஒவ்வொரு சந்தர்ப்பத்திற்கும் சுவையான தின்பண்டங்கள் மற்றும் புத்துணர்ச்சியூட்டும் பானங்கள்.',
            essentialsH3: 'தினசரி அத்தியாவசியங்கள்',
            essentialsP: 'அத்தியாவசிய வீட்டு பொருட்கள் மற்றும் தினசரி பயன்பாட்டு தயாரிப்புகள்.',
            branchesH2: 'எங்கள் கிளைகள்',
            mainBranchH3: 'முதன்மை கிளை',
            mainBranchP: 'குன்னத்தூர், தமிழ்நாடு 638103',
            secondBranchH3: 'இரண்டாவது கிளை',
            secondBranchP: 'செவூர், தமிழ்நாடு 641655',
            thirdBranchH3: 'மூன்றாவது கிளை',
            thirdBranchP: 'பெருமானல்லூர், தமிழ்நாடு 641666',
            forthBranchH3: 'நான்காவது கிளை',
            forthBranchP: 'நம்பியூர், தமிழ்நாடு 638458',
            fifthBranchH3: 'ஐந்தாவது கிளை',
            fifthBranchP: 'கொலப்பலூர், தமிழ்நாடு 638456',
            mapsH2: 'எங்கள் கிளையைக் கண்டறியவும்',
            whyH2: 'ஏன் எங்களைத் தேர்ந்தெடுக்க வேண்டும்',
            qualityProductsH3: 'தரமான தயாரிப்புகள்',
            qualityProductsP: 'ஒவ்வொரு தயாரிப்பும் உயர் தர மற்றும் புதுமை தரநிலைகளை பூர்த்தி செய்கிறது என்பதை உறுதி செய்கிறோம்.',
            affordablePricesH3: 'மலிவான விலைகள்',
            affordablePricesP: 'மதிப்பு அல்லது தரத்தில் சமரசம் செய்யாமல் போட்டித்தன்மை வாய்ந்த விலை நிர்ணயம்.',
            trustedFamiliesH3: 'குடும்பங்களால் நம்பப்படுகிறது',
            trustedFamiliesP: 'தமிழ்நாடு முழுவதும் குடும்பங்களுடன் நம்பிக்கையை உருவாக்கும் பல ஆண்டுகளின் சேவை.',
            multipleBranchesH3: 'பல கிளைகள்',
            multipleBranchesP: 'எங்கள் சேவைகளுக்கு எளிதாக அணுகுவதற்கு வசதியான இடங்களில் அமைந்த கிளைகள்.',
            friendlyServiceH3: 'நட்பான சேவை',
            friendlyServiceP: 'எங்கள் குழு சிறந்த வாடிக்கையாளர் சேவையை வழங்குவதில் அர்ப்பணிக்கப்பட்டுள்ளது.',
            contactH2: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
            contactP1: 'முதன்மை கிளை: குன்னத்தூர், தமிழ்நாடு 638103',
            contactP2: '+91 63815 89679',
            contactP3: 'மின்னஞ்சல்: info@jayamrajastore.com',
            footerP1: '© 2026 ஜெயம் ராஜா ஸ்டோர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
            footerP2: 'உங்கள் நம்பகமான மளிகை துணை',
            footerP3: 'சுரேஷ்குமார் மூலம் வடிவமைக்கப்பட்ட மற்றும் வளர்ச்சியடைந்தது'
        }
    };

    function updateLanguage() {
        const lang = translations[currentLanguage];
        // Navbar
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks[0].innerText = lang.home;
        navLinks[1].innerText = lang.about;
        navLinks[2].innerText = lang.branches;
        navLinks[3].innerText = lang.products;
        navLinks[4].innerText = lang.contact;
        // Hero
        document.querySelector('.hero-content h2').innerText = lang.heroH2;
        document.querySelector('.hero-content p:not(.tamil-text)').innerText = lang.heroP;
        document.querySelector('.btn-primary').innerText = lang.heroBtn;
        // About
        document.querySelector('#about h2').innerText = lang.aboutH2;
        const aboutPs = document.querySelectorAll('#about .about-text p');
        aboutPs[0].innerText = lang.aboutP1;
        aboutPs[1].innerText = lang.aboutP2;
        const valueCards = document.querySelectorAll('.value-card');
        valueCards[0].querySelector('h3').innerText = lang.trustH3;
        valueCards[0].querySelector('p').innerText = lang.trustP;
        valueCards[1].querySelector('h3').innerText = lang.qualityH3;
        valueCards[1].querySelector('p').innerText = lang.qualityP;
        valueCards[2].querySelector('h3').innerText = lang.affordabilityH3;
        valueCards[2].querySelector('p').innerText = lang.affordabilityP;
        // Products
        document.querySelector('#products h2').innerText = lang.productsH2;
        const productCards = document.querySelectorAll('.product-card');
        productCards[0].querySelector('h3').innerText = lang.riceH3;
        productCards[0].querySelector('p').innerText = lang.riceP;
        productCards[1].querySelector('h3').innerText = lang.pulsesH3;
        productCards[1].querySelector('p').innerText = lang.pulsesP;
        productCards[2].querySelector('h3').innerText = lang.spicesH3;
        productCards[2].querySelector('p').innerText = lang.spicesP;
        productCards[3].querySelector('h3').innerText = lang.oilsH3;
        productCards[3].querySelector('p').innerText = lang.oilsP;
        productCards[4].querySelector('h3').innerText = lang.snacksH3;
        productCards[4].querySelector('p').innerText = lang.snacksP;
        productCards[5].querySelector('h3').innerText = lang.essentialsH3;
        productCards[5].querySelector('p').innerText = lang.essentialsP;
        // Branches
        document.querySelector('#branches h2').innerText = lang.branchesH2;
        const branchCards = document.querySelectorAll('.branch-card');
        branchCards[0].querySelector('h3').innerText = lang.mainBranchH3;
        branchCards[0].querySelectorAll('p')[0].innerText = lang.mainBranchP;
        branchCards[1].querySelector('h3').innerText = lang.secondBranchH3;
        branchCards[1].querySelectorAll('p')[0].innerText = lang.secondBranchP;
        branchCards[2].querySelector('h3').innerText = lang.thirdBranchH3;
        branchCards[2].querySelectorAll('p')[0].innerText = lang.thirdBranchP;
        branchCards[3].querySelector('h3').innerText = lang.forthBranchH3;
        branchCards[3].querySelectorAll('p')[0].innerText = lang.forthBranchP;
        branchCards[4].querySelector('h3').innerText = lang.fifthBranchH3;
        branchCards[4].querySelectorAll('p')[0].innerText = lang.fifthBranchP;
        // Maps
        document.querySelector('.maps-section h2').innerText = lang.mapsH2;
        // Why Choose Us
        document.querySelector('.why-choose-us h2').innerText = lang.whyH2;
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards[0].querySelector('h3').innerText = lang.qualityProductsH3;
        featureCards[0].querySelector('p').innerText = lang.qualityProductsP;
        featureCards[1].querySelector('h3').innerText = lang.affordablePricesH3;
        featureCards[1].querySelector('p').innerText = lang.affordablePricesP;
        featureCards[2].querySelector('h3').innerText = lang.trustedFamiliesH3;
        featureCards[2].querySelector('p').innerText = lang.trustedFamiliesP;
        featureCards[3].querySelector('h3').innerText = lang.multipleBranchesH3;
        featureCards[3].querySelector('p').innerText = lang.multipleBranchesP;
        featureCards[4].querySelector('h3').innerText = lang.friendlyServiceH3;
        featureCards[4].querySelector('p').innerText = lang.friendlyServiceP;
        // Contact
        document.querySelector('#contact h2').innerText = lang.contactH2;
        const contactItems = document.querySelectorAll('.contact-item p');
        contactItems[0].innerText = lang.contactP1;
        contactItems[1].innerText = lang.contactP2;
        contactItems[2].innerText = lang.contactP3;
        // Footer
        const footerPs = document.querySelectorAll('.footer-content p');
        footerPs[0].innerText = lang.footerP1;
        footerPs[1].innerText = lang.footerP2;
        footerPs[2].innerText = lang.footerP3;
    }

    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ta' : 'en';
        updateLanguage();
        langToggle.innerText = currentLanguage === 'en' ? 'தமிழ்' : 'English';
    });
});
