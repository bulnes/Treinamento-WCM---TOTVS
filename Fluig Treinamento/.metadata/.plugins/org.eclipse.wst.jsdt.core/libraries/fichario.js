/**
 * Retorna o valor das propriedades do processo. <b><u>Usar em eventos do processo e eventos de ficharios de processo</u></b>.<br> 
 * <pre>
 *Exemplo:
 *  var numProcesso = getValue("WKNumProces");
 * </pre>
 * Valores
 * <ul>
 * <li>WKDef		C�digo do processo
 * <li>WKVersDef	Vers�o do processo
 * <li>WKNumProces	N�mero do processo
 * <li>WKNumState	N�mero da atividade
 * <li>WKCompany	N�mero da Empresa
 * <li>WKUser		Usu�rio Corrente
 * </ul>
 * @memberOf Global
 * @param {String} nome Nome da propriedade do processo 
 * @returns {String} valor da propriedade <code>nome</code>
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br     
*/
Object.prototype.getValue = function(nome){return "";};

/**
 * Disponibiliza diversas fun��es para manipula��o do fich�rio.
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 * @super Object
 * @memberOf Form
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
Form.prototype=new Object();

/**
 * Habilita/Desabilita a edi��o de um campo do formul�rio. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setEnabled("campo1", false);
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fich�rio
 * @param {Boolean} habilita flag informando se o campo ser� habilitado ou n�o
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
Form.setEnabled = function(nomeCampo, habilita){};

/**
 * Verifica se um campo do formul�rio esta Habilitado/Desabilitado. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  var habilitado = form.getEnabled("campo1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fich�rio
 * @returns {Boolean}  flag indicando se o campo esta habilitado.
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
Form.getEnabled = function(nomeCampo){ return false;};


/**
 * Atribui  valor a um campo do formul�rio. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setValue("campo1", "valor1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fich�rio
 * @param {String} valor novo valor do campo
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
Form.setValue = function(nomeCampo, valor){};

/**
 * Retorna o  valor de um campo do formul�rio. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = form.getValue("campo1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fich�rio
 * @returns {String} valor retorna o valor atual do campo
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
Form.getValue = function(nomeCampo, valor){};

/**
 * Indica se o campo desabilitado � exibido como input (readonly) ou como label. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setShowDisabledFields(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para a ficha ser visualizada em formato HTML com os campos desabilitados (padr�o false)
 * @since   ByYou ECM 3.0.17
 * @see    http://www.totvs.com.br    
 */
Form.setShowDisabledFields = function(condicao){};

/**
 * Indica se o link "imprimir" � exibido. 
 * <b><u>Usar em eventos do Fich�rio(que recebem form como par�metro)</u></b>.
 *<pre>
 *Exemplo:
 *  setHidePrintLink(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para esconder o link "imprimir" e false para o link ser exibido (padr�o false).
 * @since   ByYou ECM 3.0.17
 * @see    http://www.totvs.com.br    
 */
Form.setHidePrintLink = function(condicao){};

/**
 * Indica se o botão "excluir" é exibido. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  setHideDeleteButton(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para esconder o botão "excluir" e false para o link ser exibido (padrão false).
 * @see    http://www.totvs.com.br    
 */
Form.setHideDeleteButton = function(condicao){};



var form = new Form();

/**
 * Possibilita incluir conte�do no html.
 * <b><u>Usar no evento displayFields do fich�rio</u></b>.
 * @super Object
 * @memberOf customHTML
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
customHTML.prototype=new Object();

/**
 * Adiciona conte�do no final do HTML do fich�rio. 
 * <b><u>Usar no evento displayFields do fich�rio</u></b>.
 *<pre>
 *Exemplo:
 *  customHTML.append("&lt;script&gt;var teste = '1';&lt;/script&gt;");
 *  customHTML.append("&lt;script&gt;var usuario ='").append( getValue("WKUser") ).append("'&lt;/script&gt;");
 *</pre>
 * @memberOf customHTML
 * @param {String} conteudo String com o conte�do a ser incluido no HTML
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br    
 */
customHTML.append = function(conteudo){};