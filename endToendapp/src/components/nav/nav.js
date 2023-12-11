export class NavComponent{
    constructor(authService, renderHandler, templateFunction, router){
        this.authService = authService
        this.renderHandler =renderHandler
        this.templateFunction =templateFunction
        this.router =router
        this.logoutHangler = this._logoutHangler.bind(this)
        this.showView = this._showView.bind(this)

    }
   async  _showView(ctx, next){
        let isUserLoggedIn = this.authService.isUserLoggedIn()
        let template  = this.templateFunction(isUserLoggedIn,this.logoutHangler)
        this.renderHandler(template);
        next()
    }

   async _logoutHangler(){
       await this.authService.logout();
       this.router.navigate('/dashboard')
    }
}