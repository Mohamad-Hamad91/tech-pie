import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SearchQueryDto } from './dto/query.dto';
import { SearchService } from './search.service';

@Controller({
    path: 'search-company',
    version: '1'
})
@UsePipes(new ValidationPipe({ transform: true }))
export class SearchController {

    constructor(private _searchService: SearchService) { }

    @Post()
    async search(@Body() input: SearchQueryDto) {
        return this._searchService.search(input);
    }


}
