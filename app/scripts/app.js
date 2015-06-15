/* global angular */

'use strict';

angular
        .module('mbApp', [
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'angulartics',
                'angulartics.google.analytics'
        ])
        .config(function ($analyticsProvider) {
            $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
            $analyticsProvider.withAutoBase(true);  /* Records full path */
        })
        .config(function ($routeProvider) {
        $routeProvider
                .when('/home', {
                templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                })
                .when('/about', {
                templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                })
                .when('/services', {
                templateUrl: 'views/services.html',
                        controller: 'ServicesCtrl'
                })
                .when('/contact', {
                templateUrl: 'views/contact.html',
                        controller: 'ContactCtrl'
                })
                .when('/portfolio/portfolio-1-col', {
                templateUrl: 'views/portfolio/portfolio-1-col.html',
                        controller: 'PortfolioPortfolio1ColCtrl'
                })
                .when('/portfolio/portfolio-2-col', {
                templateUrl: 'views/portfolio/portfolio-2-col.html',
                        controller: 'PortfolioPortfolio2ColCtrl'
                })
                .when('/portfolio/portfolio-3-col', {
                templateUrl: 'views/portfolio/portfolio-3-col.html',
                        controller: 'PortfolioPortfolio3ColCtrl'
                })
                .when('/portfolio/portfolio-4-col', {
                templateUrl: 'views/portfolio/portfolio-4-col.html',
                        controller: 'PortfolioPortfolio4ColCtrl'
                })
                .when('/portfolio/portfolio-item', {
                templateUrl: 'views/portfolio/portfolio-item.html',
                        controller: 'PortfolioItemCtrl'
                })
                .when('/blog/blog-home-1', {
                templateUrl: 'views/blog/blog-home-1.html',
                        controller: 'BlogBlogHome1Ctrl'
                })
                .when('/blog/blog-home-2', {
                templateUrl: 'views/blog/blog-home-2.html',
                        controller: 'BlogBlogHome2Ctrl'
                })
                .when('/blog/blog-post', {
                templateUrl: 'views/blog/blog-post.html',
                        controller: 'BlogBlogPostCtrl'
                })
                .when('/other/faq', {
                  templateUrl: 'views/other/faq.html',
                  controller: 'OtherFaqCtrl'
                })
                .when('/other/sidebar', {
                  templateUrl: 'views/other/sidebar.html',
                  controller: 'OtherSidebarCtrl'
                })
                .when('/other/404', {
                  templateUrl: 'views/other/404.html',
                  controller: 'Other404Ctrl'
                })
                .when('/other/full-width', {
                  templateUrl: 'views/other/full-width.html',
                  controller: 'OtherFullWidthCtrl'
                })
                .when('/other/pricing-table', {
                  templateUrl: 'views/other/pricing-table.html',
                  controller: 'OtherPricingTableCtrl'
                })
                .otherwise({
                redirectTo: '/home'
                });
        });
