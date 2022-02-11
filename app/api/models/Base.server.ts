import z from "zod";

import Table from "../database/Table.server";

export default class BaseModel {
	static TableName: string | null = null;
	static Schema = z.object({});

	static getTable<T extends typeof BaseModel = typeof BaseModel>(this: T) {
		return new Table<InstanceType<T>>(this.TableName, (...args) =>
			this.create(...args)
		);
	}

	static create<T extends typeof BaseModel = typeof BaseModel>(
		this: T,
		raw: object
	) {
		return new this(raw) as InstanceType<T>;
	}

	data: any;

	constructor(raw: object) {
		this.data = (this.constructor as typeof BaseModel).Schema.parse(raw);
	}
}
