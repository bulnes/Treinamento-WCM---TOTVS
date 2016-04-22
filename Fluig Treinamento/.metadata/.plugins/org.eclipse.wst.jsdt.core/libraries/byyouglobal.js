/**
 *  Permite a passagem de parametros entre eventos do Workflow.
 * <b><u>Usar em eventos de processos</u></b>.
 * @super Object
 * @memberOf globalvars
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
globalvars.prototype=new Object();

/**
 * Inclui um novo valor nos parametros gerais. 
 * <b><u>Usar em eventos de processos</u></b>.
 *<pre>
 *Exemplo:
 *  globalvars.put("nome", "valor"); 
 *</pre>
 * @memberOf globalvars
 * @param {String} nome Nome do parametro
 * @param {Object} valor Valor do parametro
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
globalvars.put = function(nome, valor){};

/**
 * Recupera um valor da tabela de parametros gerais. 
 * <b><u>Usar em eventos de processos</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = globalvars.get("nome"); 
 *</pre>
 * @memberOf globalvars
 * @param {String} nome Nome do parametro
 * @returns {Object} Valor do parametro
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
globalvars.get = function(nome){return new Object();};

/**
 *  A vari�vel log permite ao usu�rio enviar mensagens que ficar�o expostas no log do ECM server durante a execu��o 
 * de um processo.
 * <b><u>Usar em qualquer evento</u></b>.
 * @super Object
 * @memberOf log
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
log.prototype=new Object();

/**
 * Efetua log de uma String com a 'criticidade' INFO. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.info('Teste logger');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
log.info = function(msg){};


/**
 * Efetua log de uma String com a 'criticidade' WARNING. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.warn('Poss�vel erro');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
log.warn = function(msg){};

/**
 * Efetua log de uma String com a 'criticidade' ERROR. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.error('Erro: ');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
log.error = function(msg){};

/**
 * Efetua log de uma String com a 'criticidade' FATAL. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.fatal('erro fatal: ');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
log.fatal = function(msg){};


/**
 * Disponibiliza diversas fun��es para o envio de e-mail.
 * <b><u>Usar em eventos do Processo</u></b>.
 * @super Object
 * @memberOf notifier
 * @since   ByYou ECM 3.0.17
 * @see    http://www.totvs.com.br    
 */
notifier.prototype=new Object();

/**
 * Envia um e-mail customizado. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *	var parametros = new java.util.HashMap();
 *  parametros.put("NOME_USUARIO", "JOAO");
 *  parametros.put("CODIGO_USUARIO", "01");
 *  //Este parametro e obrigatorio e representa o assunto do e-mail
 *  parametros.put("subject", "ASSUNTO");
 *  
 *  var usuarios = new java.util.ArrayList();
 *  usuarios.add('adm');
 *  
 *  notifier.notify('adm', 'mail1', parametros, usuarios, 'text/html');
 *</pre>
 * @memberOf notifier
 * @param {String} from Matr�cula do usuario que esta enviando o e-mail
 * @param {String} template c�digo do template (tela de customizacao de e-mail)
 * @param {Object} parametros Map com os parametros do e-mail
 * @param {Object} to List com os destinat�rios do e-mail
 * @param {String} mimeType Tipo do conte�do do email 'text/html' ou 'text/plain'
 * @since   ByYou ECM 3.0.17
 * @see    http://www.totvs.com.br    
 */
notifier.notify = function(from, template, parametros, to, mimeType){};

/**
 * Disponibiliza diversas fun��es para o uso de servi�os (Progress).
 * <b><u>Usar em qualquer evento</u></b>.
 * @super Object
 * @memberOf ServiceManager
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
ServiceManager.prototype=new Object();

/**
 * Obtem a classe ServiceHelper do servico especificado. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 * var servico = ServiceManager.getService("ems2_v10");
 * var serviceHelper = servico.getBean(); 
 * </pre>
 * @memberOf ServiceManager
 * @param {String} idServico Id do servico (cadastro de servicos)
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
ServiceManager.getService = function(idServico){return new Object()};
