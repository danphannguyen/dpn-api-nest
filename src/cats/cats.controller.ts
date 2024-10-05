import { Controller, Get, Post, Body, UseFilters, ForbiddenException } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

// @UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @UseFilters(HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        return this.catsService.findAll();
    }


}