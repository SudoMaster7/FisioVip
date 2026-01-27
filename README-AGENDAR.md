# 📱 Página de Agendamento FisioVIP

Página de captura de leads otimizada para conversão via WhatsApp.

## 🎯 Objetivo

Esta página foi criada especificamente para campanhas de marketing, links em redes sociais (Instagram bio, Facebook Ads, etc.) e conversão direta de visitantes em leads qualificados.

## ✨ Características

### Design
- **Mobile-First**: Otimizada para dispositivos móveis
- **Glassmorphism**: Efeito de vidro moderno e premium
- **Animações Suaves**: Micro-interações que engajam o usuário
- **Gradientes Vibrantes**: Visual atraente e profissional

### Funcionalidades
- ✅ Seleção visual de serviços (6 opções)
- ✅ Formulário com validação em tempo real
- ✅ Formatação automática de telefone
- ✅ Mensagem WhatsApp pré-preenchida
- ✅ Elementos de prova social (depoimentos)
- ✅ Indicadores de confiança (estatísticas)
- ✅ Elemento de urgência ("Vagas Limitadas")

## 📋 Como Usar

### 1. Compartilhar o Link
Você pode compartilhar esta página de várias formas:

**Instagram Bio:**
```
🏥 Agende sua consulta
👇 Link abaixo
```

**Stories do Instagram:**
- Use o link sticker apontando para: `agendar.html`
- Call-to-action: "Agendar Consulta" ou "Reservar Vaga"

**Facebook/Instagram Ads:**
- Use como landing page de conversão
- CTA Button: "Agendar Agora"

**WhatsApp Status:**
- Compartilhe o link direto
- Texto: "Vagas abertas! Agende sua avaliação 🏥"

### 2. Fluxo do Usuário

1. **Usuário clica no link** → Abre a página de agendamento
2. **Seleciona o serviço** → Clica em um dos cards de serviço
3. **Preenche dados** → Nome, telefone, horário preferido
4. **Clica em "Continuar no WhatsApp"** → Abre WhatsApp automaticamente
5. **Mensagem pré-preenchida** → Usuário só precisa enviar
6. **Secretária recebe** → Lead qualificado com todas as informações

### 3. Mensagem Gerada

Quando o usuário clica no botão, o WhatsApp abre com esta mensagem:

```
Olá! Gostaria de agendar uma consulta na FisioVip.

📝 *Dados para Agendamento:*

👤 Nome: [Nome do usuário]
📱 Telefone: [Telefone formatado]
🏥 Serviço: [Serviço selecionado]
⏰ Melhor horário: [Horário escolhido]

Aguardo retorno para confirmar a data e horário da consulta. Obrigado(a)!
```

## 🎨 Serviços Disponíveis

1. **Fisioterapia Integrativa** - Tratamento completo e holístico
2. **Fisioterapia Esportiva** - Para atletas e praticantes
3. **Osteopatia** - Técnicas manuais suaves
4. **Quiropraxia** - Ajustes articulares precisos
5. **Recovery** - Recuperação muscular
6. **Educação em Dor** - Entendimento e manejo da dor

## 📱 Acesso Rápido

**Arquivo Principal:** `agendar.html`

Para testar localmente:
1. Abra o arquivo `agendar.html` em qualquer navegador
2. Preencha o formulário de teste
3. Clique em "Continuar no WhatsApp" para ver a mensagem gerada

## 🔧 Personalização

### Alterar Número do WhatsApp
No arquivo `agendar.js`, linha 89:
```javascript
const whatsappNumber = '5521976086122'; // Altere aqui
```

### Adicionar Mais Serviços
No arquivo `agendar.html`, adicione novos cards no `.service-grid` seguindo o padrão existente.

### Modificar Cores
No arquivo `agendar.css`, altere as variáveis CSS (linhas 11-15):
```css
--color-primary: hsl(180, 70%, 45%);
--color-secondary: hsl(200, 80%, 50%);
--color-accent: hsl(170, 75%, 50%);
```

## 📊 Analytics (Pronto para Integrar)

O código já está preparado para adicionar tracking de conversões. Basta descomentar e configurar no arquivo `agendar.js`:

```javascript
// Google Analytics
gtag('event', 'conversion', {
    'service': data.service,
    'value': 1.0,
    'currency': 'BRL'
});

// Facebook Pixel
fbq('track', 'Lead', {
    content_name: data.service,
    value: 1.0,
    currency: 'BRL'
});
```

## 🚀 Dicas de Conversão

### Aumente a Taxa de Conversão:
1. **Use urgência real**: Atualize "Vagas Limitadas Esta Semana" com informação verdadeira
2. **Adicione foto da clínica**: Inclua imagens reais no lugar dos ícones
3. **Teste com diferentes CTAs**: "Agendar Agora", "Garantir Vaga", "Começar Tratamento"
4. **Remarketing**: Use pixels do Facebook/Instagram para retargeting
5. **Testemunhos com foto**: Adicione fotos reais aos depoimentos (com autorização)

### Otimização para Anúncios:
- **Headlines testadas**: 
  - "Acabe com suas dores em [X] sessões"
  - "Fisioterapia premium no RJ - Agende grátis"
  - "Avaliação gratuita por tempo limitado"

## 📞 Suporte

Para dúvidas sobre a implementação, consulte os arquivos:
- `agendar.html` - Estrutura da página
- `agendar.css` - Estilos e design
- `agendar.js` - Lógica e integração WhatsApp

---

**Desenvolvido para FisioVIP** | Fisioterapia Premium no Rio de Janeiro
