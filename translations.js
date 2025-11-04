// Translations object for all languages
const translations = {
    uk: {
        logo: "Dr. Barzylovych",
        nav: {
            about: "Про нас",
            services: "Послуги",
            feedbacks: "Відгуки",
            appointment: "Запис на прийом",
            contact: "Контакти"
        },
        hero: {
            title: "Професійна медична допомога у м. Порто",
            subtitle: "Досвідчений лікар з багаторічною практикою в Португалії",
            description: "Надання якісної медичної допомоги з індивідуальним підхідом до кожного пацієнта в м. Порто, Португалія. Записайтеся на консультацію вже сьогодні.",
            cta: "Записатися на прийом",
            learn: "Дізнатися більше",
            feature1: "Багаторічний досвід",
            feature2: "Індивідуальний підхід",
            feature3: "Сучасне обладнання"
        },
        about: {
            title: "Про нас",
            subtitle: "Ваш надійний партнер у забезпеченні здоров'я в Порту",
            text1: "Ми пропонуємо професійні медичні послуги найвищої якості в м. Порто, Португалія. Наш досвід та індивідуальний підхід до кожного пацієнта забезпечують найкращий результат лікування.",
            text2: "Висококваліфікований фахівець використовує сучасні методи діагностики та лікування, щоб забезпечити ефективну медичну допомогу жителям та гостям Порту."
        },
        services: {
            title: "Наші послуги",
            subtitle: "Повний спектр медичних послуг для вашої родини",
            item1: {
                title: "Консультації",
                desc: "Професійні консультації з різних питань здоров'я"
            },
            item2: {
                title: "Діагностика",
                desc: "Сучасні методи діагностики та обстеження"
            },
            item3: {
                title: "Лікування",
                desc: "Ефективне лікування з використанням найсучасніших методів"
            },
            item4: {
                title: "Профілактика",
                desc: "Профілактичні обстеження та рекомендації"
            },
            item5: {
                title: "Реабілітація",
                desc: "Програми відновлення та реабілітації"
            },
            item6: {
                title: "Огляд",
                desc: "Комплексні медичні огляди та щорічні перевірки"
            }
        },
        feedbacks: {
            title: "Відгуки пацієнтів",
            subtitle: "Що кажуть наші пацієнти",
            item1: {
                text: "\"Професійний підхід та увага до деталей. Дуже задоволений обслуговуванням!\"",
                author: "— Олена М."
            },
            item2: {
                text: "\"Чудовий лікар, який справді піклується про пацієнтів. Рекомендую!\"",
                author: "— Іван К."
            },
            item3: {
                text: "\"Високий рівень професіоналізму та індивідуальний підхід. Дякую за допомогу!\"",
                author: "— Марія С."
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
            "email.value": "info@doctor-barzylovych.com",
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
            about: "About",
            services: "Services",
            feedbacks: "Testimonials",
            appointment: "Appointment",
            contact: "Contact"
        },
        hero: {
            title: "Professional Medical Care in Porto",
            subtitle: "Experienced doctor with years of practice in Portugal",
            description: "Providing quality medical care with an individual approach to each patient in Porto, Portugal. Book your consultation today.",
            cta: "Book an Appointment",
            learn: "Learn More",
            feature1: "Years of Experience",
            feature2: "Individual Approach",
            feature3: "Modern Equipment"
        },
        about: {
            title: "About Us",
            subtitle: "Your trusted partner in healthcare in Porto",
            text1: "We offer professional medical services of the highest quality in Porto, Portugal. Our experience and individual approach to each patient ensure the best treatment results.",
            text2: "Highly qualified specialist uses modern methods of diagnosis and treatment to provide effective medical care to residents and visitors of Porto."
        },
        services: {
            title: "Our Services",
            subtitle: "Full range of medical services for your family",
            item1: {
                title: "Consultations",
                desc: "Professional consultations on various health issues"
            },
            item2: {
                title: "Diagnostics",
                desc: "Modern diagnostic methods and examinations"
            },
            item3: {
                title: "Treatment",
                desc: "Effective treatment using the most advanced methods"
            },
            item4: {
                title: "Prevention",
                desc: "Preventive examinations and recommendations"
            },
            item5: {
                title: "Rehabilitation",
                desc: "Recovery and rehabilitation programs"
            },
            item6: {
                title: "Check-up",
                desc: "Comprehensive medical examinations and annual check-ups"
            }
        },
        feedbacks: {
            title: "Patient Testimonials",
            subtitle: "What our patients say",
            item1: {
                text: "\"Professional approach and attention to detail. Very satisfied with the service!\"",
                author: "— Elena M."
            },
            item2: {
                text: "\"Excellent doctor who truly cares about patients. Highly recommend!\"",
                author: "— Ivan K."
            },
            item3: {
                text: "\"High level of professionalism and individual approach. Thank you for your help!\"",
                author: "— Maria S."
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
            "email.value": "info@doctor-barzylovych.com",
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
            about: "Sobre",
            services: "Serviços",
            feedbacks: "Depoimentos",
            appointment: "Agendamento",
            contact: "Contato"
        },
        hero: {
            title: "Cuidados Médicos Profissionais no Porto",
            subtitle: "Médico experiente com anos de prática em Portugal",
            description: "Fornecendo cuidados médicos de qualidade com uma abordagem individual para cada paciente no Porto, Portugal. Agende sua consulta hoje.",
            cta: "Agendar Consulta",
            learn: "Saber Mais",
            feature1: "Anos de Experiência",
            feature2: "Abordagem Individual",
            feature3: "Equipamento Moderno"
        },
        about: {
            title: "Sobre Nós",
            subtitle: "Seu parceiro confiável em saúde no Porto",
            text1: "Oferecemos serviços médicos profissionais da mais alta qualidade no Porto, Portugal. Nossa experiência e abordagem individual para cada paciente garantem os melhores resultados de tratamento.",
            text2: "Especialista altamente qualificado usa métodos modernos de diagnóstico e tratamento para fornecer assistência médica eficaz aos residentes e visitantes do Porto."
        },
        services: {
            title: "Nossos Serviços",
            subtitle: "Gama completa de serviços médicos para sua família",
            item1: {
                title: "Consultas",
                desc: "Consultas profissionais sobre várias questões de saúde"
            },
            item2: {
                title: "Diagnóstico",
                desc: "Métodos modernos de diagnóstico e exames"
            },
            item3: {
                title: "Tratamento",
                desc: "Tratamento eficaz usando os métodos mais avançados"
            },
            item4: {
                title: "Prevenção",
                desc: "Exames preventivos e recomendações"
            },
            item5: {
                title: "Reabilitação",
                desc: "Programas de recuperação e reabilitação"
            },
            item6: {
                title: "Check-up",
                desc: "Exames médicos completos e check-ups anuais"
            }
        },
        feedbacks: {
            title: "Depoimentos de Pacientes",
            subtitle: "O que nossos pacientes dizem",
            item1: {
                text: "\"Abordagem profissional e atenção aos detalhes. Muito satisfeito com o atendimento!\"",
                author: "— Elena M."
            },
            item2: {
                text: "\"Excelente médico que realmente se importa com os pacientes. Recomendo!\"",
                author: "— Ivan K."
            },
            item3: {
                text: "\"Alto nível de profissionalismo e abordagem individual. Obrigado pela ajuda!\"",
                author: "— Maria S."
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
            "email.value": "info@doctor-barzylovych.com",
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

