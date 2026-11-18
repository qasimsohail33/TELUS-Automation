

class Login
{
    constructor(page){
        this.page = page;
    this.email= page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.button = page.getByRole('button', { name: 'Login' });}

    async goto(){
        await this.page.goto('https://qa.mysalesorders.com/en-US/login');
    }
    async loginuser(email,password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.button.click();}

}


module.exports = Login;