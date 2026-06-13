// ── i18n / Language Toggle ──
const translations = {
  pt: {
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.how': 'Como Funciona',
    'nav.testimonials': 'Depoimentos',
    'nav.cta': 'Falar com a Calu',
    'hero.title': 'A sua imagem online deveria ser tão boa<br/><em>quanto o seu trabalho.</em>',
    'hero.sub': 'Produção de vídeo com câmera profissional no seu consultório, tráfego pago e estratégia digital — para profissionais liberais no Rio que querem parar de depender de indicação.',
    'hero.btn1': 'Quero mais clientes →',
    'hero.btn2': 'Como funciona',
    'hero.stat1.num': '4', 'hero.stat1.label': 'Soluções integradas',
    'hero.stat2.num': 'RJ', 'hero.stat2.label': 'Atendimento presencial',
    'hero.stat3.num': '0', 'hero.stat3.label': 'Dor de cabeça pra você',
    'services.tag': 'O que entregamos',
    'services.title': 'Uma máquina completa de novos clientes.',
    'services.sub': 'Enquanto você atende, a gente trabalha para que mais pessoas te encontrem, confiem em você e marquem consulta.',
    'service1.name': 'Vídeo Criativo',
    'service1.desc': 'Câmera cinema, iluminação profissional e captação presencial no seu consultório. Não é vídeo de iPhone — é produção que faz o paciente sentir a diferença antes mesmo de marcar consulta.',
    'service2.name': 'Site & Landing Page',
    'service2.desc': 'Seu site profissional ou página de vendas otimizada para converter visitantes em pacientes. Rápido, moderno e feito para aparecer no Google.',
    'service3.name': 'Tráfego Pago',
    'service3.desc': 'Anúncios no Meta Ads com os seus vídeos criativos. Campanha configurada e gerenciada para atrair exatamente o perfil de paciente que você quer atender.',
    'service4.name': 'SEO & Google Maps',
    'service4.desc': 'Seu nome aparece quando alguém pesquisa "dentista perto de mim" ou "advogado no Rio". Presença orgânica que traz clientes sem pagar por clique.',
    'portfolio.tag': 'Portfólio',
    'portfolio.title': 'Nosso trabalho.',
    'portfolio.sub': 'Cada vídeo produzido com intenção. Cada campanha com estratégia.',
    'portfolio.follow': 'Seguir',
    'portfolio.more': 'Ver mais no Instagram',
    'process.tag': 'Como funciona',
    'process.title': 'Simples para você. Complexo por baixo.',
    'process.sub': 'Você não precisa entender de marketing. Precisa só atender os novos clientes que vão chegar.',
    'step1.title': 'Diagnóstico gratuito',
    'step1.desc': 'Analisamos sua presença digital atual, seus concorrentes e onde estão as maiores oportunidades para o seu perfil.',
    'step2.title': 'Produção & Estrutura',
    'step2.desc': 'Gravamos os vídeos no seu consultório, construímos seu site e configuramos toda a estrutura de captação de clientes.',
    'step3.title': 'Ativação & Tráfego',
    'step3.desc': 'Ligamos as campanhas, colocamos seu negócio no Google Maps e começamos a atrair os primeiros clientes.',
    'step4.title': 'Você só atende',
    'step4.desc': 'A máquina está rodando. Novos clientes chegando. Você foca no que sabe fazer — a gente cuida do resto.',
    'testi.tag': 'Depoimentos',
    'testi.title': 'Profissionais que pararam de depender de indicação.',
    'testi.sub': 'Resultados reais de médicos, dentistas e advogados que decidiram aparecer online.',
    'testi1.text': 'Minha agenda estava dependendo só de indicação. Depois que a Calu estruturou minha presença digital, comecei a receber mensagens de pacientes novos toda semana pelo Instagram e pelo Google.',
    'testi1.name': 'Dra. Fernanda Lima',
    'testi1.role': 'Dermatologista · Rio de Janeiro',
    'testi2.text': 'Eu não entendia nada de marketing e nem queria entender. A Calu cuidou de tudo — vídeo, site, anúncio. Hoje apareço antes dos meus concorrentes no Google.',
    'testi2.name': 'Dr. Marcos Andrade',
    'testi2.role': 'Advogado Tributarista · RJ',
    'testi3.text': 'Os vídeos que a Calu produziu passam exatamente a confiança que eu quero transmitir aos meus pacientes. O resultado foi imediato — agenda cheia em menos de 60 dias.',
    'testi3.name': 'Dr. Rafael Costa',
    'testi3.role': 'Dentista Implantodontista · RJ',
    'cta.tag': 'Diagnóstico gratuito',
    'cta.title': 'Seus concorrentes já estão aparecendo.<br/><em>E você?</em>',
    'cta.sub': 'Fale com a gente hoje e receba uma análise gratuita da sua presença digital — sem compromisso.',
    'cta.btn1': 'Quero minha análise gratuita →',
    'cta.btn2': 'Enviar e-mail',
    'footer.desc': 'Presença digital completa para médicos, dentistas e advogados no Rio de Janeiro.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.contact': 'Contato',
    'footer.copy': '© 2024 CALU. Todos os direitos reservados.',
    'footer.badge': 'Do vídeo ao cliente.',
    'footer.s1': 'Produção de Vídeo',
    'footer.s2': 'Gestão de Tráfego',
    'footer.s3': 'Roteiro & Estratégia',
    'footer.s4': 'Relatórios',
    'footer.c1': 'Portfólio',
    'footer.c2': 'Como Funciona',
    'footer.c3': 'Depoimentos',
    'footer.c4': 'Contato',
  },
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.how': 'How It Works',
    'nav.testimonials': 'Testimonials',
    'nav.cta': 'Talk to Calu',
    'hero.title': 'Your online image<br/>should be as good<br/><em>as your work.</em>',
    'hero.sub': 'Professional camera video production at your clinic, paid traffic and digital strategy — for professionals in Rio who want to stop relying on referrals.',
    'hero.btn1': 'I want more clients →',
    'hero.btn2': 'How it works',
    'hero.stat1.num': '4', 'hero.stat1.label': 'Integrated solutions',
    'hero.stat2.num': 'RJ', 'hero.stat2.label': 'In-person service',
    'hero.stat3.num': '0', 'hero.stat3.label': 'Headaches for you',
    'services.tag': 'What we deliver',
    'services.title': 'A complete new-client machine.',
    'services.sub': 'While you work, we make sure more people find you, trust you and book an appointment.',
    'service1.name': 'Creative Video',
    'service1.desc': 'Professional camera, professional lighting, filmed at your clinic. Not an iPhone video — production quality that makes patients feel the difference before they even book.',
    'service2.name': 'Website & Landing Page',
    'service2.desc': 'Your professional website or sales page optimized to convert visitors into patients. Fast, modern and built to rank on Google.',
    'service3.name': 'Paid Traffic',
    'service3.desc': 'Meta Ads campaigns powered by your creative videos. Configured and managed to attract exactly the patient profile you want to serve.',
    'service4.name': 'SEO & Google Maps',
    'service4.desc': 'Your name shows up when someone searches "dentist near me" or "lawyer in Rio." Organic presence that brings clients without paying per click.',
    'portfolio.tag': 'Portfolio',
    'portfolio.title': 'Our work.',
    'portfolio.sub': 'Every video produced with intention. Every campaign with strategy.',
    'portfolio.follow': 'Follow',
    'portfolio.more': 'See more on Instagram',
    'process.tag': 'How it works',
    'process.title': 'Simple for you. Complex under the hood.',
    'process.sub': 'You don\'t need to understand marketing. You just need to serve the new clients who will arrive.',
    'step1.title': 'Free diagnosis',
    'step1.desc': 'We analyze your current digital presence, your competitors and where the biggest opportunities are for your profile.',
    'step2.title': 'Production & Setup',
    'step2.desc': 'We film videos at your clinic, build your website and configure the entire client acquisition structure.',
    'step3.title': 'Launch & Traffic',
    'step3.desc': 'We turn on the campaigns, get your business on Google Maps and start attracting the first clients.',
    'step4.title': 'You just serve them',
    'step4.desc': 'The machine is running. New clients arriving. You focus on what you do best — we handle the rest.',
    'testi.tag': 'Testimonials',
    'testi.title': 'Professionals who stopped relying on referrals.',
    'testi.sub': 'Real results from doctors, dentists and lawyers who decided to show up online.',
    'testi1.text': 'My schedule was entirely dependent on referrals. After Calu structured my digital presence, I started receiving messages from new patients every week through Instagram and Google.',
    'testi1.name': 'Dr. Fernanda Lima',
    'testi1.role': 'Dermatologist · Rio de Janeiro',
    'testi2.text': 'I didn\'t understand anything about marketing and didn\'t want to. Calu took care of everything — video, website, ads. Today I show up before my competitors on Google.',
    'testi2.name': 'Dr. Marcos Andrade',
    'testi2.role': 'Tax Attorney · RJ',
    'testi3.text': 'The videos Calu produced convey exactly the trust I want to pass on to my patients. The result was immediate — fully booked in less than 60 days.',
    'testi3.name': 'Dr. Rafael Costa',
    'testi3.role': 'Implant Dentist · RJ',
    'cta.tag': 'Free diagnosis',
    'cta.title': 'Your competitors are already showing up.<br/><em>Are you?</em>',
    'cta.sub': 'Talk to us today and receive a free analysis of your digital presence — no strings attached.',
    'cta.btn1': 'I want my free analysis →',
    'cta.btn2': 'Send email',
    'footer.desc': 'Complete digital presence for doctors, dentists and lawyers in Rio de Janeiro.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.copy': '© 2024 CALU. All rights reserved.',
    'footer.badge': 'From video to client.',
    'footer.s1': 'Video Production',
    'footer.s2': 'Traffic Management',
    'footer.s3': 'Script & Strategy',
    'footer.s4': 'Reports',
    'footer.c1': 'Portfolio',
    'footer.c2': 'How It Works',
    'footer.c3': 'Testimonials',
    'footer.c4': 'Contact',
  }
};

let currentLang = 'pt';

function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyTranslations(currentLang);
  const label = document.getElementById('langLabel');
  const flag = document.querySelector('.lang-flag');
  if (currentLang === 'en') {
    label.textContent = 'PT';
    flag.textContent = '🇺🇸';
    document.documentElement.lang = 'en';
  } else {
    label.textContent = 'EN';
    flag.textContent = '🇧🇷';
    document.documentElement.lang = 'pt-BR';
  }
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
}

// ── Modal de Vídeo ──
function openModal(src, desc) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const descEl = document.getElementById('modalDesc');
  video.querySelector('source').src = src;
  video.load();
  video.play();
  descEl.textContent = desc;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  video.querySelector('source').src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Mobile Menu ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── Scroll Animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Staggered Children ──
document.querySelectorAll('.services-grid, .testi-grid, .process-steps').forEach(parent => {
  [...parent.querySelectorAll('.fade-up')].forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── Formulário de Qualificação ──
document.querySelectorAll('.form-options').forEach(group => {
  group.querySelectorAll('.form-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.form-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});

function submitForm(e) {
  e.preventDefault();

  const get = (id) => {
    const sel = document.querySelector(`#${id} .form-opt.selected`);
    return sel ? sel.getAttribute('data-val') : 'Não informado';
  };

  const nome = document.getElementById('nome').value.trim() || 'Não informado';
  const telefone = document.getElementById('telefone').value.trim() || 'Não informado';
  const profissao = get('profissao');
  const marketing = get('marketing');
  const problema = get('problema');
  const faturamento = get('faturamento');

  const msg = `Olá! Vim pelo site da Calu e quero meu diagnóstico gratuito. 📋

*Nome:* ${nome}
*Telefone:* ${telefone}
*Profissão:* ${profissao}
*Investe em marketing:* ${marketing}
*Maior problema:* ${problema}
*Faturamento mensal:* ${faturamento}`;

  const url = `https://wa.me/5521982629968?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ── Hero Slideshow ──
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
})();

// ── Nav Scroll Effect ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
