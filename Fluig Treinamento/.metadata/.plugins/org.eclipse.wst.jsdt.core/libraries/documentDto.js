/**
 * Disponibiliza diversas fun��es para consulta de informa��es da entidade documento.

 * @super Object
 * @memberOf documentDto
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.prototype=new Object();

/**
 * Retorna o n�mero do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o n�mero do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentId = function(){return "";};
/**
 * Retorna a vers�o do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna a vers�o do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getVersion = function(){return "";};

/**
 * Retorna o c�digo da empresa em que o 
documento foi publicado. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o c�digo da empresa em que o documento foi publicado. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getCompanyId = function(){return "";};

/**
 * Retorna o UUID (identificador Único Global) do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o UUID (identificador Único Global) do documento. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getUUID()  = function(){return "";};

/**
 * Retorna o tipo do arquivo f�sico, se retornar branco ou nulo � porque esse tipo não � 
	conhecido pelo ECM.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o tipo do arquivo f�sico, se retornar branco ou nulo � porque esse tipo não � conhecido pelo ECM. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentTypeId = function(){return "";};

/**
 *Retorna o c�digo do Idioma do documento.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o c�digo do Idioma do documento.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getLanguageId = function(){return "";};

/**
 * Retorna o c�digo do Ícone do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o c�digo do Ícone do documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getIconId = function(){return "";};

/**
 *Retorna o c�digo do assunto do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o c�digo do assunto do documento.  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getTopicId = function(){return "";};

/**
 * Retorna a matricula do colaborador que criou o documento

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna a matricula do colaborador que criou o documento
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getColleagueId = function(){return "";};

/**
 * Retorna a descri��o do documento.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna a descri��o do documento.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentDescription = function(){return "";};

/**
 * Retorna os coment�rios adicionais do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna os coment�rios adicionais do documento.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getAdditionalComments = function(){return "";};

/**
 * Retorna o caminho f�sico onde o documento est� armazenado.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o c�digo da empresa em que o documento foi publicado.  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPhisicalFile = function(){return "";};

/**
 * Retorna a data de cria��o.  

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a data de cria��o. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getCreateDate = function(){return "";};

/**
 * Retorna a data de Aprova��o.   

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a data de Aprova��o. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getApprovedDate = function(){return "";};

/**
 * Retorna a Data da �ltima modifica��o.   

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a Data da �ltima modifica��o. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getLastModifiedDate = function(){return "";};



/**
 * Retorna o tipo do documento, onde: <br> 
	0 - Pasta raiz <br>
	1 - Pasta <br>
	2 - Documento normal <br> 
	3 - Documento externo <br>
	4 - Fich�rio <br>
	5 - Ficha <br>
	7 - Anexo Workflow <br> 
	8 - Novo Conte�do <br>
	9 - A plicativo <br>
	10 - Relat�rio <br>
	15 - Pasta Social <br>
	portal -Site <br>
	portalPage - P�gina de Site <br> <br> 
*<pre>
 * @memberOf documentDto
 * @returns String Tipo do Documento
 *  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentType = function(){return "";};

/**
 * Retorna a data de expira��o.    

 *<pre>
 * @memberOf documentDto

 * @returns Date Data de expira��o.  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getExpirationDate = function(){return "";};



/**
 * Retorna o n�mero da Pasta/Fich�rio pai 

 *<pre>
 * @memberOf documentDto

 * @returns Integer N�mero da Pasta/Fich�rio pai 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getParentDocumentId = function(){return "";};

/**
 * String com o nome do arquivo f�sico principal e anexos.  

 *<pre>
 * @memberOf documentDto

 * @returns String String com o nome do arquivo f�sico principal e anexos.  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getRelatedFiles = function(){return "";};

/**
 * Verifica se o documento est� ativo  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se a vers�o � ativa.  
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getActiveVersion = function(){return "";};

/**
* Retorna a descri��o da vers�o. 
* <b><u>Usar em eventos do ECM</u></b>.
*<pre>
* @memberOf documentDto

* @returns String Retorna a descri��o da vers�o.
* @since   ByYou ECM 12
* @see    http://www.totvs.com.br    
*/
documentDto.getVersionDescription = function(){return "";};

/**
 * Retorna se o documento permite Download 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se o documento permite Download
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDownloadEnabled = function(){return "";};

/**
 * Retorna se o documento est� em aprova��o. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se o documento est� em aprova��o.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getApproved = function(){return "";};


/**
 * Retorna a partir de que data em que o documento poder� ser visualizado 

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a partir de que data em que o documento poder� ser visualizado.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getValidationStartDate = function(){return "";};

/**
 * Retorna a matricula do colaborador que publicou o documento.

 *<pre>
 * @memberOf documentDto

 * @returns String A matricula do colaborador que publicou o documento. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPublisherId = function(){return "";};

/**
 * Retorna a descri��o da ficha, para 
documento do tipo 5. 

 *<pre>
 * @memberOf documentDto

 * @returns String Descri��o da ficha, para documento do tipo 5.
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getCardDescription  = function(){return "";};

/**
 * Retorna o fich�rio que foi usado como base 
	para cria��o da ficha, por isso s� tem um 
	valor quando o documento � do tipo 5 
	(ficha). 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Numero do Fich�rio
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentPropertyNumber = function(){return "";};

/**
 * Retorna a vers�o do fich�rio em que a ficha foi criada. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Vers�o do fich�rio em que a ficha foi criada. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDocumentPropertyVersion = function(){return "";};

/**
 * Retorna o c�digo da empresa em que o 
documento foi publicado. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o c�digo da empresa em que o documento foi publicado. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getCompanyId = function(){return "";};

/**
 * Retorna se o documento/pasta est� abaixo 
	da pasta particular.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPrivateDocument = function(){return "";};

/**
 * Se � um documento particular retorna a matricula do colaborador onde este documento est� alocado. 

 *<pre>
 * @memberOf documentDto

 * @returns String
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPrivateColleagueId = function(){return "";};

/**
 * Retorna se o documento j� foi indexado. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getIndexed = function(){return "";};

/**
 * Retorna a prioridade do documento.  

 *<pre>
 * @memberOf documentDto

 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPriority = function(){return "";};

/**
 * Retorna se notifica os usu�rios que tenham esse assunto de interesse.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getUserNotify = function(){return "";};

/**
 * Retorna se o documento est� expirado. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getExpires = function(){return "";};

/**
 * Retorna o volume onde o documento foi 
publicado, se estiver em branco ele utiliza o 
volume do pai. 

 *<pre>
 * @memberOf documentDto

 * @returns String C�digo do Volume 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getVolumeId = function(){return "";};

/**
 * Retorna se herda segurança do pai  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getInheritSecurity = function(){return "";};

/**
 * Retorna se atualiza as propriedades da c�pia controlada.  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getUpdateIsoProperties = function(){return "";};

/**
 * Retorna a hora da �ltima modifica��o em milissegundos

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getLastModifiedTime = function(){return "";};

/**
 * Retorna se o documento est� na lixeira.  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDeleted = function(){return "";};

/**
 * Retorna o documento do dataset , se o documento � um fich�rio. 

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDatasetName = function(){return "";};


/**
 * Retorna as palavras chaves do documento. 
Cada palavra � separada por v�rgula.

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getKeyWord = function(){return "";};

/**
 * Retorna se a vers�o/revis�o inalter�vel.   

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getImutable = function(){return "";};

/**
 * Retorna se o documento est� em edi��o, para documento do tipo "Novo Conte�do" <br>.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getDraft = function(){return "";};

/**
 * Retorna se utiliza visualizador interno

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getInternalVisualizer = function(){return "";};

/**
 * Retorna o tamanho f�sico do documento principal e anexos.  

 *<pre>
 * @memberOf documentDto

 * @returns Float
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
documentDto.getPhisicalFileSize = function(){return "";};



