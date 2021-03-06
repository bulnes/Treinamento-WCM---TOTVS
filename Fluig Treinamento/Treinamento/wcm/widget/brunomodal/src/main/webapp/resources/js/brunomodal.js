var brunomodal = SuperWidget.extend({
	editMode: false,
	viewMode: false,

    init: function() {
    	if (this.editMode) {
    		FLUIGC.toast({
                title: '',
                message: 'Estou no Edit',
                type: 'success'
            });
    	}
    	else if (this.viewMode) {
    		FLUIGC.toast({
                title: '',
                message: 'Estou na View',
                type: 'success'
            });
    	}
    },
    
    bindings: {
        local: {
        	"openmodal": ["click_openModal"]
        },
        global: {}
    },
    
    openModal: function(el, ev) {
    	var myModal = FLUIGC.modal({
    	    title: 'Title',
    	    content: {
    	    	widgetCode: "brunohelloworld",
    	    	ftl: "view.ftl",
    	    	data: {}
    	    },
    	    id: 'fluig-modal',
    	});
    },
});