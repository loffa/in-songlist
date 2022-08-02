import { existsSync } from 'fs';
import { join } from 'path';

async function main() {
	const [_node, _file, script, ...args] = process.argv;

	const scriptFile = script.endsWith('.ts') ? script : script + '.ts';

	if (existsSync(join(process.cwd(), 'src/scripts', scriptFile))) {
		(await import(`./${script}`)).default?.(...args);
	} else {
		console.error(`No script with the name '${script}' exists`);
	}
}

main();
