import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {  
    @IsNotEmpty()  id: string;
    @IsNotEmpty()  username: string;
    @IsNotEmpty()  @IsEmail()  email: string;
    firstName:string;
    lastName:string;
    mobileNumber:string;
    token?:string;
}