//import { JwtPayload } from "src/auth/interfaces/payload.interface";
import { UserDto } from "src/users/dto/user.dto";
import { UserEntity } from "src/users/entity/user.entity";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, username, email,firstName,lastName,mobileNumber } = data;
    
    const userDto: UserDto = {
        id, username, email,firstName,lastName,mobileNumber
    };
    return userDto;
};

// export const toJwtPayload = (data: UserEntity): JwtPayload => {  
//     const { id, username, email,firstName,lastName,mobileNumber } = data;
    
//     const jwtPayload: JwtPayload = {
//         username
//     };
//     return jwtPayload;
// };


    