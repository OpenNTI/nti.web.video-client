import * as CSVFormat from "@fast-csv/format";

type Row = Record<string, any>;

export function format(
	rows: Row[],
	options: CSVFormat.FormatterOptionsArgs<Row, Row>
): Promise<string> {
	return CSVFormat.writeToString(rows, options);
}
