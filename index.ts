function check_email(email: any)
{
    const email_expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;        //regular expression for valid email
    const result: boolean = email_expression.test(email);                               //checking email for validity
    return result
}

const input_email: any = prompt("Enter email: ")
if(check_email(input_email))            
 //call function to check email
{
    console.log("Valid email.")
}
else
{
    console.log("Invalid email.")
}