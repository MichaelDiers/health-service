'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link"> (v32)</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GuardsModule.html" data-type="entity-link" >GuardsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-f1d871310b4dcb53ae62ed94e4f5620a09f2ebac3f1c3b3dda2defd696805a6b591de2d18c0d9385f147366187c785f44d114c6272c931b6cb37696a0312cf13"' : 'data-target="#xs-controllers-links-module-HealthModule-f1d871310b4dcb53ae62ed94e4f5620a09f2ebac3f1c3b3dda2defd696805a6b591de2d18c0d9385f147366187c785f44d114c6272c931b6cb37696a0312cf13"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-f1d871310b4dcb53ae62ed94e4f5620a09f2ebac3f1c3b3dda2defd696805a6b591de2d18c0d9385f147366187c785f44d114c6272c931b6cb37696a0312cf13"' :
                                            'id="xs-controllers-links-module-HealthModule-f1d871310b4dcb53ae62ed94e4f5620a09f2ebac3f1c3b3dda2defd696805a6b591de2d18c0d9385f147366187c785f44d114c6272c931b6cb37696a0312cf13"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthUsersGrpcModule.html" data-type="entity-link" >HealthUsersGrpcModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthUsersGrpcModule-f049dcfde2d2b0d267be059f06bbe113af0ddd63ab2bcf61c318eba3bce14cde332ed0c725b87b309811a601a1ede544016ebdaffaeb193972e57ba7f13fdae8"' : 'data-target="#xs-injectables-links-module-HealthUsersGrpcModule-f049dcfde2d2b0d267be059f06bbe113af0ddd63ab2bcf61c318eba3bce14cde332ed0c725b87b309811a601a1ede544016ebdaffaeb193972e57ba7f13fdae8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthUsersGrpcModule-f049dcfde2d2b0d267be059f06bbe113af0ddd63ab2bcf61c318eba3bce14cde332ed0c725b87b309811a601a1ede544016ebdaffaeb193972e57ba7f13fdae8"' :
                                        'id="xs-injectables-links-module-HealthUsersGrpcModule-f049dcfde2d2b0d267be059f06bbe113af0ddd63ab2bcf61c318eba3bce14cde332ed0c725b87b309811a601a1ede544016ebdaffaeb193972e57ba7f13fdae8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersGrpcHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersGrpcHealthIndicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthUsersRestModule.html" data-type="entity-link" >HealthUsersRestModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthUsersRestModule-a05b3779958a431037f06671c30f882e8caff2f51b90e1a8e255b4edf9cbd6f268a43a664deeda6dac7866a1dbc52cf13193a3dd6546b2dc398068741dba3c42"' : 'data-target="#xs-injectables-links-module-HealthUsersRestModule-a05b3779958a431037f06671c30f882e8caff2f51b90e1a8e255b4edf9cbd6f268a43a664deeda6dac7866a1dbc52cf13193a3dd6546b2dc398068741dba3c42"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthUsersRestModule-a05b3779958a431037f06671c30f882e8caff2f51b90e1a8e255b4edf9cbd6f268a43a664deeda6dac7866a1dbc52cf13193a3dd6546b2dc398068741dba3c42"' :
                                        'id="xs-injectables-links-module-HealthUsersRestModule-a05b3779958a431037f06671c30f882e8caff2f51b90e1a8e255b4edf9cbd6f268a43a664deeda6dac7866a1dbc52cf13193a3dd6546b2dc398068741dba3c42"' }>
                                        <li class="link">
                                            <a href="injectables/UsersRestHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersRestHealthIndicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccessControlAllowOriginInterceptor.html" data-type="entity-link" >AccessControlAllowOriginInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ApiKeyGuard.html" data-type="entity-link" >ApiKeyGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IGrpcUsersService.html" data-type="entity-link" >IGrpcUsersService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHttpCheck.html" data-type="entity-link" >IHttpCheck</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});