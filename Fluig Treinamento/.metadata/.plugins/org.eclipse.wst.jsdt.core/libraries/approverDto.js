/**
 * Disponibiliza diversas funções para consulta de informações da entidade Aprovador.
 * @super Object
 * @memberOf approverDto
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.prototype=new Object();

/**
 * Retorna o número do aprovador
 *<pre>
 * @memberOf approverDto

 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getapproverId = function(){return "";};
/**
 * Retorna a vers?o do aprovador
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getVersion = function(){return "";};

/**
 * Retorna o código da empresa em que o 
aprovador foi publicado. 
 
 *<pre>
 * @memberOf approverDto
 * @returns Integer Retorna o código da empresa em que o aprovador foi publicado. 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getCompanyId = function(){return "";};

/**
 * Retorna a matricula do colaborador que criou o aprovador
 *<pre>
 * @memberOf approverDto
 * @returns String Retorna a matricula do colaborador que criou o aprovador
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getColleagueId = function(){return "";};

/**
 * Retorna o tipo da aprovação, onde: <br>
 *  0 - Colaborador <br>
 *  1 - Grupo <br>
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getApproverType = function(){return "";};

/**
 * Retorna o nível de aprovação, no caso de aprovação em níveis. 
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   ByYou ECM 12
 * @see    http://www.totvs.com.br    
 */
approverDto.getLevelId = function(){return "";};


