/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Sport_extjs',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Id',
        dataIndex: 'id',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Name',
        dataIndex: 'name',
        width: 200
    }, { 
        text: 'Belt',
        dataIndex: 'belt',
        width: 200
    }, {
        text: 'Special Power',
        dataIndex: 'special_power',
        width: 20
    }, {
        text: 'Createt_At',
        dataIndex: 'created_at',
        idth: 250
    }, {
        text: 'Updated_At',
        dataIndex: 'updated_at',
        idth: 250
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
