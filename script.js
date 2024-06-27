// Objet contenant les traductions
const translations = {
    fr: {
        accueil: "Accueil",
        apropos: "À propos",
        services: "Services",
        projets: "Projets",
        equipe: "Équipe",
        chiffres: "Nos chiffres",
        contact: "Contact",
        titre: "New Vision Group",
        soustitre: "Façonnons l'avenir du Bénin ensemble",
        apropostitre: "À propos de NVG",
        aproposdescription: "New Vision Group est un groupe leader dans l'innovation et le développement au Bénin. Nous nous engageons à créer des solutions durables pour un avenir meilleur.",
        telecharger: "Télécharger la brochure",
        nosservices: "Nos Services",
        service1titre: "Production et commercialisation",
        service1description: "Avec notre unité de production nous confectionnons et distribuons des sacs scolaires solaires, des sacs scolaires, des tenues scolaires, des serviettes hygiéniques réutilisables pour femmes, des gels biomédicaux. Nous distribuons également des équipements d'énergie renouvelable, d'équipements pour formation et biomédicaux : des fournitures pédagogiques, des kits scolaires dans diverses localités.",
        service2titre: "Fourniture et installation d'équipements et matériels",
        service2description: "Nous fournissons pour les organismes publics et privés les équipements nécessaires à leur bon fonctionnement et pour la réussite de leurs projets. Notre logique d'intervention repose sur l'identification des types d'équipements et matériels suivant les caractéristiques adaptées à l'usage; et sur une assistance à choisir le meilleur équipement quelle que soit la nature de votre projet et suivant vos exigences (coût, qualité, délai).",
        service3titre: "Import-export",
        service3description: "Nous offrons des solutions de logistiques et de négoce des produits tropicaux, d'équipement informatique et bureautique sur les marchés internationaux, en nous appuyant sur un réseau relationnel bâti durant ces dernières décennies afin d'offrir de meilleures expériences à nos partenaires.",
        nosproduits: "Nos produits",
        produit1: "Gel hydro-alcoolique",
        produit2: "Exemplaire de sac scolaire solaire fourni au projet SWEDD BENIN",
        produit3: "Exemplaire de sac scolaire solaire fourni au projet SWEDD CAMEROUN",
        produit4: "Serviettes Hygiéniques",
        produit5: "Maccaron",
        produit6: "Exemplaire de sac scolaire solaire fourni au projet SWEDD CAMEROUN",
        produit7: "Exemplaire de sac scolaire solaire simple",
        projetphares: "Nos Projets Phares",
        projet1titre: "Énergie Solaire pour Tous",
        projet1description: "Installation de panneaux solaires dans 100 villages, apportant l'électricité à plus de 50 000 personnes.",
        projet2titre: "Agriculture Intelligente",
        projet2description: "Mise en place de systèmes d'irrigation innovants, augmentant les rendements agricoles de 40%.",
        projet3titre: "Éducation Numérique",
        projet3description: "Déploiement de tablettes éducatives dans 200 écoles, touchant plus de 100 000 élèves.",
        projet4titre: "Éducation Numérique",
        projet4description: "Déploiement de tablettes éducatives dans 200 écoles, touchant plus de 100 000 élèves.",
        projet5titre: "Éducation Numérique",
        projet5description: "Déploiement de tablettes éducatives dans 200 écoles, touchant plus de 100 000 élèves.",
        projet6titre: "Éducation Numérique",
        projet6description: "Déploiement de tablettes éducatives dans 200 écoles, touchant plus de 100 000 élèves.",
        projet7titre: "Éducation Numérique",
        projet7description: "Déploiement de tablettes éducatives dans 200 écoles, touchant plus de 100 000 élèves.",
        equipedirection: "Notre Équipe de Direction",
        chiffrescles: "Nos Chiffres Clés",
        chiffre1: "Serviettes hygiéniques fabriquées et distribuées depuis 2020",
        chiffre2: "Filles bénéficiaires depuis 2020",
        chiffre3: "Sacs scolaires confectionnés et distribués depuis 2020",
        chiffre4: "Machines livrées en 2023",
        chiffre5: "Conteneurs transités au cours de l'année",
        chiffre6: "Couturiers collaborateurs",
        chiffre7: "Collaborateurs à temps plein et occasionnels",
        partenaires: "Nos Partenaires",
        contacteznous: "Contactez-nous",
        email1: "info@newvisiongroupsa.bj",
        email2: "s.client@newvisiongroupsa.bj",
        telephone: "94 74 74 11 / 90 94 52 55",
        adresse: "Cotonou, Gbedjromede 16 ampoules",
        formintro: "Nous sommes impatients de vous entendre ! N'hésitez pas à nous contacter pour toute question ou collaboration.",
        nom: "Nom",
        email: "Email",
        message: "Message",
        envoyer: "Envoyer",
        droitsreserves: "Tous droits réservés."
    },
    en: {
        accueil: "Home",
        apropos: "About",
        services: "Services",
        projets: "Projects",
        equipe: "Team",
        chiffres: "Our numbers",
        contact: "Contact",
        titre: "New Vision Group",
        soustitre: "Shaping the future of Benin together",
        apropostitre: "About NVG",
        aproposdescription: "New Vision Group is a leading group in innovation and development in Benin. We are committed to creating sustainable solutions for a better future.",
        telecharger: "Download brochure",
        nosservices: "Our Services",
        service1titre: "Production and marketing",
        service1description: "With our production unit, we manufacture and distribute solar school bags, school bags, school uniforms, reusable sanitary napkins for women, biomedical gels. We also distribute renewable energy equipment, training and biomedical equipment: educational supplies, school kits in various localities.",
        service2titre: "Supply and installation of equipment and materials",
        service2description: "We provide public and private organizations with the necessary equipment for their proper functioning and for the success of their projects. Our intervention logic is based on identifying types of equipment and materials according to characteristics adapted to use; and on assistance in choosing the best equipment regardless of the nature of your project and according to your requirements (cost, quality, time).",
        service3titre: "Import-export",
        service3description: "We offer logistics and trading solutions for tropical products, computer and office equipment on international markets, relying on a relational network built over the last decades to offer better experiences to our partners.",
        nosproduits: "Our products",
        produit1: "Hydroalcoholic gel",
        produit2: "Example of solar school bag provided to the SWEDD BENIN project",
        produit3: "Example of solar school bag provided to the SWEDD CAMEROON project",
        produit4: "Sanitary Napkins",
        produit5: "Macaron",
        produit6: "Example of solar school bag provided to the SWEDD CAMEROON project",
        produit7: "Example of simple solar school bag",
        projetphares: "Our Flagship Projects",
        projet1titre: "Solar Energy for All",
        projet1description: "Installation of solar panels in 100 villages, bringing electricity to over 50,000 people.",
        projet2titre: "Smart Agriculture",
        projet2description: "Implementation of innovative irrigation systems, increasing agricultural yields by 40%.",
        projet3titre: "Digital Education",
        projet3description: "Deployment of educational tablets in 200 schools, reaching over 100,000 students.",
        projet4titre: "Digital Education",
        projet4description: "Deployment of educational tablets in 200 schools, reaching over 100,000 students.",
        projet5titre: "Digital Education",
        projet5description: "Deployment of educational tablets in 200 schools, reaching over 100,000 students.",
        projet6titre: "Digital Education",
        projet6description: "Deployment of educational tablets in 200 schools, reaching over 100,000 students.",
        projet7titre: "Digital Education",
        projet7description: "Deployment of educational tablets in 200 schools, reaching over 100,000 students.",
        equipedirection: "Our Management Team",
        chiffrescles: "Our Key Figures",
        chiffre1: "Sanitary napkins manufactured and distributed since 2020",
        chiffre2: "Girls beneficiaries since 2020",
        chiffre3: "School bags made and distributed since 2020",
        chiffre4: "Machines delivered in 2023",
        chiffre5: "Containers transited during the year",
        chiffre6: "Collaborating tailors",
        chiffre7: "Full-time and occasional collaborators",
        partenaires: "Our Partners",
        contacteznous: "Contact us",
        email1: "info@newvisiongroupsa.bj",
        email2: "s.client@newvisiongroupsa.bj",
        telephone: "94 74 74 11 / 90 94 52 55",
        adresse: "Cotonou, Gbedjromede 16 ampoules",
        formintro: "We look forward to hearing from you! Feel free to contact us for any questions or collaboration.",
        nom: "Name",
        email: "Email",
        message: "Message",
        envoyer: "Send",
        droitsreserves: "All rights reserved."
    },
    zh: {
        accueil: "首页",
        apropos: "关于我们",
        services: "服务",
        projets: "项目",
        equipe: "团队",
        chiffres: "我们的数字",
        contact: "联系我们",
        titre: "新视野集团",
        soustitre: "共同塑造贝宁的未来",
        apropostitre: "关于NVG",
        aproposdescription: "新视野集团是贝宁创新和发展的领先集团。我们致力于为更美好的未来创造可持续的解决方案。",
        telecharger: "下载宣传册",
        nosservices: "我们的服务",
        service1titre: "生产和营销",
        service1description: "通过我们的生产单位，我们制造和分发太阳能书包、学校书包、校服、女性可重复使用卫生巾、生物医学凝胶。我们还分发可再生能源设备、培训和生物医学设备：教育用品，在各个地区分发学校用品套装。",
        service2titre: "设备和材料的供应和安装",
        service2description: "我们为公共和私营组织提供其正常运作和项目成功所需的设备。我们的干预逻辑基于根据适应用途的特征确定设备和材料的类型；并根据您的要求（成本、质量、时间）协助选择最佳设备，无论您的项目性质如何。",
        service3titre: "进出口",
        service3description: "我们在国际市场上为热带产品、计算机和办公设备提供物流和贸易解决方案，依靠过去几十年建立的关系网络，为我们的合作伙伴提供更好的体验。",
        nosproduits: "我们的产品",
        produit1: "消毒凝胶",
        produit2: "SWEDD贝宁项目提供的太阳能书包示例",
        produit3: "SWEDD喀麦隆项目提供的太阳能书包示例",
        produit4: "卫生巾",
        produit5: "马卡龙",
        produit6: "SWEDD喀麦隆项目提供的太阳能书包示例",
        produit7: "简单太阳能书包示例",
        projetphares: "我们的旗舰项目",
        projet1titre: "全民太阳能",
        projet1description: "在100个村庄安装太阳能板，为超过50,000人提供电力。",
        projet2titre: "智能农业",
        projet2description: "实施创新灌溉系统，提高农业产量40%。",
        projet3titre: "数字教育",
        projet3description: "在200所学校部署教育平板电脑，惠及超过100,000名学生。",
        projet4titre: "数字教育",
        projet4description: "在200所学校部署教育平板电脑，惠及超过100,000名学生。",
        projet5titre: "数字教育",
        projet5description: "在200所学校部署教育平板电脑，惠及超过100,000名学生。",
        projet6titre: "数字教育",
        projet6description: "在200所学校部署教育平板电脑，惠及超过100,000名学生。",
        projet7titre: "数字教育",
        projet7description: "在200所学校部署教育平板电脑，惠及超过100,000名学生。",
        equipedirection: "我们的管理团队",
        chiffrescles: "我们的关键数据",
        chiffre1: "自2020年以来制造和分发的卫生巾",
        chiffre2: "自2020年以来受益的女孩",
        chiffre3: "自2020年以来制作和分发的书包",
        chiffre4: "2023年交付的机器",
        chiffre5: "年内运输的集装箱",
        chiffre6: "合作裁缝",
        chiffre7: "全职和临时合作者",
        partenaires: "我们的合作伙伴",
        contacteznous: "联系我们",
        email1: "info@newvisiongroupsa.bj",
        email2: "s.client@newvisiongroupsa.bj",
        telephone: "94 74 74 11 / 90 94 52 55",
        adresse: "科托努，Gbedjromede 16 ampoules",
        formintro: "我们期待听到您的声音！如有任何问题或合作，请随时与我们联系。",
        nom: "姓名",
        email: "电子邮件",
        message: "消息",
        envoyer: "发送",
        droitsreserves: "版权所有。"
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Écouteur d'événements pour le sélecteur de langue
document.getElementById('langSelect').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Animation au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initialiser les animations au chargement de la page
animateOnScroll();

// Carrousel pour les projets
const projectCarousel = document.querySelector('.project-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const projects = document.querySelectorAll('.project-item');
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
}

function moveRight() {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
}

prevBtn.addEventListener('click', moveLeft);
nextBtn.addEventListener('click', moveRight);

// Initialiser le carrousel
showProject(currentIndex);

// Défilement automatique du carrousel
setInterval(moveRight, 5000);

// Carrousel pour les partenaires
function movePartners() {
    const carousel = document.querySelector('.partner-carousel');
    setInterval(() => {
        const firstItem = carousel.firstElementChild;
        carousel.appendChild(firstItem);
        firstItem.style.transform = 'translateX(100%)';
        setTimeout(() => {
            firstItem.style.transition = 'transform 0.5s ease';
            firstItem.style.transform = 'translateX(0)';
        }, 50);
    }, 1000);
}

movePartners();

// Effet de parallaxe pour les sections avec la classe .parallax
function parallaxEffect() {
    const parallaxSections = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        parallaxSections.forEach(section => {
            const distance = window.pageYOffset;
            section.style.backgroundPositionY = `${distance * 0.5}px`;
        });
    });
}

parallaxEffect();

// Animation des chiffres
function animateNumbers() {
    const chiffreItems = document.querySelectorAll('.chiffre-item h3');
    chiffreItems.forEach(item => {
        const target = parseInt(item.innerText);
        let current = 0;
        const increment = target / 100;
        const updateNumber = () => {
            if(current < target) {
                current += increment;
                item.innerText = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                item.innerText = target;
            }
        };
        updateNumber();
    });
}

// Déclencher l'animation des chiffres lorsque la section est visible
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const chiffresSection = document.querySelector('#chiffres');
if (chiffresSection) {
    observer.observe(chiffresSection);
}

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis');
    // Réinitialiser le formulaire après soumission
    this.reset();
});

// Initialisation de la langue par défaut
changeLanguage('fr');