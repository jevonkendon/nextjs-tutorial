import { Client } from 'pg';

export class PgClient {
    private static instance: PgClient;
    public client: Client;

    private constructor() {
        this.client = new Client();
    }

    public static async retrieve() {
        if (!this.instance) {
            this.instance = new PgClient();
            await this.instance.client.connect();
        }
        return this.instance;
    }
}
