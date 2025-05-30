import { IsString, IsNotEmpty, Matches, IsMongoId } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Matches(/^\+\d+$/, {
    message: 'Phone number must start with + and contain digits only.',
  })
  phone_number: string;

  @IsMongoId()
  @IsNotEmpty()
  account: string;
}
