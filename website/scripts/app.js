import myService from './services/dummy.service.js';
import pageHeader from './components/page-header.component.js';

(function(app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        templateUrl: '/website/templates/frontpage.html',
        directives: [pageHeader],
        services: [myService]
    }).Class({
        constructor: function() {
            this.pageTitle = "My page title";
        }, 
        ngOnInit: function() {
            
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    });
    

})(window.app || (window.app = {}));