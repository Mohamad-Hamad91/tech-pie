import { Injectable } from "@nestjs/common";
import { Redisearch } from 'redis-modules-sdk';

@Injectable()
export class AutoCompleteService {

    client;

    async getClient() {
        if (!this.client) {
            this.client = new Redisearch('redis://localhost:6379');
            await this.client.connect('redis://localhost:6379');
        }
        return this.client;
    }

    async disconnect() {
        await this.client.disconnect();
    }

    async add(word: string, weight: number = 100): Promise<number> {
        this.getClient();
        return this.client.sugadd('autocomplete', word, weight);
    }

    async get(subWord: string, limit: number = 10): Promise<string[]> {
        this.getClient();
        let result = await this.client.sugget('autocomplete', subWord, limit);
        if(typeof result === 'object') result = Object.keys(result).map((key) => [result[key]]);
        return result;
    }

} 
