var brunoapiuser = SuperWidget.extend({
	editMode: false,
	viewMode: false,
	
    init: function() {
    	if (this.viewMode) {
    		
    		$.ajax({
    			beforeSend: function() {
    				
    			},
    			complete: function() {
    				
    			},
    			error: function() {
    				
    			},
    			success: function(users) {    				
    				$.each(users, function(k, user) {
    					// console.log(user.alias, user.name, user.tenantAdmin);
    					
    					if (user.tenantAdmin) {
    						user.name += " é administrador do Fluig.";
    					} else {
    						user.name += " é básico.";
    					}
    					
    					var $img =  $("<img>", {
    						"src": "/social/api/rest/social/image/profile/" + user.alias + "/X_SMALL_PICTURE",
    						"class": "img-rounded fluig-style-guide thumb-profile thumb-profile-xs"
    					});
    					var $li = $("<li>", {
    						"class": "list-group-item",
    						"text": user.name
    					});
    					$li.prepend($img);
    					
    					$("ul.list-group").append($li);
    				});
    			},
    			type: "GET",
    			url: "/api/public/social/user"
    		});
    		
    	}
    },
    
    bindings: {
        local: {},
        global: {}
    },
});