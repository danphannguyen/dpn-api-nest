import { Controller, Get, Post, Body, UseFilters, ForbiddenException, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
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
        // throw new ForbiddenException();
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) 
        //? Si on veut changer le code d'erreur
        //? Sinon on utilise simplement : async findOne(@Param('id', ParseIntPipe) id: number) {
        id: number,
    ) {
        return this.catsService.findOne(id);
    }


}