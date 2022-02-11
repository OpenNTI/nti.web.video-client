import arc from "@architect/functions";
import { ArcTable } from "@architect/functions/tables";

export default class Table<T> {
	private tableName: string;

	private table: ArcTable | null = null;
	private parse: (raw: object) => T;

	constructor(tableName: string | null, parse: (raw: object) => T) {
		if (!tableName) {
			throw new Error("Table must be given a table name.");
		}

		this.tableName = tableName;
		this.parse = parse;
	}

	get name() {
		return this.tableName;
	}

	async setupTable() {
		if (!this.table) {
			const tables = await arc.tables();

			this.table = tables[this.tableName];
		}

		return this.table;
	}

	async get(key: any) {
		const table = await this.setupTable();
		const resp = await table.get(key);

		return this.parse(resp);
	}

	async put(data: object) {
		const table = await this.setupTable();
		const resp = await table.put(data);

		return this.parse(resp);
	}

	async update(query: object) {
		const table = await this.setupTable();

		await table.update(query);
	}
}
