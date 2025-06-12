import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsModal = ({ open, onOpenChange, type }) => {
  const isTerms = type === 'terms';
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>
            {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            {isTerms ? (
              <>
                <h3 className="font-semibold text-lg">1. Aceitação dos Termos</h3>
                <p>
                  Ao acessar e usar o Cidade Integra, você concorda com estes termos de uso. 
                  Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
                </p>

                <h3 className="font-semibold text-lg">2. Descrição do Serviço</h3>
                <p>
                  O Cidade Integra é uma plataforma digital que permite aos cidadãos reportar 
                  problemas urbanos em suas comunidades, facilitando a comunicação com autoridades 
                  competentes para resolução dos mesmos.
                </p>

                <h3 className="font-semibold text-lg">3. Responsabilidades do Usuário</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Não usar o serviço para fins ilegais ou prejudiciais</li>
                  <li>Respeitar outros usuários e autoridades</li>
                  <li>Não publicar conteúdo ofensivo, discriminatório ou inadequado</li>
                  <li>Manter a confidencialidade de sua conta</li>
                </ul>

                <h3 className="font-semibold text-lg">4. Privacidade e Dados</h3>
                <p>
                  Seus dados pessoais são protegidos conforme nossa Política de Privacidade. 
                  Coletamos apenas informações necessárias para o funcionamento do serviço.
                </p>

                <h3 className="font-semibold text-lg">5. Limitação de Responsabilidade</h3>
                <p>
                  O Cidade Integra não se responsabiliza pela resolução efetiva dos problemas 
                  reportados, atuando apenas como intermediário entre cidadãos e autoridades.
                </p>

                <h3 className="font-semibold text-lg">6. Modificações nos Termos</h3>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações serão comunicadas aos usuários através da plataforma.
                </p>

                <h3 className="font-semibold text-lg">7. Contato</h3>
                <p>
                  Para dúvidas sobre estes termos, entre em contato conosco através dos 
                  canais disponíveis na plataforma.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-lg">1. Informações que Coletamos</h3>
                <p>
                  Coletamos as seguintes informações quando você usa nosso serviço:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo e endereço de e-mail</li>
                  <li>Localização geográfica dos problemas reportados</li>
                  <li>Fotos e descrições dos problemas urbanos</li>
                  <li>Dados de uso da plataforma</li>
                </ul>

                <h3 className="font-semibold text-lg">2. Como Usamos suas Informações</h3>
                <p>
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processar e encaminhar suas denúncias</li>
                  <li>Manter você informado sobre o status das denúncias</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Comunicar atualizações importantes</li>
                </ul>

                <h3 className="font-semibold text-lg">3. Compartilhamento de Dados</h3>
                <p>
                  Compartilhamos suas informações apenas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Com autoridades competentes para resolução dos problemas</li>
                  <li>Quando exigido por lei</li>
                  <li>Com seu consentimento explícito</li>
                </ul>

                <h3 className="font-semibold text-lg">4. Segurança dos Dados</h3>
                <p>
                  Implementamos medidas de segurança adequadas para proteger suas informações 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>

                <h3 className="font-semibold text-lg">5. Seus Direitos</h3>
                <p>
                  Você tem direito a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar exclusão de seus dados</li>
                  <li>Retirar consentimento a qualquer momento</li>
                </ul>

                <h3 className="font-semibold text-lg">6. Cookies e Tecnologias Similares</h3>
                <p>
                  Utilizamos cookies para melhorar sua experiência na plataforma. 
                  Você pode gerenciar suas preferências de cookies nas configurações do navegador.
                </p>

                <h3 className="font-semibold text-lg">7. Contato</h3>
                <p>
                  Para questões sobre privacidade, entre em contato através dos 
                  canais disponíveis na plataforma ou envie um e-mail para 
                  privacidade@cidadeintegra.com.br
                </p>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;