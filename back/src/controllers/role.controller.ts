/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { Role } from '../entites/role.entity';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }
}