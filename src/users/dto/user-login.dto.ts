import { IsNotEmpty, MaxLength } from "class-validator";

export class UserLoginDto {

@IsNotEmpty({message:"identifiant obligatoire"})
@MaxLength(50) 
readonly username: string;

@IsNotEmpty({message:"mot de passe obligatoire"})
@MaxLength(50)
readonly password: string;

}
