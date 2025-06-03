// Dados da aplicação
const dadosApp = {
    licencas_creative_commons: [
        {
            nome: "CC0 (Domínio Público)",
            descricao: "Renúncia total aos direitos. Pode usar a obra para qualquer finalidade sem atribuição.",
            cor: "#EF9421",
            icone: "🌐",
            detalhe: "Permite uso comercial e adaptações. Não requer atribuição."
        },
        {
            nome: "CC BY (Atribuição)",
            descricao: "Permite qualquer uso desde que seja dado crédito ao autor original.",
            cor: "#AADB1E",
            icone: "👤",
            detalhe: "Permite uso comercial e adaptações. Requer atribuição."
        },
        {
            nome: "CC BY-SA (Atribuição-CompartilhaIgual)",
            descricao: "Permite qualquer uso desde que seja dado crédito e que novas criações tenham a mesma licença.",
            cor: "#3C7D98",
            icone: "🔄",
            detalhe: "Permite uso comercial. Requer atribuição e licenciar derivados com a mesma licença."
        },
        {
            nome: "CC BY-ND (Atribuição-SemDerivações)",
            descricao: "Permite redistribuição, comercial ou não-comercial, desde que a obra seja distribuída inalterada e completa, com crédito ao autor.",
            cor: "#9C5BB5",
            icone: "🚫",
            detalhe: "Permite uso comercial. Requer atribuição. Não permite derivações."
        },
        {
            nome: "CC BY-NC (Atribuição-NãoComercial)",
            descricao: "Permite adaptações desde que seja dado crédito e que o uso não seja comercial.",
            cor: "#FB7729",
            icone: "💰",
            detalhe: "Não permite uso comercial. Requer atribuição. Permite derivações."
        },
        {
            nome: "CC BY-NC-SA (Atribuição-NãoComercial-CompartilhaIgual)",
            descricao: "Permite adaptações não comerciais desde que seja dado crédito e que novas criações tenham a mesma licença.",
            cor: "#6A3997",
            icone: "🔄💰",
            detalhe: "Não permite uso comercial. Requer atribuição e licenciar derivados com a mesma licença."
        },
        {
            nome: "CC BY-NC-ND (Atribuição-SemDerivações-SemDerivados)",
            descricao: "A mais restritiva das licenças CC. Permite download e partilha desde que seja dado crédito, mas não permite alterações ou uso comercial.",
            cor: "#CD3B3B",
            icone: "🚫💰",
            detalhe: "Não permite uso comercial nem derivações. Requer atribuição."
        }
    ],
    bancos_imagens: [
        {
            nome: "Pixabay",
            url: "#",
            descricao: "Imagens de alta qualidade totalmente gratuitas, livres de direitos autorais.",
            licenca: "Licença Pixabay (similar a CC0)",
            icone: "🖼️",
            imagem: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=250&fit=crop"
        },
        {
            nome: "Unsplash",
            url: "#",
            descricao: "Fotografias de alta resolução gratuitas. Todas as imagens são livres de direitos autorais.",
            licenca: "Licença Unsplash (similar a CC0)",
            icone: "📷",
            imagem: "https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=400&h=250&fit=crop"
        },
        {
            nome: "Pexels",
            url: "#",
            descricao: "Fotos e vídeos gratuitos de alta qualidade partilhados por criadores talentosos.",
            licenca: "Licença Pexels (similar a CC0)",
            icone: "📸",
            imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
        },
        {
            nome: "Reshot",
            url: "#",
            descricao: "Imagens de alta qualidade, gratuitas e livres de direitos autorais.",
            licenca: "Licença gratuita sem atribuição",
            icone: "🎞️",
            imagem: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop"
        },
        {
            nome: "Google Imagens",
            url: "#",
            descricao: "Use os filtros de direitos de utilização para encontrar imagens que pode usar legalmente.",
            licenca: "Varia conforme a imagem",
            icone: "🔍",
            imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
        },
        {
            nome: "Wikimedia Commons",
            url: "#",
            descricao: "Repositório de mídia livre que qualquer pessoa pode usar ou contribuir.",
            licenca: "Varia (geralmente CC)",
            icone: "📚",
            imagem: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
        },
        {
            nome: "Creative Commons Search",
            url: "#",
            descricao: "Ferramenta para procurar em diversas fontes por conteúdo licenciado sob Creative Commons.",
            licenca: "Varia (sempre Creative Commons)",
            icone: "🔎",
            imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
        }
    ],
    praticas: [
        {
            titulo: "Verificar sempre a licença",
            descricao: "Antes de usar qualquer imagem, verifique que tipo de licença ela possui e quais as permissões/restrições.",
            icone: "✅"
        },
        {
            titulo: "Atribuir corretamente",
            descricao: "Inclua o nome do autor, título da obra (se disponível) e o tipo de licença.",
            icone: "👤"
        },
        {
            titulo: "Respeitar as restrições",
            descricao: "Se a licença não permite uso comercial ou modificações, respeite essas limitações.",
            icone: "🚫"
        },
        {
            titulo: "Manter a atribuição visível",
            descricao: "Coloque as atribuições em local visível, geralmente próximo à imagem ou no final do documento.",
            icone: "👁️"
        },
        {
            titulo: "Documentar as fontes",
            descricao: "Mantenha um registo das fontes de todas as imagens utilizadas nos seus materiais didáticos.",
            icone: "📝"
        },
        {
            titulo: "Usar ferramentas de busca inversa",
            descricao: "Quando não tiver certeza da origem, use ferramentas como Google Images ou TinEye para verificar.",
            icone: "🔍"
        }
    ],
    perguntas_quiz: [
        {
            pergunta: "Qual das seguintes licenças Creative Commons permite uso comercial sem necessidade de atribuição?",
            opcoes: [
                "CC BY (Atribuição)",
                "CC0 (Domínio Público)",
                "CC BY-NC (Atribuição-NãoComercial)",
                "CC BY-SA (Atribuição-CompartilhaIgual)"
            ],
            resposta_correta: 1,
            explicacao: "A licença CC0 (Domínio Público) é a única que permite uso comercial sem necessidade de atribuição, pois o autor renuncia a todos os seus direitos."
        },
        {
            pergunta: "Um professor pode usar qualquer imagem da internet para fins educacionais sem se preocupar com direitos autorais?",
            opcoes: [
                "Sim, desde que seja para uso educacional",
                "Sim, mas apenas em escolas públicas",
                "Não, o uso educacional tem algumas exceções mas ainda deve respeitar direitos autorais",
                "Não, nunca se pode usar imagens da internet em contexto educacional"
            ],
            resposta_correta: 2,
            explicacao: "Mesmo para fins educacionais, é necessário respeitar os direitos autorais. Existem algumas exceções e flexibilidades para uso educacional, mas não é uma carta branca para usar qualquer imagem sem autorização."
        },
        {
            pergunta: "Qual das seguintes situações constitui um uso correto de uma imagem com licença CC BY?",
            opcoes: [
                "Usar a imagem sem qualquer atribuição",
                "Usar a imagem e atribuir o autor, mas proibir que outros a utilizem",
                "Usar a imagem para fins comerciais, desde que atribuindo o autor",
                "Usar a imagem apenas para fins não comerciais"
            ],
            resposta_correta: 2,
            explicacao: "A licença CC BY permite qualquer uso, incluindo comercial, desde que seja atribuído crédito ao autor original da obra."
        },
        {
            pergunta: "Quais das seguintes fontes oferecem imagens totalmente livres para uso, sem necessidade de atribuição?",
            opcoes: [
                "Todas as imagens do Google Imagens",
                "Pixabay, Unsplash e Pexels",
                "Qualquer imagem compartilhada nas redes sociais",
                "Apenas imagens marcadas explicitamente como 'sem direitos autorais'"
            ],
            resposta_correta: 1,
            explicacao: "Pixabay, Unsplash e Pexels são bancos de imagens que oferecem conteúdo sob licenças que não requerem atribuição (similares a CC0), embora a atribuição seja apreciada."
        },
        {
            pergunta: "Ao encontrar uma imagem sem informação clara sobre a licença, o que deve fazer?",
            opcoes: [
                "Presumir que está em domínio público e usar livremente",
                "Usar a imagem e atribuir 'Autor Desconhecido'",
                "Presumir que tem direitos autorais e evitar usá-la sem autorização",
                "Usar apenas para fins educacionais, pois há sempre esta exceção"
            ],
            resposta_correta: 2,
            explicacao: "Na ausência de informação clara sobre a licença, deve-se presumir que a imagem está protegida por direitos autorais e, portanto, não deve ser usada sem autorização do autor ou detentor dos direitos."
        },
        {
            pergunta: "Qual é a forma correta de atribuir uma imagem com licença CC BY-SA?",
            opcoes: [
                "Não é necessário atribuir, apenas compartilhar com a mesma licença",
                "Basta mencionar que a imagem tem licença Creative Commons",
                "Mencionar o autor e o tipo de licença, e compartilhar derivados com a mesma licença",
                "Pagar uma taxa de licenciamento ao autor original"
            ],
            resposta_correta: 2,
            explicacao: "Para imagens com licença CC BY-SA, é necessário atribuir o autor original, mencionar o tipo de licença e garantir que qualquer obra derivada seja compartilhada sob a mesma licença."
        },
        {
            pergunta: "Em Portugal, qual destas práticas é permitida no contexto educacional?",
            opcoes: [
                "Reproduzir livros inteiros para distribuir aos alunos",
                "Usar pequenos excertos ou imagens de obras para fins de citação, crítica ou ensino",
                "Modificar livremente qualquer imagem para uso em sala de aula",
                "Ignorar completamente os direitos autorais se o uso for educacional"
            ],
            resposta_correta: 1,
            explicacao: "A legislação portuguesa, em linha com a europeia, permite o uso de pequenos excertos de obras protegidas para fins de citação, crítica ou ensino, desde que a fonte seja indicada. No entanto, não permite a reprodução integral ou usos que prejudiquem a exploração normal da obra."
        }
    ]
};

// Função para inicializar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar as tabs
    setupTabs();
    
    // Renderizar os conteúdos dinâmicos
    renderLicensas();
    renderBancosImagens();
    renderPraticas();
    setupAccordions();
    
    // Inicializar o quiz
    initQuiz();
});

// Configuração das tabs
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover a classe 'active' de todos os botões e conteúdos
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Adicionar a classe 'active' ao botão clicado e ao conteúdo correspondente
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Renderizar as licenças Creative Commons
function renderLicensas() {
    const licenseContainer = document.getElementById('license-container');
    
    dadosApp.licencas_creative_commons.forEach(licenca => {
        const licenseCard = document.createElement('div');
        licenseCard.className = 'license-card';
        
        licenseCard.innerHTML = `
            <div class="license-card__header">
                <div class="license-card__icon" style="background-color: ${licenca.cor}40">${licenca.icone}</div>
                <div class="license-card__title">${licenca.nome}</div>
            </div>
            <div class="license-card__body">
                <p class="license-card__description">${licenca.descricao}</p>
                <div class="license-card__detail">${licenca.detalhe}</div>
            </div>
        `;
        
        licenseContainer.appendChild(licenseCard);
    });
}

// Renderizar os bancos de imagens
function renderBancosImagens() {
    const banksContainer = document.getElementById('banks-container');
    
    dadosApp.bancos_imagens.forEach(banco => {
        const bankCard = document.createElement('div');
        bankCard.className = 'bank-card';
        
        bankCard.innerHTML = `
            <div class="bank-card__header">
                <div class="bank-card__icon">${banco.icone}</div>
                <div class="bank-card__title">${banco.nome}</div>
            </div>
            <div class="bank-card__body">
                ${banco.imagem ? `<img src="${banco.imagem}" alt="Logo do ${banco.nome}" class="bank-card__image">` : ''}
                <p class="bank-card__description">${banco.descricao}</p>
                <p class="bank-card__license">${banco.licenca}</p>
                <button class="btn btn--primary bank-card__button">Visitar ${banco.nome}</button>
            </div>
        `;
        
        bankCard.querySelector('button').addEventListener('click', function() {
            alert(`Esta é uma simulação. Num site real, você seria redirecionado para ${banco.nome}.`);
        });
        
        banksContainer.appendChild(bankCard);
    });
}

// Renderizar as boas práticas
function renderPraticas() {
    const praticasContainer = document.getElementById('praticas-container');
    
    dadosApp.praticas.forEach(pratica => {
        const praticaItem = document.createElement('div');
        praticaItem.className = 'pratica-item';
        
        praticaItem.innerHTML = `
            <div class="pratica-icon">${pratica.icone}</div>
            <div class="pratica-content">
                <h4 class="pratica-title">${pratica.titulo}</h4>
                <p class="pratica-description">${pratica.descricao}</p>
            </div>
        `;
        
        praticasContainer.appendChild(praticaItem);
    });
}

// Configurar os acordeões
function setupAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle classe 'active' no header
            header.classList.toggle('active');
            
            // Toggle classe 'active' no conteúdo
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });
}

// Variáveis para o quiz
let perguntaAtual = 0;
let pontuacao = 0;
let perguntasRespondidas = 0;

// Inicializar o quiz
function initQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    perguntasRespondidas = 0;
    
    // Mostrar a primeira pergunta
    mostrarPergunta();
    
    // Configurar o botão de reiniciar o quiz
    document.getElementById('restart-quiz').addEventListener('click', () => {
        document.getElementById('quiz-results').style.display = 'none';
        initQuiz();
    });
}

// Mostrar a pergunta atual no quiz
function mostrarPergunta() {
    // Atualizar a barra de progresso
    atualizarProgresso();
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    
    // Se todas as perguntas foram respondidas, mostrar resultados
    if (perguntaAtual >= dadosApp.perguntas_quiz.length) {
        mostrarResultados();
        return;
    }
    
    const pergunta = dadosApp.perguntas_quiz[perguntaAtual];
    
    // Criar o elemento de pergunta
    const questionElement = document.createElement('div');
    questionElement.className = 'card';
    questionElement.innerHTML = `
        <div class="card__body">
            <div class="quiz-question">
                <h3>${pergunta.pergunta}</h3>
                <div class="quiz-options" id="quiz-options-${perguntaAtual}">
                    ${pergunta.opcoes.map((opcao, index) => `
                        <div class="quiz-option" data-index="${index}">
                            <span>${opcao}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-feedback" id="quiz-feedback-${perguntaAtual}"></div>
            </div>
            <div class="quiz-navigation">
                <button class="btn btn--secondary" id="btn-anterior" ${perguntaAtual === 0 ? 'disabled' : ''}>Anterior</button>
                <button class="btn btn--primary" id="btn-proximo" disabled>Próxima</button>
            </div>
        </div>
    `;
    
    quizContainer.appendChild(questionElement);
    
    // Adicionar event listeners às opções
    const opcoesElements = document.querySelectorAll(`#quiz-options-${perguntaAtual} .quiz-option`);
    opcoesElements.forEach(opcao => {
        opcao.addEventListener('click', () => {
            // Desselecionar todas as opções
            opcoesElements.forEach(opt => opt.classList.remove('selected'));
            
            // Selecionar a opção clicada
            opcao.classList.add('selected');
            
            // Habilitar o botão de próxima pergunta
            document.getElementById('btn-proximo').removeAttribute('disabled');
            
            // Verificar a resposta
            const opcaoIndex = parseInt(opcao.getAttribute('data-index'));
            const respostaCorreta = pergunta.resposta_correta;
            
            const feedbackElement = document.getElementById(`quiz-feedback-${perguntaAtual}`);
            
            if (opcaoIndex === respostaCorreta) {
                // Resposta correta
                opcoesElements.forEach(opt => opt.classList.remove('correct', 'incorrect'));
                opcao.classList.add('correct');
                feedbackElement.innerHTML = `<p><strong>Correto!</strong> ${pergunta.explicacao}</p>`;
                feedbackElement.className = 'quiz-feedback correct';
                pontuacao++;
            } else {
                // Resposta incorreta
                opcoesElements.forEach(opt => opt.classList.remove('correct', 'incorrect'));
                opcao.classList.add('incorrect');
                opcoesElements[respostaCorreta].classList.add('correct');
                feedbackElement.innerHTML = `<p><strong>Incorreto.</strong> ${pergunta.explicacao}</p>`;
                feedbackElement.className = 'quiz-feedback incorrect';
            }
            
            perguntasRespondidas++;
        });
    });
    
    // Configurar os botões de navegação
    document.getElementById('btn-anterior').addEventListener('click', () => {
        if (perguntaAtual > 0) {
            perguntaAtual--;
            mostrarPergunta();
        }
    });
    
    document.getElementById('btn-proximo').addEventListener('click', () => {
        perguntaAtual++;
        mostrarPergunta();
    });
}

// Atualizar a barra de progresso do quiz
function atualizarProgresso() {
    const totalPerguntas = dadosApp.perguntas_quiz.length;
    const percentual = (perguntaAtual / totalPerguntas) * 100;
    
    document.getElementById('quiz-progress').style.width = `${percentual}%`;
    document.getElementById('quiz-progress-text').textContent = `Pergunta ${perguntaAtual + 1} de ${totalPerguntas}`;
}

// Mostrar os resultados do quiz
function mostrarResultados() {
    const totalPerguntas = dadosApp.perguntas_quiz.length;
    const percentual = (pontuacao / totalPerguntas) * 100;
    
    // Atualizar a barra de progresso para 100%
    document.getElementById('quiz-progress').style.width = '100%';
    document.getElementById('quiz-progress-text').textContent = `Quiz completo`;
    
    // Mostrar a pontuação
    document.getElementById('quiz-container').innerHTML = '';
    document.getElementById('quiz-results').style.display = 'block';
    
    let mensagem = '';
    if (percentual >= 90) {
        mensagem = 'Excelente! Você domina o tema dos direitos de imagem!';
    } else if (percentual >= 70) {
        mensagem = 'Muito bom! Você tem um bom conhecimento sobre direitos de imagem.';
    } else if (percentual >= 50) {
        mensagem = 'Bom trabalho! Você tem um conhecimento razoável, mas pode melhorar.';
    } else {
        mensagem = 'Você precisa estudar mais sobre direitos de imagem. Reveja o conteúdo!';
    }
    
    document.getElementById('results-content').innerHTML = `
        <div class="results-message">
            <div class="results-score">${pontuacao}/${totalPerguntas}</div>
            <div class="results-feedback">${mensagem}</div>
        </div>
        <p>Recomendamos que reveja as secções anteriores para aprofundar os seus conhecimentos sobre o uso correto de imagens na web.</p>
    `;
}