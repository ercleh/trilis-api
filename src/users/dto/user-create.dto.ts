import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class UserCreateDto {

@IsNotEmpty({message:"identifiant obligatoire"})
@MaxLength(50)
username: string;

@IsNotEmpty({message:"mot de passe obligatoire"})
@MaxLength(50)
password: string;

@IsNotEmpty({message:"email obligatoire"})
@MaxLength(50)
@IsEmail()
email:string;

@IsNotEmpty({message:"nom obligatoire"})
@MaxLength(50)
firstName: string;

@IsNotEmpty({message:"nom obligatoire"})
@MaxLength(50)
lastName: string;

@IsNotEmpty({message:"numéro de mobile obligatoire"})
@MaxLength(50)
mobileNumber: string;

}
