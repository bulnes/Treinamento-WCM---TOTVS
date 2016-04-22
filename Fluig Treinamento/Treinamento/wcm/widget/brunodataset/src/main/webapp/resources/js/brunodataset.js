var brunodataset = SuperWidget.extend({
	editMode: false,
	viewMode: false,

    init: function() {
    	if (this.viewMode) {
    		var constraint = [
    		    DatasetFactory.createConstraint("login", WCMAPI.userLogin, WCMAPI.userLogin, ConstraintType.MUST)
            ];
    		var colleague = DatasetFactory.getDataset("colleague", null, constraint, null);
    		console.log(colleague);
    	}
    },
    
    bindings: {
        local: {},
        global: {}
    },
});