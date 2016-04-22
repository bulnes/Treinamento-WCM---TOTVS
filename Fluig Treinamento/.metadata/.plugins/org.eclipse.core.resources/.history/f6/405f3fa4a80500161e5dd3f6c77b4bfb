var brunoorganograma = SuperWidget.extend({

    init: function() {
    	var testDataTemplate = [
            {id: 1, img: './images/logo-demo-map.png', name: 'My Organization', parent: 0},
            {id: 2, img: './images/user_picture.png', name: 'Person 1', description: "CEO", email: 'person1@fluig.com', parent: 1},
            {id: 3, img: './images/user_picture.png', name: 'Person 2', description: "Division 1 VP", email: 'person2@fluig.com', parent: 2},
            {id: 4, img: './images/user_picture.png', name: 'Person 3', description: "Division 2 VP", email: 'person3@fluig.com', parent: 2},
            {id: 6, img: './images/user_picture.png', name: 'Person 4', description: "Division 1 Director", email: 'person4@fluig.com', parent: 3},
            {id: 7, img: './images/user_picture.png', name: 'Person 5', description: "Division 1 Director", email: 'person5@fluig.com', parent: 3},
            {id: 8, img: './images/user_picture.png', name: 'Person 6', description: "Division 2 Director", email: 'person6@fluig.com', parent: 4}
        ];
        var settingsTemplate = {
            data: testDataTemplate,
            template: '.my_template_orgchart'
        }
        var testOrgChartTemplate = FLUIGC.orgChart('#orgChartTemplate', settingsTemplate);
        testOrgChartTemplate.on('fluig.orgchart.node.click', function(node){
            FLUIGC.toast({
                title: 'Node clicked: ',
                message: node.data.name,
                type: 'success'
            });
        });
    },
    
    bindings: {
        local: {},
        global: {}
    },
});