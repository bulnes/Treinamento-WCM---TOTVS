/**
 * Propriedade contentdo o �ltimo Id de um filho (cadastro pai/filho).<b><u>Dispon�vel quando o fich�rio possui um pai/filho padr�o</u></b>.<br>
 * &lt;table  tablename="nomeDoFilho"&gt;&lt;/table&gt;
 * @type {Number}
 * @memberOf Global
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br     
 */
Global.prototype.newId=0;


/**
 * Retorna o dados de um determinado dataset/fich�rio. <b><u>Usar no HTML de qualquer fich�rio</u></b>.<br> 
 *<u>O arquivo vcXMLRPC.js precisa ser declarado</u><br>
 *&lt;script&gt; type="text/javascript" src="/webdesk/vcXMLRPC.js"&gt;&lt;/script&gt;
 * <pre>
 *Exemplo:
 * 
 *  var filtro = new Object();
 *  filtro["colleaguePK.colleagueId"] = "adm";
 *  var colaboradores = getDatasetValues("colleague", filtro);
 * 		
 *  if(colaboradores.length > 0) {
 *    alert(colaboradores[0].colleagueName);
 *  }
 * <pre>
 * @memberOf Global
 * @param {String} tablename nome da tabela filho. Atributo <code>tablename</code> de uma table.
 * @returns {Number} Id do filho criado
 * @since   ByYou ECM 3.0.16
 * @see    http://www.totvs.com.br     
*/
Object.prototype.wdkAddChild = function(tablename){return 0;};


