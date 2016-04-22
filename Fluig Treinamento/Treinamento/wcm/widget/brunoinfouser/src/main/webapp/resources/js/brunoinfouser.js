var brunoinfouser = SuperWidget.extend({
	editMode: false,
	viewMode: false,
	
    init: function() {
    	if (this.viewMode) {
    		$("#nome_do_usuario", this.getContext()).text( WCMAPI.user );
    	}
    },
    
    bindings: {
        local: {
        	"salvar": ["click_save"]
        },
        global: {}
    },
    
    getContext: function() {
    	if (!this.context) {
    		this.context = $("#brunoinfouser_" + this.instanceId);
    	}
    	return this.context;
    },
    
    save: function() {
    	var args = {
			'salario': $("#salario", this.getContext()).val()
    	};
    	
    	var result = WCMSpaceAPI.PageService.UPDATEPREFERENCES(
    			{async: false}, 
    			this.instanceId, 
    			args
		);
    	
    	if (result) {
    		FLUIGC.toast({
    			title: "",
    			message: "Salvou!",
    			type: "success"
    		});
    	} 
    	else {
    		FLUIGC.toast({
    			title: "Atenção!",
    			message: "Não salvou",
    			type: "danger"
    		});
    	}
    }
});