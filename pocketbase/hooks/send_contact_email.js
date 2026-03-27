onRecordAfterCreateSuccess((e) => {
  const record = e.record
  const html = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2D9B5C;">Novo Contato pelo Site</h2>
      <p>Você recebeu uma nova solicitação de orçamento/contato pelo site Zen Viver Terapias.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Nome:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${record.get('name')}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${record.get('email')}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Telefone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${record.get('phone')}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Serviço de Interesse:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${record.get('service')}</td></tr>
      </table>
      <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
        <h4 style="margin-top: 0;">Detalhes da Mensagem:</h4>
        <p style="white-space: pre-wrap; margin-bottom: 0;">${record.get('message')}</p>
      </div>
    </div>
  `

  try {
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress || 'noreply@zenviver.com.br',
        name: $app.settings().meta.senderName || 'Zen Viver Terapias',
      },
      to: [{ address: 'atendimento@zenviver.com.br' }],
      subject: 'Novo Contato pelo Site - Zen Viver Terapias',
      html: html,
    })

    $app.newMailClient().send(message)
    console.log('Email notification sent for contact_message: ' + record.id)
  } catch (err) {
    console.log('Failed to send email notification: ', err)
  }

  e.next()
}, 'contact_messages')
