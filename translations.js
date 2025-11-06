// Translations object for all languages
const translations = {
    uk: {
        logo: "Dr. Barzylovych",
        nav: {
            about: "Про мене",
            services: "Послуги",
            feedbacks: "Відгуки",
            appointment: "Запис на прийом",
            contact: "Контакти"
        },
        hero: {
            title: "Професійна медична допомога у м.Порто",
            subtitle: "Досвідчений педіатр та алерголог з приватною практикою в Порту",
            description: "Я - педіатр та алерголог у Порто, Португалія, який працює самостійно. Надаю професійну медичну допомогу дітям, діагностику та лікування алергій у Порто. Спеціалізуюся на педіатричній допомозі та алергології для дітей у м. Порто. Записайтеся на консультацію педіатра або алерголога вже сьогодні.",
            cta: "Записатися на прийом",
            learn: "Дізнатися більше",
            feature1: "Багаторічний досвід",
            feature2: "Індивідуальний підхід",
            feature3: "Португальська сертифікація"
        },
        about: {
            title: "Про мене",
            subtitle: "Ваш надійний педіатр та алерголог у Порто",
            text1: "Я - досвідчений педіатр та алерголог, який працює самостійно в м. Порто, Португалія. Спеціалізуюся на педіатричній допомозі та лікуванні алергій у дітей. Моя приватна практика в Порто дозволяє мені надавати індивідуальний підхід до кожного маленького пацієнта та його батьків.",
            text2: "Як педіатр та алерголог у Порто, я використовую сучасні методи діагностики та лікування алергій, проводжу алергологічні тести та надаю комплексну педіатричну допомогу дітям у м. Порто. Моя мета - забезпечити здоров'я та благополуччя ваших дітей."
        },
        services: {
            title: "Мої послуги",
            subtitle: "Педіатрична допомога та алергологія для дітей у Порто",
            item1: {
                title: "Педіатричні консультації",
                desc: "Консультації педіатра у Порто з питань здоров'я дітей, розвитку та хвороб дитячого віку"
            },
            item2: {
                title: "Алергологічна діагностика",
                desc: "Діагностика алергій у дітей у Порто: алергологічні тести, визначення алергенів та діагностика алергічних захворювань"
            },
            item3: {
                title: "Лікування алергій",
                desc: "Лікування алергічних захворювань у дітей: астма, алергічний риніт, атопічний дерматит, алергії на харчові продукти"
            },
            item4: {
                title: "Профілактичні огляди",
                desc: "Профілактичні медичні огляди дітей, щеплення та моніторинг розвитку дитини у Порто"
            },
            item5: {
                title: "Лікування дитячих хвороб",
                desc: "Лікування гострих та хронічних захворювань у дітей: інфекції, захворювання органів дихання, шлунково-кишкові розлади"
            },
            item6: {
                title: "Педіатричний огляд",
                desc: "Комплексні педіатричні огляди дітей, щорічні перевірки здоров'я та консультації з розвитку дитини у Порто"
            }
        },
        feedbacks: {
            title: "Відгуки пацієнтів",
            subtitle: "Що кажуть батьки моїх маленьких пацієнтів",
            item1: {
                text: "\"Чудовий педіатр у Порто! Професійний підхід до дітей та увага до деталей. Допомогла з лікуванням алергії у нашого сина. Рекомендую!\"",
                author: "— Олена М., мама 5-річного сина"
            },
            item2: {
                text: "\"Досвідчений алерголог та педіатр у Порто. Лікар справді піклується про дітей та знаходить індивідуальний підхід до кожного маленького пацієнта. Дякую за допомогу!\"",
                author: "— Іван К., батько 3-річної доньки"
            },
            item3: {
                text: "\"Високий рівень професіоналізму педіатра у Порто. Проведені алергологічні тести та надане лікування допомогли нашій дитині. Індивідуальний підхід та турбота про здоров'я дитини.\"",
                author: "— Марія С., мама 7-річної доньки"
            },
            item4: {
                text: "\"Дуже вдячна за професійну допомогу! Лікар детально пояснила всі аспекти лікування та дала корисні поради. Наша дитина почувається набагато краще.\"",
                author: "— Наталія П., мама 4-річного сина"
            },
            item5: {
                text: "\"Чудовий спеціаліст! Відмінно знає свою справу, завжди уважна та терпляча. Рекомендую всім батькам, хто шукає якісну медичну допомогу для дітей.\"",
                author: "— Андрій В., батько 6-річної доньки"
            },
            item6: {
                text: "\"Професіоналізм на найвищому рівні! Лікар знайшла причину проблеми нашого сина та призначила ефективне лікування. Дуже задоволені результатом!\"",
                author: "— Тетяна К., мама 8-річного сина"
            }
        },
        appointment: {
            title: "Як записатися на прийом",
            subtitle: "Простий процес запису на консультацію",
            step1: {
                title: "Оберіть спосіб",
                desc: "Зателефонуйте або заповніть форму онлайн"
            },
            step2: {
                title: "Оберіть дату",
                desc: "Виберіть зручний для вас час та дату"
            },
            step3: {
                title: "Підтвердіть",
                desc: "Отримайте підтвердження та приходьте на прийом"
            },
            form: {
                name: "Ім'я",
                phone: "Телефон",
                date: "Бажана дата",
                message: "Повідомлення",
                submit: "Відправити запит"
            }
        },
        footer: {
            contact: "Контакти",
            phone: "Телефон:",
            "phone.value": "+351 912 345 678",
            email: "Email:",
            "email.value": "allergo.online@gmail.com",
            address: "Адреса:",
            "address.value": "м. Порто, Португалія",
            hours: "Робочі години",
            "hours.weekday": "Пн-Пт: 09:00 - 18:00",
            "hours.saturday": "Субота: 10:00 - 14:00",
            "hours.sunday": "Неділя: Вихідний",
            legal: "Юридична інформація",
            privacy: "Політика конфіденційності",
            terms: "Умови використання",
            license: "Ліцензія",
            social: "Соціальні мережі",
            copyright: "© 2025 Dr. Barzylovych. Всі права захищені."
        }
    },
    en: {
        logo: "Dr. Barzylovych",
        nav: {
            about: "About Me",
            services: "Services",
            feedbacks: "Testimonials",
            appointment: "Appointment",
            contact: "Contact"
        },
        hero: {
            title: "Professional medical care in Porto",
            subtitle: "Experienced pediatrician and allergist with private practice in Porto",
            description: "I am a pediatrician and allergist in Porto, Portugal, working independently. I provide professional medical care for children, allergy diagnosis and treatment in Porto. I specialize in pediatric care and allergy treatment for children in Porto. Book your pediatrician or allergist consultation in Porto today.",
            cta: "Book an Appointment",
            learn: "Learn More",
            feature1: "Years of Experience",
            feature2: "Individual Approach",
            feature3: "Portuguese Certification"
        },
        about: {
            title: "About Me",
            subtitle: "Your trusted pediatrician and allergist in Porto",
            text1: "I am an experienced pediatrician and allergist working independently in Porto, Portugal. I specialize in pediatric care and allergy treatment for children. My private practice in Porto allows me to provide an individual approach to each young patient and their parents.",
            text2: "As a pediatrician and allergist in Porto, I use modern methods of allergy diagnosis and treatment, perform allergy testing, and provide comprehensive pediatric care for children in Porto. My goal is to ensure the health and well-being of your children."
        },
        services: {
            title: "My Services",
            subtitle: "Pediatric care and allergy treatment for children in Porto",
            item1: {
                title: "Pediatric Consultations",
                desc: "Pediatrician consultations in Porto for children's health, development, and childhood diseases"
            },
            item2: {
                title: "Allergy Diagnostics",
                desc: "Allergy diagnosis in children in Porto: allergy testing, allergen identification, and diagnosis of allergic diseases"
            },
            item3: {
                title: "Allergy Treatment",
                desc: "Treatment of allergic diseases in children: asthma, allergic rhinitis, atopic dermatitis, food allergies"
            },
            item4: {
                title: "Preventive Check-ups",
                desc: "Preventive medical examinations for children, vaccinations, and child development monitoring in Porto"
            },
            item5: {
                title: "Childhood Disease Treatment",
                desc: "Treatment of acute and chronic diseases in children: infections, respiratory diseases, gastrointestinal disorders"
            },
            item6: {
                title: "Pediatric Examination",
                desc: "Comprehensive pediatric examinations for children, annual health check-ups, and child development consultations in Porto"
            }
        },
        feedbacks: {
            title: "Patient Testimonials",
            subtitle: "What parents of my young patients say",
            item1: {
                text: "\"Excellent pediatrician in Porto! Professional approach to children and attention to detail. Helped with allergy treatment for our son. Highly recommend!\"",
                author: "— Elena M., mother of 5-year-old son"
            },
            item2: {
                text: "\"Experienced allergist and pediatrician in Porto. The doctor truly cares about children and finds an individual approach to each young patient. Thank you for your help!\"",
                author: "— Ivan K., father of 3-year-old daughter"
            },
            item3: {
                text: "\"High level of professionalism of the pediatrician in Porto. Allergy testing and treatment provided helped our child. Individual approach and care for children's health.\"",
                author: "— Maria S., mother of 7-year-old daughter"
            },
            item4: {
                text: "\"Very grateful for the professional help! The doctor explained all aspects of treatment in detail and gave useful advice. Our child feels much better.\"",
                author: "— Natalia P., mother of 4-year-old son"
            },
            item5: {
                text: "\"Excellent specialist! Knows her job very well, always attentive and patient. I recommend to all parents looking for quality medical care for children.\"",
                author: "— Andrii V., father of 6-year-old daughter"
            },
            item6: {
                text: "\"Professionalism at the highest level! The doctor found the cause of our son's problem and prescribed effective treatment. Very satisfied with the result!\"",
                author: "— Tetyana K., mother of 8-year-old son"
            }
        },
        appointment: {
            title: "How to Book an Appointment",
            subtitle: "Simple process to schedule a consultation",
            step1: {
                title: "Choose a Method",
                desc: "Call us or fill out the online form"
            },
            step2: {
                title: "Select Date",
                desc: "Choose a convenient time and date for you"
            },
            step3: {
                title: "Confirm",
                desc: "Receive confirmation and come to your appointment"
            },
            form: {
                name: "Name",
                phone: "Phone",
                date: "Preferred Date",
                message: "Message",
                submit: "Submit Request"
            }
        },
        footer: {
            contact: "Contact",
            phone: "Phone:",
            "phone.value": "+351 912 345 678",
            email: "Email:",
            "email.value": "allergo.online@gmail.com",
            address: "Address:",
            "address.value": "Porto, Portugal",
            hours: "Working Hours",
            "hours.weekday": "Mon-Fri: 09:00 - 18:00",
            "hours.saturday": "Saturday: 10:00 - 14:00",
            "hours.sunday": "Sunday: Closed",
            legal: "Legal Information",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            license: "License",
            social: "Social Media",
            copyright: "© 2025 Dr. Barzylovych. All rights reserved."
        }
    },
    pt: {
        logo: "Dr. Barzylovych",
        nav: {
            about: "Sobre Mim",
            services: "Serviços",
            feedbacks: "Depoimentos",
            appointment: "Agendamento",
            contact: "Contato"
        },
        hero: {
            title: "Assistência médica profissional no Porto",
            subtitle: "Pediatra e alergologista experiente com consultório privado no Porto",
            description: "Sou pediatra e alergologista no Porto, Portugal, trabalhando de forma independente. Forneço cuidados médicos profissionais para crianças, diagnóstico e tratamento de alergias no Porto. Especializo-me em cuidados pediátricos e tratamento de alergias para crianças no Porto. Agende sua consulta com pediatra ou alergologista no Porto hoje.",
            cta: "Agendar Consulta",
            learn: "Saber Mais",
            feature1: "Anos de Experiência",
            feature2: "Abordagem Individual",
            feature3: "Certificação Portuguesa"
        },
        about: {
            title: "Sobre Mim",
            subtitle: "Seu pediatra e alergologista confiável no Porto",
            text1: "Sou um pediatra e alergologista experiente trabalhando de forma independente no Porto, Portugal. Especializo-me em cuidados pediátricos e tratamento de alergias em crianças. Meu consultório privado no Porto me permite oferecer uma abordagem individual para cada paciente jovem e seus pais.",
            text2: "Como pediatra e alergologista no Porto, uso métodos modernos de diagnóstico e tratamento de alergias, realizo testes de alergia e forneço cuidados pediátricos abrangentes para crianças no Porto. Meu objetivo é garantir a saúde e o bem-estar de suas crianças."
        },
        services: {
            title: "Meus Serviços",
            subtitle: "Cuidados pediátricos e tratamento de alergias para crianças no Porto",
            item1: {
                title: "Consultas Pediátricas",
                desc: "Consultas com pediatra no Porto para saúde infantil, desenvolvimento e doenças da infância"
            },
            item2: {
                title: "Diagnóstico Alergológico",
                desc: "Diagnóstico de alergias em crianças no Porto: testes de alergia, identificação de alérgenos e diagnóstico de doenças alérgicas"
            },
            item3: {
                title: "Tratamento de Alergias",
                desc: "Tratamento de doenças alérgicas em crianças: asma, rinite alérgica, dermatite atópica, alergias alimentares"
            },
            item4: {
                title: "Exames Preventivos",
                desc: "Exames médicos preventivos para crianças, vacinações e monitoramento do desenvolvimento infantil no Porto"
            },
            item5: {
                title: "Tratamento de Doenças Infantis",
                desc: "Tratamento de doenças agudas e crônicas em crianças: infecções, doenças respiratórias, distúrbios gastrointestinal"
            },
            item6: {
                title: "Exame Pediátrico",
                desc: "Exames pediátricos abrangentes para crianças, check-ups anuais de saúde e consultas sobre desenvolvimento infantil no Porto"
            }
        },
        feedbacks: {
            title: "Depoimentos de Pacientes",
            subtitle: "O que os pais dos meus jovens pacientes dizem",
            item1: {
                text: "\"Excelente pediatra no Porto! Abordagem profissional com crianças e atenção aos detalhes. Ajudou com o tratamento de alergia do nosso filho. Recomendo!\"",
                author: "— Elena M., mãe de filho de 5 anos"
            },
            item2: {
                text: "\"Alergologista e pediatra experiente no Porto. O médico realmente se importa com as crianças e encontra uma abordagem individual para cada paciente jovem. Obrigado pela ajuda!\"",
                author: "— Ivan K., pai de filha de 3 anos"
            },
            item3: {
                text: "\"Alto nível de profissionalismo do pediatra no Porto. Testes de alergia e tratamento fornecido ajudaram nossa criança. Abordagem individual e cuidado com a saúde das crianças.\"",
                author: "— Maria S., mãe de filha de 7 anos"
            },
            item4: {
                text: "\"Muito grata pela ajuda profissional! O médico explicou todos os aspectos do tratamento em detalhes e deu conselhos úteis. Nossa criança se sente muito melhor.\"",
                author: "— Natalia P., mãe de filho de 4 anos"
            },
            item5: {
                text: "\"Excelente especialista! Conhece muito bem seu trabalho, sempre atenta e paciente. Recomendo a todos os pais que procuram cuidados médicos de qualidade para crianças.\"",
                author: "— Andrii V., pai de filha de 6 anos"
            },
            item6: {
                text: "\"Profissionalismo do mais alto nível! O médico encontrou a causa do problema do nosso filho e prescreveu um tratamento eficaz. Muito satisfeitos com o resultado!\"",
                author: "— Tetyana K., mãe de filho de 8 anos"
            }
        },
        appointment: {
            title: "Como Agendar uma Consulta",
            subtitle: "Processo simples para agendar uma consulta",
            step1: {
                title: "Escolha um Método",
                desc: "Ligue para nós ou preencha o formulário online"
            },
            step2: {
                title: "Selecione a Data",
                desc: "Escolha um horário e data convenientes para você"
            },
            step3: {
                title: "Confirme",
                desc: "Receba a confirmação e compareça à sua consulta"
            },
            form: {
                name: "Nome",
                phone: "Telefone",
                date: "Data Preferida",
                message: "Mensagem",
                submit: "Enviar Solicitação"
            }
        },
        footer: {
            contact: "Contato",
            phone: "Telefone:",
            "phone.value": "+351 912 345 678",
            email: "Email:",
            "email.value": "allergo.online@gmail.com",
            address: "Endereço:",
            "address.value": "Porto, Portugal",
            hours: "Horário de Funcionamento",
            "hours.weekday": "Seg-Sex: 09:00 - 18:00",
            "hours.saturday": "Sábado: 10:00 - 14:00",
            "hours.sunday": "Domingo: Fechado",
            legal: "Informações Legais",
            privacy: "Política de Privacidade",
            terms: "Termos de Uso",
            license: "Licença",
            social: "Redes Sociais",
            copyright: "© 2025 Dr. Barzylovych. Todos os direitos reservados."
        }
    }
};

