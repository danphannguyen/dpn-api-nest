import { Controller, Get, Post } from '@nestjs/common';
import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';

const client = createDirectus('http://localhost:8055')
    .with(staticToken('REPLACE_BY_TOKEN'))
    .with(rest());

// const languageCode = 'fr-FR';
const languageCode = 'en-US';


@Controller('versioning-directus')
export class VersioningDirectusController {

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(): Promise<unknown> {
        const result = client.request(readItems('Card'));
        return result;

        // const pages = await client.request(
        //     readItems('Card', {
        //         deep: {
        //             translations: {
        //                 _filter: {
        //                     _and: [
        //                         {
        //                             languages_code: { _eq: languageCode },
        //                         },
        //                     ],
        //                 },
        //             },
        //         },
        //         fields: ['*', { translations: ['*'] }],
        //         limit: 1,
        //     })
        // );

        // return pages
    }
}
