// add toolbar button calling File->Print Preview menu

define([
	'jquery',
	'base/js/namespace'
], function (
	$,
	IPython
) {
    "use strict";

    IPython.toolbar.add_buttons_group([{
        label : 'Create static print view',
        icon : 'fa-print',
        callback : function () { $('#print_preview').click(); }
    }]);
});
