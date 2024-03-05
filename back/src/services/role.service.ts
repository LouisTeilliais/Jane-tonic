/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entites/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  // async findOne(id: string): Promise<Role> {
  //   return this.roleRepository.findOne(id);
  // }

  // async create(role: Role): Promise<Role> {
  //   return this.roleRepository.save(role);
  // }

  // async update(id: string, role: Role): Promise<Role> {
  //   await this.roleRepository.update(id, role);
  //   return this.roleRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //   await this.roleRepository.delete(id);
  // }
}
export { Role };

