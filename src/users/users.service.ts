import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { CommonService } from '@app/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly commonService: CommonService,
  ) {}

  async create({ password, ...rest }: CreateUserInput) {
    const hashPassword = await this.commonService.hashPassword(password);

    return this.userModel.create({ ...rest, password: hashPassword });
  }

  findAll() {
    return this.userModel.find().lean(true);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
