/**
 * Disponibiliza diversas funções para consulta de informações da entidade documento.
 * @super Object
 * @memberOf documentSecurityConfigDto
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.prototype=new Object();
/**
 * Retorna o número do documento. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna o número do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getDocumentId = function(){return "";};
/**
 * Retorna a versão do documento. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna a versão do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getVersion = function(){return "";};
/**
 * Retorna o código da empresa em que o <br>
 * documento foi publicado. <br><br>
 *<pre>
 * @memberOf relatedDocumentDto
 * @returns int Retorna o código da empresa em que o documento foi publicado. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getCompanyId = function(){return "";};
/**
 * Retorna a matricula de um colaborador ou o código do 
*	grupo que está na segurança deste documento. É 
*	possível saber se vai retornar um colaborador ou um 
*	grupo pelo tipo da segurança. 
*	Obs.: Retorna em branco quando o tipo é todos os 
*	usuários.  
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns String  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getAttributionValue = function(){return "";};
/**
 * Retorna se é uma permissão. 
 * Obs.: Se não é uma permissão é uma restrição. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getPermission = function(){return "";};
/**
 * Retorna se lista o conteúdo.
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getShowContent = function(){return "";};
/**
 * Retorna no nível de permissão/restrição, onde: <br> 
   -1 - sem permissão/restrição (nega acesso); <br>
	0 - Leitura; <br>
	1 - Gravação; <br>
	2 - Modificação; <br>
	3 - Total. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Integer  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getAttributionType = function(){return "";};
/**
 * Retorna a sequência da permissão/restrição. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getSequence = function(){return "";};
/**
 * Retorna se ele utiliza a segurança deste versão nas demais. 
 *<pre>
 * @memberOf documentSecurityConfigDto
 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentSecurityConfigDto.getSecurityVersion = function(){return "";};
