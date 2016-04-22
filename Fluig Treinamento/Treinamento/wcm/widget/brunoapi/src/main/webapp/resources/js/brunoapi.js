var brunoapi = SuperWidget.extend({
	editMode: false,
	viewMode: false,
	
    init: function() {
    	var self = this;
    	
    	if (this.editMode) {
    		
    	}
    	
    	if (this.viewMode) {
    		$.ajax({
    			success: function(comunidades) {
    				$.each(comunidades.content, function(k, comunidade) {    					
    					var a = $("<a>", {
    						"href": comunidade.uriCommunity,
    						"target": "_blank",
    						"text": comunidade.name
    					});
    					
    					var li = $("<li>", {
    						"class": "list-group-item"
    					});
    					li.append(a);
    					
    					$("ul.list-group", self.getContext()).append(li);
    				});
    			},
    			type: "GET",
    			url: "/api/public/social/community/listCommunities"
    		});
    	}
    },
    
    getContext: function() {
    	if (!this.context) {
    		this.context = $("#brunoapi_" + this.instanceId);
    	}
    	return this.context;
    },
    
    bindings: {
        local: {},
        global: {}
    },
});