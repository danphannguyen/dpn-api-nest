import { HttpCode, Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';


@Controller('cats')
export class CatsController {
    // @Post()
    // @Header('Cache-Control', 'none') //? Permet de définir des headers
    // @HttpCode(204)
    // create() {
    //     return 'This action adds a new cat';
    // }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return `This action adds a new cat name: ${createCatDto.name}, age: ${createCatDto.age}, breed: ${createCatDto.breed}`;
    }

    // ? Permet d'utiliser une fonction async
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    // @Get()
    // @HttpCode(200)
    // @Redirect('https://nestjs.com', 302) //? Permet de rediriger vers une autre page
    // findAll(): string {
    //     return 'This action returns all cats';
    // }

    // ? Permet de rediriger vers une autre page selon le paramètre version
    // getDocs(@Query('version') version) {
    //     if (version && version === '5') {
    //         return { url: 'https://docs.nestjs.com/v5/' };
    //     }
    // }

    @Get(':id')
    findOne(@Param() params: { id: number }): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    // ? Autres manières de récupérer les paramètres
    // findOne(@Param('id') id: string): string {
    //     return `This action returns a #${id} cat`;
    // }

    // @Get('ab*cd')
    // findAll() {
    //     return 'This route uses a wildcard';
    // }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return `This action adds a new cat name: ${createCatDto.name}, age: ${createCatDto.age}, breed: ${createCatDto.breed}`;
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}