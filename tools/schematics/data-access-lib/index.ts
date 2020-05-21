import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

export default function (schema: any): Rule {
    if (!schema.name.startsWith('data-access-')) {
        throw new Error(`Data-access lib names should start with 'data-access-'`);
    }

    const stateName = schema.name.replace('data-access-', '');

    return chain([
        externalSchematic('@nrwl/workspace', 'lib', {
            name: schema.name,
            tags: 'type:data-access',
        }),
        externalSchematic('@nrwl/schematics', 'ngrx', {
            name: stateName,
            module: path.join('libs', schema.name, 'src', 'lib', `${schema.name}.module.ts`),
        }),
    ]);
}
