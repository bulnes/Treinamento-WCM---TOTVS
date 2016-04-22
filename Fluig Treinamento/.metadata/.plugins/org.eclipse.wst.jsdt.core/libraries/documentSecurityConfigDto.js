/**
 * Disponibiliza diversas fun��es para consulta de informa��es da entidade documento.
 * @super Object
 * @memberOf documentSecurityConfigDto
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.prototype=new Object();
/**
 * Retorna o n�mero do documento. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna o n�mero do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getDocumentId = function(){return "";};
/**
 * Retorna a vers�o do documento. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna a vers�o do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getVersion = function(){return "";};
/**
 * Retorna o c�digo da empresa em que o <br>
 * documento foi publicado. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna o c�digo da empresa em que o documento foi publicado. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getCompanyId = function(){return "";};
/**
 * Retorna a matricula de um colaborador ou o c�digo do 
*	grupo que est� na seguran�a deste documento. � 
*	poss�vel saber se vai retornar um colaborador ou um 
*	grupo pelo tipo da seguran�a. 
*	Obs.: Retorna em branco quando o tipo � todos os 
*	usu�rios.  
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns String  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getAttributionValue = function(){return "";};
/**
 * Retorna se � uma permiss�o. 
 * Obs.: Se n�o � uma permiss�o � uma restri��o. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getPermission = function(){return "";};
/**
 * Retorna se lista o conte�do.
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getShowContent = function(){return "";};
/**
 * Retorna no n�vel de permiss�o/restri��o, onde: <br> 
   -1 - sem permiss�o/restri��o (nega acesso); <br>
	0 - Leitura; <br>
	1 - Grava��o; <br>
	2 - Modifica��o; <br>
	3 - Total. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Integer  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getAttributionType = function(){return "";};
/**
 * Retorna a sequ�ncia da permiss�o/restri��o. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getSequence = function(){return "";};
/**
 * Retorna se ele utiliza a seguran�a deste vers�o nas demais. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getSecurityVersion = function(){return "";};
