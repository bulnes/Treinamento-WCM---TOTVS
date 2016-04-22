var brunosoap = SuperWidget.extend({
    editMode: false,
    viewMode: false,
    
    init: function() {
    	var _self = this;
    	var _xml;
    	
    	if (this.viewMode) {
    		$.ajax({
    			async: false,
    			dataType: "xml",
    			success: function(xml) {
    				_xml = $(xml);
    			},
    			type: "GET",
    			url: "/brunosoap/resources/js/xmls/ECMCardService_create.xml"
    		});
    		
    		_xml.find("companyId").text( WCMAPI.tenantCode );
    		_xml.find("[name=nome]").text("Meu teste");
    		_xml.find("parentDocumentId").text(153);
    		
    		WCMAPI.Create({
    		    url: "/webdesk/ECMCardService?wsdl",
    		    contentType: "text/xml",
    		    dataType: "xml",
    		    data: _xml[0],
    		    success: function(data){
    		    	var cardId = $(data).find("documentId").text();
    		    	
    		    	console.log("Card criado: ", cardId);
    		    	
    		    	_self.deleteCard(cardId);
    		    }
    		});
    	}
    },
    
    deleteCard: function(cardId) {
    	var xmlDelete;
    	
    	$.ajax({
    		async: false,
    		dataType: "xml",
    		success: function(deleteXML) {
    			xmlDelete = $(deleteXML);
    		},
    		type: "GET",
    		url: "/brunosoap/resources/js/xmls/ECMCardService_delete.xml"
    	});
    	
    	xmlDelete.find("companyId").text(WCMAPI.tenantCode);
    	xmlDelete.find("cardId").text(cardId);
    	
    	WCMAPI.Create({
    	    url: "/webdesk/ECMCardService?wsdl",
    	    contentType: "text/xml",
    	    dataType: "xml",
    	    data: xmlDelete[0],
    	    success: function(data){
    	    	console.log("Card excluído: ", $(data).find("documentId").text());
    	    }
    	});
    },
    
    bindings: {
        local: {
        	"excluir": ["click_excluirCard"]
        },
        global: {}
    },
    
    excluirCard: function() {
    	var cardid = $("#cardid").val();
    	this.deleteCard(cardid);
    	$("#cardid").val("0");
    },
});