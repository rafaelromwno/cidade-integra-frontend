import React, { useState, useRef, useEffect } from 'react';
import { X, Send, BotMessageSquare } from 'lucide-react';

const predefinedResponses = {
  'como reportar': 'Para reportar um problema, clique no botão "Reportar Problema" no topo da página ou acesse /nova-denuncia. Você precisará descrever o problema, adicionar fotos e informar a localização.',
  'como faço para reportar': 'Para reportar um problema, clique no botão "Reportar Problema" no topo da página ou acesse /nova-denuncia. Você precisará descrever o problema, adicionar fotos e informar a localização.',
  'quero reportar': 'Para reportar um problema, clique no botão "Reportar Problema" no topo da página ou acesse /nova-denuncia.',
  'como funciona': 'O Cidade Integra funciona em 3 passos: 1) Registre o problema com fotos e localização, 2) Nossa equipe analisa e encaminha para o órgão responsável, 3) Você acompanha o status até a resolução.',
  'como o sistema funciona': 'O Cidade Integra funciona em 3 passos: 1) Registre o problema com fotos e localização, 2) Nossa equipe analisa e encaminha para o órgão responsável, 3) Você acompanha o status até a resolução.',
  'tipos de problema': 'Você pode reportar: vazamentos, problemas de iluminação, buracos nas ruas, lixo, manutenção de áreas verdes, poluição sonora, entulho, problemas em praças e outros.',
  'quais problemas posso reportar': 'Você pode reportar: vazamentos, iluminação, buracos, lixo, áreas verdes, poluição sonora, entulho, problemas em praças e outros.',
  'acompanhar denuncia': 'Para acompanhar suas denúncias, acesse a página "Denúncias" no menu ou faça login em sua conta para ver o histórico completo.',
  'como acompanho minha denuncia': 'Acesse a página "Denúncias" no menu ou faça login em sua conta para ver o histórico completo.',
  'meu protocolo': 'Para consultar o status do seu protocolo, acesse a página "Denúncias" e informe o número do protocolo.',
  'contato': 'Para suporte adicional, entre em contato pelo email: suporte@cidadeintegra.com ou utilize o formulário de contato no site.',
  'como entro em contato': 'Você pode enviar um email para suporte@cidadeintegra.com ou utilizar o formulário de contato no site.',
  'telefone': 'No momento, o contato é realizado apenas por email: suporte@cidadeintegra.com',
  'sobre': 'O Cidade Integra é uma plataforma cidadã para reportar problemas urbanos e contribuir para uma cidade melhor. Nosso objetivo é facilitar a comunicação entre cidadãos e órgãos públicos.',
  'quem somos': 'Somos uma equipe dedicada a melhorar a cidade por meio da participação cidadã. O Cidade Integra conecta você ao poder público.',
  'ajuda': 'Você pode perguntar sobre:\n- Como reportar um problema\n- Como funciona o sistema\n- Tipos de problema que posso reportar\n- Como acompanhar minha denúncia\n- Contato\n- Sobre a plataforma\nSe precisar de mais informações, digite a sua dúvida!'
};

function getBotResponse(message) {
  const lower = message.toLowerCase();
  for (const key in predefinedResponses) {
    if (lower.includes(key)) return predefinedResponses[key];
  }
  return 'Desculpe, não entendi. Digite "ajuda" para opções.';
}

const keywords = [
  { label: 'Como reportar?', value: 'como reportar' },
  { label: 'Como funciona?', value: 'como funciona' },
  { label: 'Tipos de problema?', value: 'tipos de problema' },
  { label: 'Acompanhar denúncia', value: 'acompanhar denuncia' },
  { label: 'Contato', value: 'contato' },
  { label: 'Sobre', value: 'sobre' },
  { label: 'Ajuda', value: 'ajuda' }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou o assistente virtual do Cidade Integra. Como posso ajudar? Digite "ajuda" para opções. ', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, isBot: false };
    const botMsg = { text: getBotResponse(input), isBot: true };
    setMessages(msgs => [...msgs, userMsg, botMsg]);
    setInput('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
          style={{
            background: '#5BC561',
            border: 'none',
            borderRadius: '9999px',
            width: 56,
            height: 56,
            boxShadow: '0 4px 24px #0003',
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 100,
            transition: 'background 0.2s'
          }}
          aria-label="Abrir chat"
        >
          <BotMessageSquare className="h-6 w-6" color="#fff" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 shadow-xl flex flex-col"
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 100,
            width: '420px',
            height: '560px',
            borderRadius: 18,
            boxShadow: '0 4px 24px #0003',
            background: '#F8FAFC',
            display: 'flex',
            flexDirection: 'column',
            border: '1.5px solid #5BC561',
            maxWidth: '96vw',
            maxHeight: '90vh',
          }}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3"
            style={{
              background: 'linear-gradient(90deg, #5BC561 70%, #3B8C4B 100%)',
              color: '#fff',
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div className="flex items-center gap-2">
              <BotMessageSquare />
              <span className="text-lg font-semibold">Assistente Virtual</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
              }}
              aria-label="Fechar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Keywords */}
          <div
            style={{
              padding: '12px 20px 0 20px',
              background: '#F8FAFC',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              borderBottom: '1px solid #E5E7EB'
            }}
          >
            {keywords.map((k) => (
              <button
                key={k.value}
                onClick={() => setInput(k.value)}
                style={{
                  background: '#fff',
                  border: '1px solid #5BC561',
                  color: '#3B8C4B',
                  borderRadius: 16,
                  padding: '4px 14px',
                  fontSize: 13,
                  cursor: 'pointer',
                  marginBottom: 4,
                  fontWeight: 500,
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#5BC561';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#3B8C4B';
                }}
                aria-label={`Perguntar sobre ${k.label}`}
              >
                {k.label}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto"
            style={{
              flex: 1,
              padding: '22px 20px 10px 20px',
              background: '#F8FAFC',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} mb-2`}
                style={{
                  display: 'flex',
                  justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
                  marginBottom: 10
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 16px',
                    borderRadius: 14,
                    background: msg.isBot ? '#E9F7EF' : '#5BC561',
                    color: msg.isBot ? '#222' : '#fff',
                    fontSize: 15,
                    wordBreak: 'break-word',
                    boxShadow: msg.isBot
                      ? '0 1px 4px #5BC56122'
                      : '0 1px 4px #3B8C4B22',
                    borderBottomLeftRadius: msg.isBot ? 4 : 14,
                    borderBottomRightRadius: msg.isBot ? 14 : 4,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                  }}
                >
                  <span>{msg.text}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="p-4 border-t"
            style={{
              padding: 20,
              borderTop: '1.5px solid #E5E7EB',
              background: '#fff',
              borderBottomLeftRadius: 18,
              borderBottomRightRadius: 18,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-3 py-2 rounded border border-gray-300"
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: 8,
                border: '1.5px solid #CED8E2',
                outline: 'none',
                fontSize: 15,
                background: '#F8FAFC',
                color: '#112B3C'
              }}
              aria-label="Digite sua mensagem"
            />
            <button
              onClick={sendMessage}
              className="ml-2"
              style={{
                background: '#5BC561',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                fontWeight: 600,
                fontSize: 15,
                boxShadow: '0 2px 8px #5BC56122',
                transition: 'background 0.2s'
              }}
              aria-label="Enviar mensagem"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Responsividade: CSS-in-JS para mobile */}
      <style>
        {`
          @media (max-width: 600px) {
            .fixed.bottom-6.right-6.z-50.shadow-xl.flex.flex-col {
              width: 98vw !important;
              height: 98vh !important;
              min-width: unset !important;
              min-height: unset !important;
              max-width: 100vw !important;
              max-height: 100vh !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              top: 0 !important;
              border-radius: 0 !important;
            }
            .fixed.bottom-6.right-6.z-50.flex.items-center.justify-center {
              right: 16px !important;
              bottom: 16px !important;
              width: 48px !important;
              height: 48px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Chatbot;